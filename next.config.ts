import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    turbopack: {
        // Empty config to acknowledge Turbopack usage
        // This silences the webpack/turbopack config warning
    },
}

const config = {
    ...nextConfig,
}

export default config
