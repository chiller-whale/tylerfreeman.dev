import * as React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

import { Hero } from "./Hero"

storiesOf("Layout", module).add("Hero", () => {
  return (
    <Hero>
      <h1>My example story!</h1>
    </Hero>
  )
})
