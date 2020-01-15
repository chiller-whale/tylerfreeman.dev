import { NextSeo } from "next-seo"
import { DeveloperBio } from "../components/DeveloperBio/DeveloperBio"
import { ProfessionalBio } from "../components/ProfessionalBio/ProfessionalBio"
import { Hero } from "../components/Hero/Hero"
import { GlobalStyles } from "../styles/global-styles"
import { PersonalBio } from "../components/PersonalBio/PersonalBio"

export default function Home() {
  return (
    <main>
      <GlobalStyles />
      <NextSeo
        title="Freeman - Portfolio"
        description="Tyler Freeman Personal Portfolio"
      />
      <section>
        <Hero />
      </section>
      <section>
        <DeveloperBio />
      </section>
      <section>
        <ProfessionalBio />
      </section>
      <section>
        <PersonalBio />
      </section>
    </main>
  )
}
