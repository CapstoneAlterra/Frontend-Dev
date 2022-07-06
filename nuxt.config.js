export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'gym-app',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        'nuxt-sweetalert2'
    ],
    auth: {
        //options
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/admin/auth/login', method: 'post' },
                    logout: false,
                    user: false
                },
                token: {
                    property: 'token',
                    global: true,
                    required: true,
                    type: 'Bearer'
                },
                user: {
                    propertyName: false,
                    autoFetch: false
                },
            }
        }
    },
    router: {
        // middleware: ['authenticated']
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'https://gym.stack.co.id',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}