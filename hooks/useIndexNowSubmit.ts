/**
 * Hook for submitting URLs to IndexNow after publishing content
 *
 * Usage in a component:
 * const { submitUrls, isLoading, error } = useIndexNowSubmit();
 * await submitUrls(['https://example.com/new-page']);
 */

"use client";

import { useState, useCallback } from "react";

interface SubmissionResult {
  success: boolean;
  status?: number;
  message: string;
  error?: unknown;
}

export function useIndexNowSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitUrls = useCallback(
    async (urls: string[]): Promise<SubmissionResult> => {
      if (!urls || urls.length === 0) {
        const result = { success: false, message: "No URLs provided" };
        setError(result.message);
        return result;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/indexnow", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ urls }),
        });

        const data = (await response.json()) as SubmissionResult;

        if (!response.ok) {
          setError(data.message || "Failed to submit URLs");
          return {
            success: false,
            status: response.status,
            message: data.message || "Failed to submit URLs",
            error: data.error,
          };
        }

        return {
          success: true,
          message: data.message,
          error: data.error,
        };
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error occurred";
        setError(errorMessage);
        return { success: false, message: errorMessage, error: err };
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    submitUrls,
    isLoading,
    error,
    clearError,
  };
}

/**
 * Server-side function to submit URLs after content creation
 * Can be used in Server Actions
 *
 * Usage in a Server Action:
 * 'use server'
 * import { submitUrlsToIndexNow } from '@/hooks/useIndexNowSubmit';
 *
 * export async function publishNewBlogPost(url: string) {
 *   // ... publish logic
 *   await submitUrlsToIndexNow([url]);
 * }
 */
export async function submitUrlsToIndexNow(
  urls: string[],
): Promise<SubmissionResult> {
  if (!urls || urls.length === 0) {
    return { success: false, message: "No URLs provided" };
  }

  const host = process.env.VERCEL_URL || "orionitservice.com";
  const keyLocation = `https://${host}/a7ea15a328334de0bcd5588ccc19fa69.txt`;

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: host.replace("www.", ""),
        key:
          process.env.NEXT_PUBLIC_INDEXNOW_KEY ||
          "a7ea15a328334de0bcd5588ccc19fa69",
        keyLocation,
        urlList: urls,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`IndexNow API error: ${response.status}`, errorText);

      if (response.status === 403) {
        return {
          success: false,
          status: response.status,
          message: "Invalid API key",
          error: errorText,
        };
      }

      return {
        success: false,
        status: response.status,
        message: `API error: ${response.status}`,
        error: errorText,
      };
    }

    return {
      success: true,
      message: `Successfully submitted ${urls.length} URLs to IndexNow`,
    };
  } catch (error) {
    console.error("Error submitting to IndexNow:", error);
    return {
      success: false,
      message: "Failed to submit URLs to IndexNow",
      error,
    };
  }
}
