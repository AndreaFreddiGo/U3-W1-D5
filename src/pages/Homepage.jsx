import { Container, Row, Col } from 'react-bootstrap'
import NetflixFooter from '../components/NetflixFooter'
import NetflixNavbar from '../components/NetflixNavbar'
import NetflixMenu from '../components/NetflixMenu'
import NetflixRow1 from '../components/NetflixRow1'
import NetflixRow2 from '../components/NetflixRow2'
import NetflixRow3 from '../components/NetflixRow3'
import '../assets/styles/homepage.css'

const Homepage = () => {
  return (
    <div className=" bg-darkest">
      <header>
        <NetflixNavbar />
      </header>
      <main>
        <Container>
          <NetflixMenu />
          <Row>
            <Col className="col-12 mt-3 mx-0">
              <div>
                <p className="text-light fs-6 fw-semibold">Harry Potter Saga</p>
              </div>
            </Col>
          </Row>
          <NetflixRow1 />
          <Row>
            <Col className="col-12 mt-3 mx-0">
              <div>
                <p className="text-light fs-6 fw-semibold">Batman Series</p>
              </div>
            </Col>
          </Row>
          <NetflixRow2 />
          <Row>
            <Col className="col-12 mt-3 mx-0">
              <div>
                <p className="text-light fs-6 fw-semibold">
                  It's Christmas Time
                </p>
              </div>
            </Col>
          </Row>
          <NetflixRow3 />
        </Container>
      </main>
      <footer>
        <NetflixFooter />
      </footer>
    </div>
  )
}

export default Homepage
