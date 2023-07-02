import { Link } from '@remix-run/react'
import { GithubIcon, LinkedinIcon, MailIcon } from '~/components/icons'

export default function Header() {
  return (
    <header className="mx-auto flex max-w-2xl items-center justify-between">
      <Link to="/" className="no-underline">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">Aldo R. Robles</h1>
          <p className="font-light text-fg-muted">Full Stack Developer</p>
        </div>
      </Link>
      <div className="flex items-center gap-2 text-fg-muted">
        <a
          href="https://linkedin.com/in/robles-ra"
          target="_blank"
          rel="noreferrer"
          className="rounded-md p-2 transition hover:bg-white/5 hover:text-fg"
        >
          <MailIcon />
        </a>

        <a
          href="https://linkedin.com/in/robles-ra"
          target="_blank"
          rel="noreferrer"
          className="rounded-md p-2 transition hover:bg-white/5 hover:text-fg"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/roblesdotdev"
          target="_blank"
          rel="noreferrer"
          className="rounded-md p-2 transition hover:bg-white/5 hover:text-fg"
        >
          <GithubIcon className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}
