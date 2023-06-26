import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/Logo.png'
import googlePlay from '../assets/img/google-play.png'
import apple from '../assets/img/apple.png'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between mb-5">
          <div className="col-sm-4 col-lg-2 text-center text-sm-start">
            <img className="img-fluid mb-3" src={logo} alt="" />
            <p>Book your trip in minute, get full Control for much longer.</p>
          </div>
          <div className="col-sm-4 col-lg-2 text-center text-sm-start">
            <h5 className="text-capitalize">company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link className="text-capitalize" to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/destinations">Destination</Link>
              </li>
              <li className="mb-2">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2 text-center text-sm-start">
            <h5 className="text-capitalize">contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a className="text-capitalize" href="/">Help/FAQ</a>
              </li>
              <li className="mb-2">
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Affilates</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2 text-center text-sm-start">
            <h5 className="text-capitalize">more</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a className="text-capitalize" href="/">Airlinefees</a>
              </li>
              <li className="mb-2">
                <a href="/">Airline</a>
              </li>
              <li>
                <a href="/">Low fare tips</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2">
            <div className="social d-flex justify-content-around mb-3">
              <i className="fab fa-facebook-f p-3"></i>
              <i className="fab fa-instagram p-3"></i>
              <i className="fab fa-twitter p-3"></i>
            </div>
            <p className="text-center">Discover our app</p>
            <div className="app d-flex justify-content-center gap-3">
              <a className="bg-dark px-4 py-2 rounded-4" href="/">
                <img className="img-fluid" src={googlePlay} alt="" />
              </a>
              <a href="/" className="bg-dark px-4 py-2 rounded-4">
                <img className="img-fluid bg-dark" src={apple} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">&copy; All rights reserved Marko Todorovic</p>
    </footer>
  )
}

export default Footer