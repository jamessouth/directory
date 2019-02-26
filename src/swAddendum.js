const prefix = 'employee-directory';
const version = 'v9';
const FALLBACK_IMAGE_URL = '/face.69232788.jpg';

workbox.precaching.precache([
  '/face.69232788.jpg',
]);
workbox.precaching.addRoute();

workbox.core.setCacheNameDetails({ prefix });

self.addEventListener('message', (e) => {
  if (!e.data) return;
  if (e.data === 'skipWaiting') self.skipWaiting();
});

workbox.routing.registerRoute(
  /^https:\/\/randomuser\.me\/api\/\?results=12&nat=us&inc=name,location,email,login,dob,cell,picture&noinfo/,
  workbox.strategies.networkFirst({
    cacheName: `${prefix}-randomuser-data`,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 365,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  /^https:\/\/randomuser\.me\/api\/portraits/,
  workbox.strategies.networkOnly(),
);

workbox.routing.setDefaultHandler(workbox.strategies.staleWhileRevalidate({
  cacheName: `${prefix}-default-handler`,
  plugins: [
    new workbox.expiration.Plugin({
      maxAgeSeconds: 60 * 60 * 24 * 365,
      purgeOnQuotaError: true,
    }),
  ],
}));

workbox.routing.setCatchHandler(({ event }) => {
  if (event.request.destination === 'image' && /^https:\/\/randomuser\.me\/api\/portraits/.test(event.request.url)) {
    return caches.match(FALLBACK_IMAGE_URL);
  }
  return Response.error();
});
