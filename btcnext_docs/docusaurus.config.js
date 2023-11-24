const {
  Agile,
  generateId,
  createState,
  createCollection,
  createComputed,
} = require('@agile-ts/core');
const {
  AgileHOC,
  useAgile,
  useWatcher,
  useProxy,
  useSelector,
  useValue,
} = require('@agile-ts/react');
const { Event, useEvent } = require('@agile-ts/event');
const { toast } = require('react-toastify');

const githubOrgUrl = 'https://github.com/agile-ts';
const domain = 'https://agile-ts.org';
const npmOrgUrl = 'https://www.npmjs.com/package/@agile-ts';

const customFields = {
  copyright: `Made with  💜 by <a target="_blank" rel="noopener noreferrer" href="https://linekong.com">LK Venture</a> and <a target="_blank" rel="noopener noreferrer" href="https://github.com/Million-Miles/btcnext/graphs/contributors">these awesome people</a>`,
  meta: {
    title: 'BTCNEXT is the open source hub of BTC ecosystem.',
    image: '/img/meta.png',
    description:'',
    color: '#6c69a0',
    keywords: [
      'state management',
      'react',
      'state',
      'react state management',
      'react native state management',
      'react state',
      'typescript',
      'react state management without redux',
      'vue',
      'webdev',
      'redux',
      'recoil',
      'mobx',
      'javascript',
      'software',
      'coding',
      'development',
      'engineering',
    ],
  },
  domain,
  githubOrgUrl,
  githubUrl: `https://github.com/Million-Miles/btcnext`,
  githubDocsUrl: `https://github.com/Million-Miles/btcnext`,
  npmCoreUrl: `${npmOrgUrl}/core`,
  discordUrl: `https://discord.gg/T9GzreAwPH`,
  stackoverflowUrl: 'https://stackoverflow.com/questions/tagged/agile-ts',
  twitterUrl: 'https://twitter.com/BTC_NEXT',
  redditUrl: 'https://www.reddit.com/r/AgileTs/',
  version: '0.0.1',
  announcementBar: {
    id: 'announcement',
    content: [
      `❓ If you have any questions, don't hesitate to join our <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/T9GzreAwPH">Community Discord</a> ️`,
      `🎉 If you like AgileTs, give us a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/agile-ts/agile">GitHub</a>`,
      `⏰ If you want to stay update to date, follow use on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AgileTypescript">Twitter</a>`,
    ],
    random: false,
    interval: 100000,
  },
  liveCodeScope: {
    Agile,
    createState,
    createCollection,
    createComputed,
    useAgile,
    useProxy,
    useEvent,
    useWatcher,
    useSelector,
    useValue,
    AgileHOC,
    generateId,
    Event,
    toast,
  },
};

const config = {
  title: 'BTCNEXT',
  tagline: 'BTCNEXT - The first open source hub of BTC ecosystem',
  url: customFields.domain,
  baseUrlIssueBanner: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicons.jpg',
  organizationName: 'AgileTs',
  projectName: 'https://github.com/Million-Miles/btcnext',
  themes: ['@docusaurus/theme-live-codeblock'],
  scripts: [{ src: 'https://snack.expo.io/embed.js', async: true }], // https://github.com/expo/snack/blob/main/docs/embedding-snacks.md
  plugins: [
    'docusaurus-plugin-sass',
    // @docusaurus/plugin-google-analytics (Not necessary because it automatically gets added)
  ],
  customFields: { ...customFields },
  themeConfig: {
    hideableSidebar: false,
    // https://docusaurus.io/docs/search#using-algolia-docsearch
    algolia: {
      appId: '64P3EOD5L9',
      apiKey: '461e97fe74b935316bf63af4a6a93345',
      indexName: 'agile-ts',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    whiterlog: '/img/btcnext.svg',
    blacklog: '/img/whiterlog.svg',
    // image: '/img/meta.png', // Gets used in Head as Meta Image (og:image)
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/github'),
      defaultLanguage: 'javascript',
    },
    navbar: {
      title: ' ',
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/btcnext.svg',
      },
      items: [
        // left
        {
          label: 'Navigator',
          position: 'left',
          to: '/navigation',
        },
        {
          label: 'Documentation',
          position: 'left',
          items: [
            {
              "label": "BTC技术演进",
              "to": "/docs/installation/"
            },
            {
              "label": "Ordinals",
              "to": "/docs/quick-start/react/"
            },
            {
              "label": "Atomicals",
              "to": "/docs/style-guide/"
            },
            {
              "label": "闪电网络",
              "to": "/docs/examples/"
            },
            {
              "label": "图灵完备扩展",
              "to": "/docs/style-guide/"
            },
            {
              "label": "STAMPS",
              "to": "/docs/style-guide/"
            },
            {
              "label": "chainsL2",
              "to": "/docs/style-guide/"
            },
            {
              "label": "其他协议",
              "to": "/docs/style-guide/"
            },
            {
              "label": "相关生态",
              "to": "/docs/style-guide/"
            }
          ],
        },
        {
          label: 'Community',
          position: 'left',
          items: [
            {
              label: 'GitHub',
              href: customFields.githubUrl,
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
            },
          ],
        },
        {
          label: 'Support',
          position: 'left',
          to: 'https://github.com/Million-Miles/BTCNEXT/wiki/BTCNEXT-Wiki',
        },
      ],
    },
    footer: {
      copyright: customFields.copyright,
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/introduction',
            },
            {
              label: 'How to Join',
              to: 'docs/examples',
            },
            {
              label: 'Navigator',
              to: 'docs/quick-start/react',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: customFields.githubUrl,
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Privacy Policy',
              to: '/legal/privacy-notice',
            },
            {
              label: 'Cookie Policy',
              to: '/legal/cookie-notice',
            },
            {
              label: 'Blog',
              to: '/blog/',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          admonitions: {
            icons: 'emoji',
          },
          // sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        googleAnalytics: {
          trackingID: 'UA-189394644-1',
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
};

module.exports = { ...config };
