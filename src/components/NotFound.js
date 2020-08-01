import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="nofound">
      <h1>404</h1>
      <h2>Sorry, a bear ate the page you are looking for !!!</h2>
      <Link to="/">Go back to home page</Link>
    </div>
  )
}
