import {
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Footer from '~/components/footer'
import Header from '~/components/header'
import AboutSection from '~/components/sections/about'
import ContactSection from '~/components/sections/contact'
import ProjectsSection from '~/components/sections/projects'
import SkillsSection from '~/components/sections/skills'
import Spacer from '~/components/spacer'
import { getProjects } from '~/utils/projects'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Aldo R. Robles | Full Stack Developer' },
    { name: 'description', content: 'Aldo R. Robles. Full Stack Developer.' },
  ]
}

type LoaderData = {
  projects: Awaited<ReturnType<typeof getProjects>>
}

export const loader: LoaderFunction = async () => {
  const projects = await getProjects()
  return json<LoaderData>({
    projects,
  })
}

export default function Index() {
  const { projects } = useLoaderData<LoaderData>()
  return (
    <div className="px-6 py-12">
      <div className="container mx-auto max-w-2xl">
        <Header />
        <Spacer />
        <AboutSection />
        <Spacer />
        <ProjectsSection projects={projects} />
        <Spacer />
        <SkillsSection />
        <Spacer />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
