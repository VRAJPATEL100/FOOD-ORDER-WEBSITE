import React from 'react'
import Notfoundimage from '../images/404.png'
import { Link } from 'react-router-dom'
function Notfound404() {
  return (
    <div className='container d-block mx-auto justify-content-center' style={{paddingTop:"7%"}}><img className='d-block mx-auto justify-content-center' src={Notfoundimage} alt="404 NOT FOUND IMAGE" />
    <Link to="/" className='btn btn-light d-block mx-auto justify-content-center'>CLICK HERE TO GO TO HOMEPAGE</Link></div>
  )
}

export default Notfound404