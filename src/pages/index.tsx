import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Nav from "../components/Nav"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Nav />
      <h1>Hello World</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
