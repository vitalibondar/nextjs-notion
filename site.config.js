module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '3b7fa222526c453c8f2cf4e8c492d902',

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
     '/home': '95ecea4e80954d93908ed5c26e83ccad',
      '/about': '402b8c5c96504b819301f2a5b41e7d04',
      '/news': '64c0be7a987144adac82e40ffc673d19',
      '/important': '30526dd614544efcb33707b36ec6da36',
      '/routine': '73787b7875644d13a6bdf87e165c31e3'
  },

  showGithubRibbon: false,
  showPageAsideSocials: false
}
