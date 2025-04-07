/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;

// import withMDX from '@next/mdx';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//     pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
// };

// export default withMDX()(nextConfig);
