/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        // Ignore 'canvas' module on server side
        config.externals.push({
          canvas: "commonjs canvas",
        });
      }
  
      return config;
    },
  };

export default nextConfig;
