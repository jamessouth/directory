/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "./precache-manifest.3a5377a8239d80efae42cf98dfdfcfd5.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("./index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
const prefix = 'employee-directory';
const version = 'v6';
const FALLBACK_IMAGE_URL = './face.69232788.jpg';

workbox.precaching.precache([
  './face.69232788.jpg',
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
