module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '3f4df235a44040929aa325369d37e946',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Дитячий садок «Пролісок»',
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'prolisok.haisyn.info',
  author: 'ЗДО №1 м. Гайсина',

  // Use custom font family (leave empty to use default font)
  fontFamily: 'Work Sans',

  // open graph metadata (optional)
  description: 'Заклад дитячої освіти №1 міста Гайсина',
  socialImageTitle: 'Дитячий садок «Пролісок»',
  socialImageSubtitle: 'prolisok.haisyn.info',

  // social usernames (optional)
  //twitter: 'wzulfikar',
  //github: 'wzulfikar',
  //linkedin: 'wildan-zulfikar-30a30a100',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  //utterancesGitHubRepo: 'wzulfikar/wzulfikar.com',
  //utterancesGitHubLabel: 'blog-comment',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  //isPreviewImageSupportEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
     '/home': '18a5fa4fa9b247b68b4b397f35a392ad',
      '/about': 'f42b1abe1bd94e708f42e752078a1b78',
      '/news': 'b05f7181d2da4efb843759783e1ecbe2',
      '/important': '6b45f8644239449faeeff55bdd603603',
      '/routine': '9fb75201db4340dfa105547bcb89ff72',
      '/psychologe': 'adab1b32a5eb4cd5bfadfd1201ec05c3',
      '/socialpedagogue': '76b20f3c57964b32bf26ee5fce949444'
  },

  showGithubRibbon: false,
  showPageAsideSocials: false
}
