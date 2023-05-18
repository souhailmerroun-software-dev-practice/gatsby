import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Nav from "../components/Nav"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Hello World</h1>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <table className="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </table>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
