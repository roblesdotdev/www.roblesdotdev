import { ArrowUpRightIcon } from 'lucide-react'
import type { Project } from '~/types'
import { useProjectModal } from './project-modal'
import { useState } from 'react'
import { Badge } from '../ui/badge'

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [currentProject, setCurrentProject] = useState<Project | undefined>(
    projects[0],
  )
  const { ProjectModal, setShowProjectModal } = useProjectModal(currentProject)

  const handleModal = (project: Project) => {
    setCurrentProject(project)
    setShowProjectModal(true)
  }

  return (
    <div className="flex flex-col items-start gap-4 py-4">
      <ProjectModal />
      <h1 className="text-lg font-bold">Proyectos recientes</h1>
      <p>
        Explora mis proyectos más recientes y las soluciones que he creado con
        mis habilidades y experiencia.
      </p>
      <div className="flex w-full flex-col gap-4">
        {projects.map((project, k) => (
          <div
            key={k}
            className="flex flex-col items-start gap-1 rounded-md bg-white/[0.03] p-4 ring-[1px] ring-white/10"
          >
            <button
              onClick={() => handleModal(project)}
              className="underline-offset-4 transition hover:underline"
            >
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
                <Badge key={idx} asChild>
                  <li>{tag}</li>
                </Badge>
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
