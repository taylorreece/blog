import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Taylor's Blog",
  tagline: "Taylor's Blog",
  url: "https://taylorreece.dev",
  baseUrl: "/",
  favicon: "img/favicon.ico",

  organizationName: "taylorreece", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  onBrokenMarkdownLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          routeBasePath: "/blog",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "Taylor Blog Logo",
        src: "https://avatars1.githubusercontent.com/u/3622586?s=400&u=92d81adf0d87e31ac26d0f335e154697c2e5d04a&v=4",
      },
      items: [
        {
          label: "Blog",
          to: "/blog",
          position: "right",
        },
        {
          label: "Socials",
          position: "right",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/taylorreece",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/taylor-reece/",
            },
            {
              label: "Bluesky",
              href: "https://bsky.app/profile/taylorreece.dev",
            },
          ],
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Taylor Reece`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
  ],
};

export default config;
