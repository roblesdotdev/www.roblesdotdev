import { useLocation, useNavigate } from '@remix-run/react'
import errorStack from 'error-stack-parser'

function ErrorStack({ error }: { error: Error }) {
  const frames = errorStack.parse(error)
  return (
    <details className="mt-8">
      <summary>{error.message}</summary>
      <div>
        {frames.map(frame => (
          <div
            key={[frame.fileName, frame.lineNumber, frame.columnNumber].join(
              '-',
            )}
            className="pt-4"
          >
            <h6 className="pt-2">{frame.functionName}</h6>
            <div className="font-mono opacity-75">
              {frame.fileName}:{frame.lineNumber}:{frame.columnNumber}
            </div>
          </div>
        ))}
      </div>
    </details>
  )
}

interface ErrorPageProps {
  title: string
  subtitle: string
}

function ErrorPage({
  error,
  errorProps,
  actionLabel,
  action,
}: {
  error?: Error
  errorProps: ErrorPageProps
  actionLabel?: string
  action?: () => void
}) {
  return (
    <>
      <noscript>
        <div
          style={{
            backgroundColor: '#111111',
            color: '#fafafa',
            padding: 30,
          }}
        >
          <h1 style={{ fontSize: '2em' }}>{errorProps.title}</h1>
          <p style={{ fontSize: '1.5em' }}>{errorProps.subtitle}</p>
          <small>
            Este sitio funcionaria mucho mejor con javascript activado...
          </small>
        </div>
      </noscript>

      <div className="relative mx-auto h-full max-w-xl px-6 py-12 md:max-w-2xl lg:max-w-4xl ">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold leading-loose xs:text-3xl">
            {errorProps.title}
          </h1>
          <h2 className="text-fg-muted md:text-lg">{errorProps.subtitle}</h2>
          {action ? (
            <button
              onClick={action}
              className="mt-6 self-start rounded-md border-2 border-canvas-muted  px-6 py-3 text-sm font-medium text-fg hover:bg-canvas-muted"
            >
              {actionLabel ? actionLabel : 'Back to Home'}
            </button>
          ) : null}
        </div>
        {error && process.env.NODE_ENV === 'development' ? (
          <ErrorStack error={error} />
        ) : null}
      </div>
    </>
  )
}

function NotFound() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <ErrorPage
      errorProps={{
        title: '404 - Ups! Encontraste una página que no tiene contenido.',
        subtitle: `"${pathname}"  no es una pagina válida actualmente en mi sitio. Lo siento.`,
      }}
      actionLabel="Volver al inicio"
      action={() => navigate('/', { replace: true })}
    />
  )
}

function ServerError({ errorMessage }: { errorMessage?: string }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <ErrorPage
      errorProps={{
        title: '500 - Oh no, algo no anda bien.',
        subtitle: `"${pathname}" no está funcionando en este momento. Lo siento.`,
      }}
      actionLabel="Volver al inicio"
      action={() => navigate('/', { replace: true })}
    />
  )
}

export { ServerError, NotFound }
