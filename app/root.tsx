import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react'
import tailwindStyles from '~/styles/tailwind.css'
import appStyles from '~/styles/app.css'
import Navbar from '~/components/navbar'
import Footer from '~/components/footer'
import { NotFound, ServerError } from './components/errors'
import type { ReactNode } from 'react'
import { getSocialMetas } from './utils/seo'
import { getDomainUrl, getUrl } from './utils'
import { ThemeProvider, useTheme } from './utils/theme-provider'
import clsx from 'clsx'

export const meta: MetaFunction = ({ data }) => {
  const requestInfo = data?.requestInfo
  return {
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
    ...getSocialMetas({
      url: getUrl(requestInfo),
    }),
  }
}

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/jetbrains-mono/light.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/jetbrains-mono/regular.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/jetbrains-mono/medium.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/jetbrains-mono/bold.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicons/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicons/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/site.webmanifest' },
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: appStyles },
]

export const loader: LoaderFunction = async ({ request }) => {
  return json({
    requestInfo: {
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname,
    },
  })
}

function Document({
  title,
  children,
}: {
  title?: string
  children: ReactNode
}) {
  const [theme] = useTheme()
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden antialiased">
        <div className="layout bg-canvas font-mono text-fg">
          <Navbar className="navbar" />
          <main className="main">{children}</main>
          <Footer className="footer" />
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Document>
        <Outlet />
      </Document>
    </ThemeProvider>
  )
}

export function CatchBoundary() {
  const caught = useCatch()
  if (caught.status === 404) {
    return (
      <Document title="Oh No! Not Found">
        <NotFound />
      </Document>
    )
  }
  throw new Error(`Unhandled error: ${caught.status}`)
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Uh-oh!">
      <ServerError error={error} />
    </Document>
  )
}
