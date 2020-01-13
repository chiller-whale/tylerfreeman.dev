import { Layout } from "../components/Layout/Layout"
import Link from "next/link"
import { Header1, Header2 } from "../styles/typography"
import { NextSeo } from "next-seo"
import WindowsLogo from "../static/images/windows-95.png"

export default function Home() {
  return (
    <Layout>
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
        <h1>
          <Header1>This is what I am about as a developer</Header1>
        </h1>
      </section>
      <section>
        <h1>
          <Header1>
            This is some tid bits about what I have done professionally
          </Header1>
        </h1>
      </section>
    </Layout>
  )
}
