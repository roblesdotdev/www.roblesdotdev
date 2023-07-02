import type { V2_MetaFunction } from '@remix-run/node'
import Footer from '~/components/footer'
import Header from '~/components/header'
import AboutSection from '~/components/sections/about'
import ContactSection from '~/components/sections/contact'
import ProjectsSection from '~/components/sections/projects'
import SkillsSection from '~/components/sections/skills'
import Spacer from '~/components/spacer'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Aldo R. Robles | Full Stack Developer' },
    { name: 'description', content: 'Aldo R. Robles. Full Stack Developer.' },
  ]
}

export default function Index() {
  return (
    <div className="px-6 py-12">
      <div className="container mx-auto max-w-2xl">
        <Header />
        <Spacer />
        <AboutSection />
        <Spacer />
        <ProjectsSection />
        <Spacer />
        <SkillsSection />
        <Spacer />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
