import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  // [Basic]
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: 'Aimer¹的网站',
  /** Will be used in index page & copyright declaration */
  author: 'Hello,我是Aimer¹',
  /** Description metadata for your website. Can be used in page metadata. */
  description: '你是否已化作风雨，穿越时光来到这里',
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: '/favicon/favicon.ico',
  /** The default social card image for your site which should be a path to an image in the `public/` directory. */
  socialCard: '/images/social-card.png',
  /** Specify the default language for this site. */
  locale: {
  lang: "zh-CN",
  attrs: "zh_CN",
  dateLocale: "zh-CN",
  dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
  src: '/avatar.png',
  alt: 'Avatar'
},
  titleDelimiter: '•',
  prerender: true, // pagefind search is not supported with prerendering disabled
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // Still in test
  head: [
    /* Telegram channel */
    // {
    //   tag: 'meta',
    //   attrs: { name: 'telegram:channel', content: '@cworld0_cn' },
    //   content: ''
    // }
  ],
  customCss: [],

  /** Configure the header of your site. */
  header: {
 menu: [
  { title: "博客", link: "/blog" },
  { title: "文档", link: "/docs" },
  { title: "友链", link: "/links" },
  { title: "关于", link: "/about" },
]
  },

  /** Configure the footer of your site. */
    footer: {
  year: '© 2026 Aimer ',
  links: [],
  pos: 2,
  credits: true,
  social: [
    { icon: 'github', label: 'GitHub', href: 'https://github.com/AimerMio' },
    { icon: 'rss', label: 'RSS', href: '/rss.xml' }
  ]
},
  content: {
  externalLinks: {
    content: '》',
    properties: { style: 'user-select:none' }
  },
  blogPageSize: 8,
  share: ['weibo', 'x', 'bluesky'],
  imageCaption: true
},
};
export const integ: IntegrationUserConfig = {
  // [Links]
  quote: {
  server: 'https://dummyjson.com/quotes/random',
  target: "(data) => (data.quote.length > 80 ? `${data.quote.slice(0, 80)}...` : data.quote || 'Error')"
},
  // https://astro-pure.js.org/docs/integrations/links
  links: {
    // Friend logbook
    logbook: [
  { date: '2026-08-31', content: '欢迎来到我的小站！' },
],
    // Yourself link info
    cacheAvatar: false,
    applyTip: []
  },
  // [Search]
  pagefind: true,
  // Add a random quote to the footer (default on homepage footer)
  // See: https://astro-pure.js.org/docs/integrations/advanced#web-content-render
  
  // [Typography]
  // https://unocss.dev/presets/typography
  typography: {
    class: 'prose text-base',
    // The style of blockquote font `normal` / `italic` (default to italic in typography)
    blockquoteStyle: 'italic',
    // The style of inline code block `code` / `modern` (default to code in typography)
    inlineCodeBlockStyle: 'modern'
  },
  // [Lightbox]
  // A lightbox library that can add zoom effect
  // https://astro-pure.js.org/docs/integrations/others#medium-zoom
  mediumZoom: {
    enable: true, // disable it will not load the whole library
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  // Comment system
  waline: {
    enable: true,
    // Server service link
    server: 'https://astro-theme-pure-waline.arthals.ink/',
    // Show meta info for comments
    showMeta: false,
    // Refer https://waline.js.org/en/guide/features/emoji.html
    emoji: ['bmoji', 'weibo'],
    // Refer https://waline.js.org/en/reference/client/props.html
    additionalConfigs: {
      // search: false,
      pageview: true,
      comment: true,
      locale: {
        reaction0: 'Like',
        placeholder: 'Welcome to comment. (Email to receive replies. Login is unnecessary)'
      },
      imageUploader: false
    }
  }
}

export const terms: CardListData = {
  title: 'Terms content',
  list: [
    {
      title: 'Privacy Policy',
      link: '/terms/privacy-policy'
    },
    {
      title: 'Terms and Conditions',
      link: '/terms/terms-and-conditions'
    },
    {
      title: 'Copyright',
      link: '/terms/copyright'
    },
    {
      title: 'Disclaimer',
      link: '/terms/disclaimer'
    }
  ]
}

// Astro-pure expects theme fields at the top-level. Spread theme here and keep integ nested.
const config = { ...theme, integ } as Config
export default config
