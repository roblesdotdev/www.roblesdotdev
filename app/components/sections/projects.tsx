import { ArrowUpRightIcon } from 'lucide-react'
import type { Project } from '~/types'

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col items-start gap-4 py-4">
      <h1 className="text-lg font-bold">Proyectos recientes</h1>
      <p>
        Explora una muestra de mi trabajo más reciente y conoce las soluciones
        que he creado aplicando mis habilidades y experiencia en cada uno de
        ellos.
      </p>
      <div className="flex w-full flex-col gap-4">
        {projects.map((project, k) => (
          <div
            key={k}
            className="flex flex-col items-start gap-1 rounded-md bg-white/[0.03] p-4 ring-[1px] ring-white/10"
          >
            <button className="underline-offset-4 transition hover:underline">
              <h1 className="font-bold">
                <div className="flex items-center gap-1">
                  {project.title}
                  <ArrowUpRightIcon className="h-4 w-4 text-fg-muted" />
                </div>
              </h1>
            </button>
            <p className="line-clamp-2 text-start text-fg-muted">
              {project.subtitle}
            </p>
            <ul className="mt-1 flex items-center gap-2">
              {project.tags.map((tag, idx) => (
                <li
                  key={idx}
                  className="rounded-sm bg-white/5 px-2 py-1 text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4">
        Si deseas descubrir aún más, te invito a visitar mi perfil de{' '}
        <a
          href="https://github.com/roblesdotdev"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        , donde podrás explorar todos los proyectos en los que he estado
        participando y sumando experiencia.
      </p>
    </div>
  )
}
