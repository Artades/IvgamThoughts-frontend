/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictModereactStrictMode: true,
	images: {
		domains: ["ivgam-thoughts.vercel.app"],
		loader: "custom",
		path: "/",
	},
};

module.exports = nextConfig
