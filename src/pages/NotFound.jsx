import React from 'react'
import { FcHome } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
    <div className='notFound'>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/"><FcHome /></Link>
    </div>
  )
}

export default NotFound