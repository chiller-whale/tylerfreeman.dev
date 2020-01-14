import * as React from "react"
import { Header1 } from "../../styles/typography"

export function ProfessionalBio() {
  return (
    <>
      <h1>
        <Header1>These are some experiences I have had</Header1>
      </h1>
      <ul>
        <li>
          Duke medicine integrating Epic health systems into custom drupal
          modules
        </li>
        <li>
          Writing a hybrid app angular 1 app which ran on android and casted to
          an external screen. This also contained a ruby on rails app which
          ingested files writen in a DSL used to make smartphone simulators and
          tutorials provided by partnered company which were imported into a
          Postgres database. Also did devops.
        </li>
        <li>
          I worked on a project for European OTT provider that involved
          maintaining a webapp, chromecast app, seo server (PhantomJS)
        </li>
        <li>
          Worked on company website which was hosted on Heroku, react app,
          express app that integrated with CRM system.
        </li>
        <li>
          Trained partner company on react best practices. Implemented react
          front end for banking app.
        </li>
        <li>
          Worked on embedded team with Java spring backend to integrate with
          banking backend. Built on Microservice architecture.
        </li>
        <li>Worked on Go API that integrated with Salesforce</li>
      </ul>
    </>
  )
}
