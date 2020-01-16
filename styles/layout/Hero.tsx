import * as React from "react"
//** @jsx jsx */ //required when using emotion css prop
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, css } from "@emotion/core"

export function Hero({ children, ...otherProps }: React.PropsWithChildren<{}>) {
  return (
    <section
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
      {...otherProps}
    >
      {children}
    </section>
  )
}
