// No-op service worker — prevents 404 from stale/external registrations
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
