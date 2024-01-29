import { Header } from '@/layout/header/Header'
import { Footer } from '@/layout/sections/footer/Footer.tsx'
import { Main } from '@/layout/sections/main/Main'
import { Projects } from '@/layout/sections/projects/Projects'
import { Skills } from '@/layout/sections/skills/Skills'
import { Slogan } from '@/layout/sections/slogan/Slogan'

export function App() {
  return (
    <div>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Slogan />
      <Footer />
    </div>
  )
}
