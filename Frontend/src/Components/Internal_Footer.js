import React from 'react'
import { Link } from 'react-router-dom'

const Internal_Footer = () => {
  return (
   
      <div>
  
  <footer className="bg-dark p-3">
    <div className="container">
      <div className="row align-items-center">
        {/* Widget */}
        <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
          {/* Logo START */}
          <a href="index-2.html"> <img className="h-20px" src="assets/images/logo-light.svg" alt="logo" /> </a>
        </div>
        {/* Widget */}
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="text-center text-white text-primary-hover">
            Copyrights ©2024 Eduport. Build by <Link href="#" target="_blank" className="text-white">Webestica</Link>.
          </div>
        </div>
        {/* Widget */}
        <div className="col-md-4">
          {/* Rating */}
          <ul className="list-inline mb-0 text-center text-md-end">
            <li className="list-inline-item ms-2"><Link href="#"><i className="text-white fab fa-facebook" /></Link></li>
            <li className="list-inline-item ms-2"><Link href="#"><i className="text-white fab fa-instagram" /></Link></li>
            <li className="list-inline-item ms-2"><Link href="#"><i className="text-white fab fa-linkedin-in" /></Link></li>
            <li className="list-inline-item ms-2"><Link href="#"><i className="text-white fab fa-twitter" /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  {/* =======================
Footer END */}
</div>

  )
}

export default Internal_Footer
