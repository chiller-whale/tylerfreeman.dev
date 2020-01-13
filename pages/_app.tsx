import App, { Container } from "next/app"
import dynamic from "next/dynamic"
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const ReactAxeWrapper = dynamic<{}>(
      () =>
        import("../utils/react-axe-wrapper").then(mod => mod.ReactAxeWrapper),
      {
        ssr: false,
      }
    )
    return (
      <>
        <ReactAxeWrapper />
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    )
  }
}

export default MyApp
