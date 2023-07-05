export default function Footer() {
  return (
    <footer className="mt-32 flex flex-col gap-6 text-center">
      <p className="text-center">
        Aldo R. Robles - {new Date().getFullYear()} - Argentina
      </p>
      <p className="text-sm">
        Este sitio está construido con{' '}
        <a href="https://remix.run" target="_blank" rel="noreferrer">
          Remix.js
        </a>{' '}
        y{' '}
        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
          TailwindCSS
        </a>{' '}
        y desplegado en{' '}
        <a href="https://fly.io" target="_blank" rel="noreferrer">
          Fly.io
        </a>{' '}
        con Docker.
      </p>
    </footer>
  )
}
