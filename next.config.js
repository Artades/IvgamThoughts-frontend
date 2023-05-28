/** @type {import('next').NextConfig} */
const nextConfig = {
	
	images: {
		domains: ["ivgam-thoughts.vercel.app"],
		loader: "custom",
		path: "/",
	},
};

module.exports = nextConfig
