import { NextSeo } from "next-seo"
import { DeveloperBio } from "../components/DeveloperBio/DeveloperBio"
import { ProfessionalBio } from "../components/ProfessionalBio/ProfessionalBio"
import { GlobalStyles } from "../styles/global-styles"
import { PersonalBio } from "../components/PersonalBio/PersonalBio"
import { Hero } from "../styles/layout/Hero"
import { Header1 } from "../styles/typography"
import { Section } from "../styles/layout/Section"

export default function Home() {
  return (
    <main>
      <GlobalStyles />
      <NextSeo
        title="Freeman - Portfolio"
        description="Tyler Freeman Personal Portfolio"
      />
      <Hero>
        <h1>
          <Header1>Hi! I&apos;m Tyler</Header1>
        </h1>
      </Hero>
      <Section>
        <DeveloperBio />
      </Section>
      <Section>
        <ProfessionalBio />
      </Section>
      <Section>
        <PersonalBio />
      </Section>
    </main>
  )
}
