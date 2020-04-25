module.exports = {
  title: "Taylor's Blog",
  tagline: "Taylor's Blog",
  url: 'https://blog.reecemath.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Taylor's Blog",
      logo: {
        alt: 'My Site Logo',
        src: 'https://avatars1.githubusercontent.com/u/3622586?s=400&u=92d81adf0d87e31ac26d0f335e154697c2e5d04a&v=4',
      },
      links: [
        {
          href: 'https://github.com/taylorreece',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/taylorreece/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/taylor.reece/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Taylor Reece`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          path: './blog',
          routeBasePath: '/', // Set this value to '/'.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
