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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "1111dfbda2ee80b7c51008a21aae3637"
  },
  {
    "url": "page-data/empty/page-data.json",
    "revision": "cb889d08a7e1822c7ad5a4fca2ebf219"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "90b4b9cb4e3a56710de6652a151747e5"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "bd2ad03d7e24a32fcc727321873c1ea9"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "0b1c545077e64b009b28dff12d2ff676"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "cdd6f414844f6cd7f69c3d404a0f8890"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "ca99abc58b7c75a109511a2525941dba"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "bd2c8ca2ae864d05a27cb5b139450de2"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "b9bfe5a34f5ea5103b53100a83ee89c4"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "2260e6c1c1680cc0f01be6d966a4f742"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "c1568b7519aa4a6d411e93b01e14887d"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "409aec03b183b340213d395f1e605407"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "9e43e1f9b539f32a1f933bc4771e146e"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "e068045061c8d6b41c450fa451500a2d"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "268b391762cd9fe4d6a2557750bd9777"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "fce4d89ffdb454315e7075054328cf83"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "5a724f0dab5fc17447176f01a7e6a859"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "1a714093495c9000ec4c3be5e4606e6f"
  },
  {
    "url": "page-data/settings/page-data.json",
    "revision": "c09f7f413cb329bcf7211e4955ddcfa1"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "c5174fae8be6c6231409c4c7bfdc03fa"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "3d0c07ac2a40f7e34efb2b262c411b6a"
  },
  {
    "url": "page-data/tags/chinese/page-data.json",
    "revision": "6429deb47a7f828940ee7d3a22795df7"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "be3a4764af2feec3ac03588908c0dcf3"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "c6eee7263b063974bbdfa17d4de2ae0e"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "2c560cc9f86a1d37be80bb3225cccc1b"
  },
  {
    "url": "page-data/tags/test/page-data.json",
    "revision": "fb353294818898fd7b9bd6042fd23aae"
  },
  {
    "url": "page-data/tags/wip/page-data.json",
    "revision": "97acf92bb5af47e05ddba391133ef313"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "fd3b2b8fc9c78c0f712f2b88a0acd67e"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "0cdc4458160bc5f8cd9c7fe47d975ef3"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "7b675da84dd19c2ef134d73e6afe9576"
  },
  {
    "url": "14-a103259c16ab281ab51a.js"
  },
  {
    "url": "17757bf87520686e179ce312b80d666e25b65c83-ecb21f7ece3e26fe56f0.js"
  },
  {
    "url": "app-18be0d11f71738815688.js"
  },
  {
    "url": "bab4896a-baacc99c3add39de9931.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b81c43cf3b4ef9854106.js"
  },
  {
    "url": "component---src-pages-404-js-036fdafa9efc11a9d9c6.js"
  },
  {
    "url": "component---src-pages-pages-js-70a784c4dce3d1e781ef.js"
  },
  {
    "url": "component---src-pages-settings-tsx-17a387235bb943505115.js"
  },
  {
    "url": "component---src-pages-tags-js-7b551017937b6532f917.js"
  },
  {
    "url": "component---src-templates-doc-js-6909ee0fb54c41e7256c.js"
  },
  {
    "url": "component---src-templates-tags-js-8e241fa20f3e9c496a87.js"
  },
  {
    "url": "ec9ecababc84b653bd1e09c41f348f65e406fded-1f4a67c216350f09409a.js"
  },
  {
    "url": "framework-765e22598f156804c016.js"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "styles-2d82ac8e3afc0c213061.js"
  },
  {
    "url": "webpack-runtime-de662ae8bd567f21ca7b.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "fca2408a5990f8e7b64737b4a6460943"
  },
  {
    "url": "styles.206e68b0c97b4c527066.css"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "67049a60e3b67c28db901d7ce440468a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-18be0d11f71738815688.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
