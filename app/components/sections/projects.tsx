export default function ProjectsSection() {
  return (
    <div className="flex flex-col items-start gap-4 py-4">
      <h1 className="text-lg font-bold">Recent Projects</h1>
      <p>
        Suspendisse vulputate neque a feugiat fermentum. Nulla magna tellus,
        cursus nec metus sed, luctus euismod augue. Sed diam urna, interdum
        feugiat velit sed.
      </p>
      <div className="flex w-full flex-col gap-4">
        {Array.from({ length: 4 }, (_, x) => x + 1).map(k => (
          <div
            key={k}
            className="flex flex-col gap-1 rounded-md border border-white/10 bg-white/[0.03] p-4"
          >
            <h1 className="font-bold">This is the title</h1>
            <p className="text-fg-muted">
              This is another description for more and more
            </p>
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
