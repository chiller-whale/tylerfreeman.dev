import * as React from "react"
import { GlobalStyles } from "../../styles/global-styles"

export function Main({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}
