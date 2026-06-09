/**
 * IndexNow utility for submitting URLs to Bing's IndexNow service
 * Docs: https://www.indexnow.org/documentation
 */

const API_KEY =
  process.env.NEXT_PUBLIC_INDEXNOW_KEY || "a7ea15a328334de0bcd5588ccc19fa69";
const INDEXNOW_API_ENDPOINT = "https://api.indexnow.org/indexnow";

interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

/**
 * Submits a batch of URLs to IndexNow
 * @param urls - Array of URLs to submit
 * @param host - Your domain (e.g., 'www.example.com')
 * @param keyLocation - Full URL to your key file (e.g., 'https://www.example.com/a7ea15a328334de0bcd5588ccc19fa69.txt')
 */
export async function submitToIndexNow(
  urls: string[],
  host: string,
  keyLocation: string,
): Promise<{
  success: boolean;
  status?: number;
  message: string;
  error?: unknown;
}> {
  if (!urls || urls.length === 0) {
    return { success: false, message: "No URLs provided" };
  }

  // IndexNow API has a limit of 10,000 URLs per request
  const chunks = [];
  for (let i = 0; i < urls.length; i += 10000) {
    chunks.push(urls.slice(i, i + 10000));
  }

  try {
    for (const chunk of chunks) {
      const payload: IndexNowPayload = {
        host,
        key: API_KEY,
        keyLocation,
        urlList: chunk,
      };

      const response = await fetch(INDEXNOW_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          `IndexNow API error: ${response.status} ${response.statusText}`,
          errorText,
        );

        if (response.status === 403) {
          return {
            success: false,
            status: response.status,
            message: "Invalid API key. Please check your key file.",
            error: errorText,
          };
        }

        if (response.status === 422) {
          return {
            success: false,
            status: response.status,
            message:
              "Invalid request format or URLs do not belong to the host.",
            error: errorText,
          };
        }

        if (response.status === 429) {
          return {
            success: false,
            status: response.status,
            message: "Too many requests. Please try again later.",
            error: errorText,
          };
        }

        return {
          success: false,
          status: response.status,
          message: `API error: ${response.statusText}`,
          error: errorText,
        };
      }
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

/**
 * Submit a single URL to IndexNow immediately
 */
export async function submitSingleUrlToIndexNow(
  url: string,
  host: string,
  keyLocation: string,
): Promise<{
  success: boolean;
  status?: number;
  message: string;
  error?: unknown;
}> {
  return submitToIndexNow([url], host, keyLocation);
}
