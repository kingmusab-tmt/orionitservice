export function getAllowedAdminEmails(): string[] {
  const configuredEmails = process.env.GOOGLE_ADMIN_EMAILS;
  const fallbackEmail = process.env.SMTP_SUPPORT_EMAIL;

  const emailList = (configuredEmails || fallbackEmail || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  return Array.from(new Set(emailList));
}

export function isAuthorizedAdminEmail(email?: string | null): boolean {
  if (!email) {
    return false;
  }

  const normalizedEmail = email.trim().toLowerCase();
  return getAllowedAdminEmails().includes(normalizedEmail);
}

export function isGoogleAuthConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET,
  );
}
