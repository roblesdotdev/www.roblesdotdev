import { Link } from "@remix-run/react";
import { GithubIcon, LinkedinIcon, MailIcon } from "~/components/icons";

export default function Header() {
  return (
    <header className="flex items-center justify-between max-w-2xl mx-auto">
      <Link to="/" className="no-underline">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-lg">Aldo R. Robles</h1>
          <p className="font-light text-fg-muted">Full Stack Developer</p>
        </div>
      </Link>
      <div className="flex items-center gap-2 text-fg-muted">
        <a
          href="https://linkedin.com/in/robles-ra"
          target="_blank"
          rel="noreferrer"
          className="hover:text-fg transition hover:bg-white/5 p-2 rounded-md"
        >
          <MailIcon />
        </a>

        <a
          href="https://linkedin.com/in/robles-ra"
          target="_blank"
          rel="noreferrer"
          className="hover:text-fg transition hover:bg-white/5 p-2 rounded-md"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/roblesdotdev"
          target="_blank"
          rel="noreferrer"
          className="hover:text-fg transition hover:bg-white/5 p-2 rounded-md"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}
