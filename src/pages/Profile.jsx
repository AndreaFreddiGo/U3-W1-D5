import avatar from '../assets/images/my-avatar.jpg'
import '../assets/styles/profile.css'
import NetflixNavbar from '../components/NetflixNavbar'

const Profile = () => {
  return (
    <body>
      <header>
        <NetflixNavbar />
      </header>
      <main className="pt-5 pb-2 h-100 bg-darkest">
        <div>
          <div className="container">
            <div className="row">
              <div className="col col-9 offset-1 col-lg-6 offset-lg-3">
                <p className="title text-light border-1 border-bottom border-light border-opacity-25">
                  Edit Profile
                </p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col col-9 offset-1 col-lg-2 offset-lg-3 mb-4 border-1">
                <img className="rounded-1" src={avatar} alt="my-avatar" />
              </div>
              <div className="col col-9 offset-1 offset-lg-0 col-lg-4 pe-4 flex-grow-1">
                <div>
                  <input
                    className="text-light fs-5 bg-light border-0 bg-opacity-50 py-1 px-3 mb-3"
                    placeholder="King Turtle"
                  />
                  <p className="text-light lead fs-5 mt-4 mb-1">Language:</p>
                  <div className="dropdown mt-0 mb-4">
                    <button
                      className="btn btn-dark bg-black border border-1 rounded-0 dropdown-toggle py-0 px-3"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </button>
                    <ul className="dropdown-menu" data-bs-theme="dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          Italian
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Tortoise
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr className="col col-9 col-lg-6 border-1 text-light text-opacity-75" />
                <div>
                  <p className="text-light lead fs-5 mt-3 mb-1">
                    Maturity settings:
                  </p>
                  <p className="d-inline-block text-light fs-6 fw-semibold my-2 px-2 py-1 bg-secondary bg-opacity-50">
                    ALL MATURITY RATINGS
                  </p>
                  <p className="show-title text-light my-1 fw-semibold">
                    Show titles of all maturity ratings for this profile.
                  </p>
                  <button
                    type="button"
                    className="btn btn-dark border rounded-0 opacity-50 py-1 px-4 mt-2 mb-4"
                  >
                    EDIT
                  </button>
                </div>
                <hr className="col col-9 col-lg-6 border-1 text-light text-opacity-75" />
                <div className="mb-4">
                  <p className="text-light lead fs-5 mt-3 mb-1">
                    Autoplay controls
                  </p>

                  <div className="form-check p-0 my-2">
                    <input
                      className="form-check-input bg-transparent rounded-0 fs-3 opacity-25 m-0"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-light ps-2"
                      for="flexCheckDefault"
                    >
                      Autoplay next episode in a series on all devices
                    </label>
                  </div>
                  <div className="form-check p-0 my-2">
                    <input
                      className="form-check-input bg-transparent rounded-0 fs-3 opacity-25 m-0"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-light ps-2"
                      for="flexCheckDefault"
                    >
                      Autoplay previews while browsing on all devices
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <hr className="col col-9 col-lg-6 offset-1 offset-lg-3 text-light text-opacity-75" />
              <div className="col col-9 offset-1 col-lg-6 offset-lg-3 p-0 flex-grow-1">
                <div className="d-flex flex-column flex-lg-row align-items-start flex-wrap mt-2">
                  <button
                    type="button"
                    className="btn btn-outline-light fs-5 border rounded-0 py-2 px-5 me-4 my-2 opacity-75"
                  >
                    SAVE
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light fs-5 lead border rounded-0 py-2 px-5 me-4 my-2 opacity-75"
                  >
                    CANCEL
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light fs-5 lead border rounded-0 py-2 px-5 my-2 opacity-75"
                  >
                    DELETE PROFILE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </body>
  )
}

export default Profile
