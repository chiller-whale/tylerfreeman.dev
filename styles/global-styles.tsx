import * as React from "react"
import emotionReset from "emotion-reset"
import { Global, css } from "@emotion/core"

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        @font-face {
          font-family: "Poppins";
          src: url("/static/fonts/poppins.woff2");
        }
      `}
    />
  )
}
