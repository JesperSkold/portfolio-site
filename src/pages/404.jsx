import * as React from "react"
import { Link } from "gatsby"
const NotFoundPage = () => {
  return (
    <div>
      <h1>page not found</h1>
      <Link to="/">Go back home!</Link>
    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>