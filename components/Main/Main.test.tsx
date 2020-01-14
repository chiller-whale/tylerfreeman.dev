import * as React from "react"
import { render } from "@testing-library/react"
import { Main } from "./Main"
// import "@testing-library/jest-dom/extend-expect"

describe("An example test", () => {
  test(" Expects jest to work", () => {
    const { getByText } = render(
      <Main>
        <span>I expect jest and react testing library to work</span>
      </Main>
    )
    expect(
      getByText("I expect jest and react testing library to work")
    ).toBeInTheDocument()
  })
})
