/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // tells Next.js to build a static site
    images: {
      unoptimized: true, // disables Next.js image optimization (needed for GitHub Pages)
    },
  };
  
  export default nextConfig;
  