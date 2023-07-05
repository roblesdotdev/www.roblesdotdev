import { Badge } from '../ui/badge'

const skills = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'React',
  'Next.js',
  'Remix.js',
  'TailwindCSS',
  /* BACKEND */
  'PostgreSQL',
  'MongoDB',
  'SQLite',
  'Node',
  'Express',
  'Python',
  'FastAPI',
  /* TOOLS */
  'Swagger',
  'Linux',
  'Git',
  'Docker',
  'GH Actions',
]

export default function SkillsSection() {
  return (
    <section className="flex flex-col items-start gap-4 py-4">
      <h1 className="text-lg font-bold">Habilidades</h1>
      <p>
        Me gusta construir cosas con bases de datos SQL y NoSQL, Docker, Python,
        TypeScript (y JavaScript), APIs de backend modernas y frameworks de
        frontend modernos.
      </p>

      <ul className="flex flex-wrap items-center gap-2">
        {skills.map((skill, k) => (
          <Badge asChild key={k} variant="outline">
            <li>{skill}</li>
          </Badge>
        ))}
      </ul>
    </section>
  )
}
