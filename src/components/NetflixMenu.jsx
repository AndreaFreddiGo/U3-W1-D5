const NetflixMenu = () => {
  return (
    <div className="row mt-5">
      <div className="col col-12 mt-3 mx-0">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <p className="text-light fs-4 fw-semibold">TV Shows</p>
            <div className="dropdown ms-4 mt-1">
              <button
                className="text-light bg-black border border-1 rounded-0 dropdown-toggle py-0 px-3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genres
              </button>
              <ul className="dropdown-menu" data-bs-theme="dark">
                <li>
                  <a className="dropdown-item" href="#">
                    Anime
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Comedies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dramas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Horror
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-1">
            <i className="bi bi-list text-light border border-1 border-light px-2 me-1"></i>
            <i className="bi bi-grid-fill text-light border border-1 border-light px-2"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NetflixMenu
