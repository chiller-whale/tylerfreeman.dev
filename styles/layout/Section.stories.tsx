import * as React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"

import { Section } from "./Section"

storiesOf("Layout", module)
  .addDecorator(withKnobs)
  .add("Section", () => {
    return (
      <Section
        backgroundColor={text("backgroundColor", "tomato")}
        textColor={text("textColor", "cyan")}
      >
        <h1>My example story!</h1>
      </Section>
    )
  })
