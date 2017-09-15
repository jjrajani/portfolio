// 'use strict';
// function setOfCachedUrls(e) {
//   return e
//     .keys()
//     .then(function(e) {
//       return e.map(function(e) {
//         return e.url;
//       });
//     })
//     .then(function(e) {
//       return new Set(e);
//     });
// }
// var precacheConfig = [
//     ['index.html', 'bcedcf7c1b8378db49c7b7d87f8ad209'],
//     ['static/js/main.d9fb460b.js', '5cb245c835b37d25916d5e8567a52fd0'],
//     ['static/media/ADP.deef05ad.png', 'deef05add4de39444e863ddc6dd50417'],
//     ['static/media/PSP.0a901ceb.png', '0a901ceb28e8155ab0f74f7b95619372'],
//     ['static/media/Resume.ab7b824e.pdf', 'ab7b824ee734de8e4e3758029b190731'],
//     [
//       'static/media/cage-smash-ss.69a827e0.png',
//       '69a827e00ffada147669923228bd3561'
//     ],
//     [
//       'static/media/culturalink.8f7d12fa.png',
//       '8f7d12face003a1b3c7e4819a56f7fda'
//     ],
//     [
//       'static/media/humdrum_grill.34add34f.png',
//       '34add34fac5747ab7670ee5b03faca1e'
//     ],
//     [
//       'static/media/lost-in-the-trees.b4108e52.png',
//       'b4108e52c812105d645624212a477365'
//     ],
//     [
//       'static/media/mail-chimp.cb994926.png',
//       'cb994926db7d9d9b79f8889147be9585'
//     ],
//     [
//       'static/media/my-garden-ss.b2c2fbff.png',
//       'b2c2fbffb77daf65afc7ca21d8c6c8a4'
//     ],
//     ['static/media/pineapple.cb176732.png', 'cb1767321f67915723880f00fd102d75'],
//     [
//       'static/media/responseive_message.9be3ad7b.png',
//       '9be3ad7b6670649960036d1a4bf8a6d1'
//     ]
//   ],
//   cacheName =
//     'sw-precache-v3-sw-precache-webpack-plugin-' +
//     (self.registration ? self.registration.scope : ''),
//   ignoreUrlParametersMatching = [/^utm_/],
//   addDirectoryIndex = function(e, t) {
//     var n = new URL(e);
//     return '/' === n.pathname.slice(-1) && (n.pathname += t), n.toString();
//   },
//   cleanResponse = function(e) {
//     return e.redirected
//       ? ('body' in e ? Promise.resolve(e.body) : e.blob()).then(function(t) {
//           return new Response(t, {
//             headers: e.headers,
//             status: e.status,
//             statusText: e.statusText
//           });
//         })
//       : Promise.resolve(e);
//   },
//   createCacheKey = function(e, t, n, a) {
//     var r = new URL(e);
//     return (a && r.pathname.match(a)) ||
//       (r.search +=
//         (r.search ? '&' : '') +
//         encodeURIComponent(t) +
//         '=' +
//         encodeURIComponent(n)), r.toString();
//   },
//   isPathWhitelisted = function(e, t) {
//     if (0 === e.length) return !0;
//     var n = new URL(t).pathname;
//     return e.some(function(e) {
//       return n.match(e);
//     });
//   },
//   stripIgnoredUrlParameters = function(e, t) {
//     var n = new URL(e);
//     return (n.hash = ''), (n.search = n.search
//       .slice(1)
//       .split('&')
//       .map(function(e) {
//         return e.split('=');
//       })
//       .filter(function(e) {
//         return t.every(function(t) {
//           return !t.test(e[0]);
//         });
//       })
//       .map(function(e) {
//         return e.join('=');
//       })
//       .join('&')), n.toString();
//   },
//   hashParamName = '_sw-precache',
//   urlsToCacheKeys = new Map(
//     precacheConfig.map(function(e) {
//       var t = e[0],
//         n = e[1],
//         a = new URL(t, self.location),
//         r = createCacheKey(a, hashParamName, n, /\.\w{8}\./);
//       return [a.toString(), r];
//     })
//   );
// self.addEventListener('install', function(e) {
//   e.waitUntil(
//     caches
//       .open(cacheName)
//       .then(function(e) {
//         return setOfCachedUrls(e).then(function(t) {
//           return Promise.all(
//             Array.from(urlsToCacheKeys.values()).map(function(n) {
//               if (!t.has(n)) {
//                 var a = new Request(n, { credentials: 'same-origin' });
//                 return fetch(a).then(function(t) {
//                   if (!t.ok)
//                     throw new Error(
//                       'Request for ' +
//                         n +
//                         ' returned a response with status ' +
//                         t.status
//                     );
//                   return cleanResponse(t).then(function(t) {
//                     return e.put(n, t);
//                   });
//                 });
//               }
//             })
//           );
//         });
//       })
//       .then(function() {
//         return self.skipWaiting();
//       })
//   );
// }), self.addEventListener('activate', function(e) {
//   var t = new Set(urlsToCacheKeys.values());
//   e.waitUntil(
//     caches
//       .open(cacheName)
//       .then(function(e) {
//         return e.keys().then(function(n) {
//           return Promise.all(
//             n.map(function(n) {
//               if (!t.has(n.url)) return e.delete(n);
//             })
//           );
//         });
//       })
//       .then(function() {
//         return self.clients.claim();
//       })
//   );
// }), self.addEventListener('fetch', function(e) {
//   if ('GET' === e.request.method) {
//     var t,
//       n = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching);
//     t = urlsToCacheKeys.has(n);
//     t ||
//       ((n = addDirectoryIndex(n, 'index.html')), (t = urlsToCacheKeys.has(n)));
//     !t &&
//       'navigate' === e.request.mode &&
//       isPathWhitelisted(['^(?!\\/__).*'], e.request.url) &&
//       (
//         (n = new URL('/index.html', self.location).toString()),
//         (t = urlsToCacheKeys.has(n))
//       ), t &&
//       e.respondWith(
//         caches
//           .open(cacheName)
//           .then(function(e) {
//             return e.match(urlsToCacheKeys.get(n)).then(function(e) {
//               if (e) return e;
//               throw Error('The cached response that was expected is missing.');
//             });
//           })
//           .catch(function(t) {
//             return console.warn(
//               'Couldn\'t serve response for "%s" from cache: %O',
//               e.request.url,
//               t
//             ), fetch(e.request);
//           })
//       );
//   }
// });
