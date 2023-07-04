import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react'
import globalStyles from '~/styles/globals.css'
import { useNonce } from './utils/nonce-provider'
import { NotFound, ServerError } from './components/errors'

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/inter-bold.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/inter-regular.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  { rel: 'stylesheet', href: globalStyles },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

export default function App() {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

function ErrorDocument({ children }: { children: React.ReactElement }) {
  const nonce = useNonce()
  return (
    <html>
      <head>
        <title>Oh no...</title>
        <Links />
      </head>
      <body>
        <div className="px-6 py-12">
          <div className="container mx-auto max-w-2xl">{children}</div>
        </div>
        <Scripts nonce={nonce} />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <ErrorDocument>
          <NotFound />
        </ErrorDocument>
      )
    }
  }

  return (
    <ErrorDocument>
      <ServerError />
    </ErrorDocument>
  )
}
