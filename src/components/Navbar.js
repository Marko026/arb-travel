import { Link } from "react-router-dom"
import logo from "../assets/img/Logo.png"


const Navbar = () => {
  return (
    <header className="container-fluid">
      <nav className="navbar container navbar-expand-lg bg-transparent-blur fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link s" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="destinations">Destinations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="dashboard">Dashboard</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar