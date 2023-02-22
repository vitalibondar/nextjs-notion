import React from 'react'
import { isDev, domain } from 'lib/config'
// import { getSiteMaps } from 'lib/get-site-maps'
import { resolveNotionPage } from 'lib/resolve-notion-page'
import { NotionPage, ClientRedirect } from 'components'
import redirects from '../redirects.config'

export const getStaticProps = async (context) => {
  const rawPageId = context.params.pageId as string

  // Handle client redirect
  if (redirects[rawPageId]?.clientRedirect) {
    return {
      props: {
        clientRedirect: true,
        url: redirects[rawPageId]
      }
    }
  }

  try {
    if (rawPageId === 'sitemap.xml' || rawPageId === 'robots.txt') {
      return {
        redirect: {
          destination: `/api/${rawPageId}`
        }
      }
    }

    const props = await resolveNotionPage(domain, rawPageId)

    return { props, revalidate: 5 }
  } catch (err) {
    console.error('page error: pages/[pageId]', domain, rawPageId, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true
    }
  }

  // const siteMaps = await getSiteMaps()

  const redirectPaths = Object.keys(redirects).map((path) => `/${path}`)

  const ret = {
    // paths: siteMaps.flatMap((siteMap) =>
    //   Object.keys(siteMap.canonicalPageMap).map((pageId) => ({
    //     params: {
    //       pageId
    //     }
    //   }))
    // ),
    paths: [...redirectPaths], // Don't eager-load notion page paths to avoid race condition and slow build
    fallback: true
  }

  console.log(ret.paths)
  return ret
}

export default function NotionDomainDynamicPage(props) {
  if (props.clientRedirect) {
    return <ClientRedirect url={props.url} />
  }

  return <NotionPage {...props} />
}
