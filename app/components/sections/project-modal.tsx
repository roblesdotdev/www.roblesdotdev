import Modal from '~/components/ui/modal'
import type { Dispatch, SetStateAction } from 'react'
import { useState, useCallback, useMemo } from 'react'
import { ExternalLinkIcon } from 'lucide-react'
import type { Project } from '~/types'

const ProjectModal = ({
  showProjectModal,
  setShowProjectModal,
  project,
}: {
  showProjectModal: boolean
  setShowProjectModal: Dispatch<SetStateAction<boolean>>
  project?: Project
}) => {
  if (!project) return null

  return (
    <Modal showModal={showProjectModal} setShowModal={setShowProjectModal}>
      <div className="w-full max-w-2xl overflow-hidden rounded-xl border-fg/20 xs:border">
        <div className="flex flex-col space-y-3 bg-canvas-muted px-4 py-8 text-start xs:bg-canvas md:px-16">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <ul className="flex flex-wrap items-center gap-2">
            {project.skills.map((skill, k) => (
              <li
                key={k}
                className="rounded-md border-[1px] border-fg/10 bg-white/5 px-2 py-1 text-xs"
              >
                {skill}
              </li>
            ))}
          </ul>
          <p>{project.subtitle}</p>
          <p>{project.description}</p>
          <div className="mt-4 flex items-center gap-4 pb-4">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline"
            >
              <div className="flex items-center gap-1">
                Repositorio{' '}
                <ExternalLinkIcon className="h-4 w-4 text-fg-muted" />
              </div>
            </a>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="no-underline hover:underline"
              >
                <div className="flex items-center gap-1">
                  Sitio <ExternalLinkIcon className="h-4 w-4 text-fg-muted" />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export function useProjectModal(project?: Project) {
  const [showProjectModal, setShowProjectModal] = useState(false)

  const ProjectModalCallback = useCallback(() => {
    return (
      <ProjectModal
        project={project}
        showProjectModal={showProjectModal}
        setShowProjectModal={setShowProjectModal}
      />
    )
  }, [project, showProjectModal, setShowProjectModal])

  return useMemo(
    () => ({ setShowProjectModal, ProjectModal: ProjectModalCallback }),
    [setShowProjectModal, ProjectModalCallback],
  )
}
