/** @jsx jsx */

import { jsx } from "@emotion/core"

const fontFamilyStyle = {
  fontFamily: "'Poppins', 'Verdana', 'Times'",
}

const typeStyles = (fontSize: number) => ({
  ...fontFamilyStyle,
  fontSize: fontSize + "px",
  fontWeight: 100,
})

export function Header1({ children }: React.PropsWithChildren<{}>) {
  return <span css={typeStyles(69)}>{children}</span>
}

export function Header2({ children }: React.PropsWithChildren<{}>) {
  return <span css={typeStyles(52)}>{children}</span>
}
