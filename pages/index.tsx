import { Main } from "../components/Main/Main"
import { Header1 } from "../styles/typography"
import { NextSeo } from "next-seo"
import { DeveloperBio } from "../components/DeveloperBio/DeveloperBio"
import { ProfessionalBio } from "../components/ProfessionalBio/ProfessionalBio"

export default function Home() {
  return (
    <Main>
      <NextSeo
        title="Freeman - Portfolio"
        description="Tyler Freeman Personal Portfolio"
      />
      <section>
        <h1>
          <Header1>Hi! I&apos;m Tyler</Header1>
        </h1>
      </section>
      <section>
        <DeveloperBio />
      </section>
      <section>
        <ProfessionalBio />
      </section>
    </Main>
  )
}
