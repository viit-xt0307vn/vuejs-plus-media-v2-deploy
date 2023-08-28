const envSet = require(`./env.js`);

export default {
    router: {},
    env: envSet,
    telemetry: false,
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    // ssr: true,

    // Target: https://go.nuxtjs.dev/config-target
    // target: 'static',

    srcDir: "src/",

    //server: {
    //  port: 8000, // default: 3000
    //  host: '0.0.0.0' // default: localhost
    //},

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Zaly.online",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes",
            },
            { name: "copyright", content: "Copyright ©  All rights reserved." },
            // { hid: 'description', name: 'description', content: '' },
            // { hid: 'og:site_name', property: 'og:site_name', content: '' },
            // { hid: 'og:type', property: 'og:type', content: 'website' },
            // { hid: 'og:url', property: 'og:url', content: '' },
            // { hid: 'og:title', property: 'og:title', content: '' },
            // { hid: 'og:description', property: 'og:description', content: '' },
        ],
        link: [
            // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap",
                type: "text/css",
                media: "all",
                async: true,
            },
            {
                rel: "stylesheet",
                type: "text/css",
                href: "/assets/css//genericons/genericons/genericons.css",
            },
            {
                rel: "stylesheet",
                type: "text/css",
                href: "/assets/css/style.css",
            },
            {
                rel: "stylesheet",
                type: "text/css",
                href: "/assets/css/responsive.css",
            },
        ],
        script: [
            {
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                async: true,
                crossorigin: "anonymous",
            },
        ],
    },

    stylelint: {
        files: [
            "assets/**/*.{scss,css}",
            "{components,layouts,pages}/**/*.{scss,css}",
        ],
        emitError: true,
        emitWarning: true,
        failOnError: true,
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "@/plugins/pluginApi",
        "@/plugins/pluginLoadInit",
        "@/plugins/pluginUtility",
        "@/plugins/pluginGoogleAdsense",
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: false,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxtjs/axios", "@nuxtjs/dayjs", "@nuxtjs/dotenv"],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/axios", "@nuxtjs/dayjs", "@nuxtjs/dotenv"],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        cssSourceMap: false,
        presets({ isServer }) {
            return [
                [
                    require.resolve("@nuxt/babel-preset-app"),
                    {
                        buildTarget: isServer ? "server" : "client",
                        corejs: { version: 3 },
                    },
                ],
            ];
        },
    },

    axios: {
        baseURL: envSet.API_END_POINT,
        // params: {
        //   api_key: env.API_KEY,
        //   website_id: env.WEBSITE_ID
        // },
    },

    publicRuntimeConfig: {
        axios: {
            browserBaseURL: envSet.API_END_POINT,
        },
    },

    privateRuntimeConfig: {
        axios: {
            baseURL: envSet.API_END_POINT,
        },
    },

    // Optional
    dayjs: {
        locales: ["en", "ja"],
        defaultLocale: "en",
        defaultTimeZone: "Asia/Tokyo",
        plugins: [
            "utc", // import 'dayjs/plugin/utc'
            "timezone", // import 'dayjs/plugin/timezone'
        ], // Your Day.js plugin
    },

    watchers: {
        webpack: {
            poll: 1000,
            ignored: /node_modules/,
        },
        chokidar: {
            ignored: /node_modules/,
        },
    },

    loading: {
        color: "#0099e5",
        height: "2px",
    },

    generate: {
        fallback: false,
    },
    serverMiddleware: [{
        path: "/json/getJson",
        handler: "~/server-middleware/json"
    }],
};
