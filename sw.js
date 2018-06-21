const CACHE_STATIC_NAME = "static-v1";
const CACHE_DYNAMIC_NAME = "dynamic-v1";

self.addEventListener("install", function(event) {
  console.log("[Service Worker] Installing Service Worker ...", event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function(cache) {
      console.log("[Service Worker] Precaching App Shell");
      cache.addAll([
        "/",
        "/index.html",
        "/src/js/app.js",
        "https://code.jquery.com/jquery-3.3.1.min.js",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js",
        "//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
      ]);
    })
  );
});
//
self.addEventListener("activate", function(event) {
  console.log("[Service Worker] Activating Service Worker ....", event);
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log("[Service worker] Removing old cache: ", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  // console.log('[Service Worker] Fetching something ....', event);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then(function(res) {
            return caches.open(CACHE_DYNAMIC_NAME).then(function(cache) {
              cache.put(event.request.url, res.clone());
              return res;
            });
          })
          .catch(function(err) {
            // nothing
          });
      }
    })
  );
});
