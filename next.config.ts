import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // webpack: (config, { isServer }) => {
  //   // Prevent bundling chrome-aws-lambda and ignore .js.map files
  //   if (isServer) {
  //     config.externals = config.externals || [];
  //     config.externals.push('chrome-aws-lambda');
  //   }
  //   // Ignore .js.map files
  //   config.module.rules.push({
  //     test: /\.js\.map$/,
  //     use: 'ignore-loader',
  //   });
  //   return config;
  // },
};

export default nextConfig;
