import * as React from "react"
//** @jsx jsx */ //required when using emotion css prop
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, css } from "@emotion/core"

export function Section({
  children,
  backgroundColor = "white",
  textColor = "black",
  ...otherProps
}: React.PropsWithChildren<{ backgroundColor?: string; textColor?: string }>) {
  return (
    <section
      css={{
        minHeight: "30vh",
        width: "100%",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      {...otherProps}
    >
      {children}
    </section>
  )
}
