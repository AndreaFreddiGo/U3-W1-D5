import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/netflix.css'
import './assets/styles/custom-bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap'
import NetflixFooter from './components/NetflixFooter'
import NetflixNavbar from './components/NetflixNavbar'
import NetflixMenu from './components/NetflixMenu'
import NetflixRow from './components/NetflixRow'

function App() {
  return (
    <div className=" bg-darkest">
      <header>
        <NetflixNavbar />
      </header>
      <main>
        <Container>
          <NetflixMenu />
          <Row>
            <Col className="col-12 mt-2 mx-0">
              <div>
                <p className="text-light fs-6 fw-semibold">Trending Now</p>
              </div>
            </Col>
          </Row>
          <NetflixRow />
          <Row>
            <Col className="col-12 mt-2 mx-0">
              <div>
                <p className="text-light fs-6 fw-semibold">Trending Now</p>
              </div>
            </Col>
          </Row>
          <NetflixRow />
          <Row>
            <Col className="col-12 mt-2 mx-0">
              <div>
                <p className="text-light fs-6 fw-semibold">Trending Now</p>
              </div>
            </Col>
          </Row>
          <NetflixRow />
        </Container>
      </main>
      <footer>
        <NetflixFooter />
      </footer>
    </div>
  )
}

export default App
