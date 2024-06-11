/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RESEND_API : process.env.RESEND_API,
    },
}

module.exports = nextConfig
