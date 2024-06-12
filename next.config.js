/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_RESEND_API : process.env.NEXT_PUBLIC_RESEND_API,
    },
}

module.exports = nextConfig
