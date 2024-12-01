import netflixLogo from '../assets/images/netflix_logo.png'
import avatar from '../assets/images/my-avatar.jpg'
import kidsIcon from '../assets/images/kids_icon.png'
import { Link } from 'react-router-dom'

const NetflixNavbar = () => {
  return (
    <div className="container">
      <div className="row">
        <nav
          className="navbar navbar-expand-lg bg-darkest fixed-top px-1"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img id="netflixLogo" src={netflixLogo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    TV Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Recently Added
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My List
                  </a>
                </li>
              </ul>

              <div className="d-flex align-items-center">
                <i className="bi bi-search text-light fs-5 px-2"></i>
                <img className="px-2" src={kidsIcon} alt="kids" />
                <i className="bi bi-bell-fill text-light fs-5 px-2"></i>
                <div className="dropdown">
                  <button
                    className="btn btn-dark bg-transparent border-0 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      id="avatar"
                      src={avatar}
                      alt="avatar"
                      className="pe-1"
                    />
                  </button>
                  <ul className="dropdown-menu custom-dropdown">
                    <li>
                      <Link to="/" className="dropdown-item">
                        Homepage
                      </Link>
                    </li>
                    <li>
                      <Link to="/Profile" className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/Settings" className="dropdown-item">
                        Settings
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NetflixNavbar
