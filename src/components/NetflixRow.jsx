import { Component } from 'react'
import { Row } from 'react-bootstrap'

class NetflixRow extends Component {
  state = {
    movies: [],
  }

  // creo la funzione di fetch per il recupero dei film
  getMovies = () => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c286f1c6&s=Breaking Bad')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero dei film')
        }
      })

      .then((movies) => {
        console.log(movies.Search)
        this.setState({ movies: movies.Search })
      })

      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    return (
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row m-2">
              <div className="col-6 col-md-3 col-lg-2 px-1">
                <img
                  src="./assets/images/media/media0.webp"
                  className="w-100"
                />
              </div>
              <div className="col-6 col-md-3 col-lg-2 px-1">
                <img src="./assets/images/media/media1.jpg" className="w-100" />
              </div>
              <div className="col-6 col-md-3 col-lg-2 d-none d-md-block px-1">
                <img
                  src="./assets/images/media/media2.webp"
                  className="w-100"
                />
              </div>
              <div className="col-6 col-md-3 col-lg-2 d-none d-md-block px-1">
                <img
                  src="./assets/images/media/media3.webp"
                  className="w-100"
                />
              </div>
              <div className="col-6 col-md-3 col-lg-2 d-none d-lg-block px-1">
                <img src="./assets/images/media/media4.jpg" className="w-100" />
              </div>
              <div className="col-6 col-md-3 col-lg-2 d-none d-lg-block px-1">
                <img
                  src="./assets/images/media/media5.webp"
                  className="w-100"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row m-2">
              <div className="col-6 col-md-3 col-lg-2 px-1">
                <img src="./assets/images/media/media6.jpg" className="w-100" />
              </div>
              <div className="col-6 col-md-3 col-lg-2 px-1">
                <img
                  src="./assets/images/media/media7.webp"
                  className="w-100"
                />
              </div>
              <div className="col-6 col-md-3 col-lg-2 d-none d-md-block px-1">
                <img
                  src="./assets/images/media/media8.webp"
                  className="w-100"
                />
              </div>
              <div className="col-6 col-md-3 col-lg-2 d-none d-md-block px-1">
                <img src="./assets/images/media/media9.jpg" className="w-100" />
              </div>
              <div className="col-6 col-md-3 col-lg-2 d-none d-lg-block px-1">
                <img
                  src="./assets/images/media/media10.jpg"
                  className="w-100"
                />
              </div>
              <div className="col-6 col-md-3 col-lg-2 d-none d-lg-block px-1">
                <img
                  src="./assets/images/media/media11.jpg"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
}

export default NetflixRow
