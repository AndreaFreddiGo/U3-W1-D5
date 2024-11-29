import { Container, Row, Col, ListGroupItem } from 'react-bootstrap'

const NetflixFooter = () => {
  return (
    <Container>
      <Row>
        <Col className="footerIcons col col-12 mt-3 col-lg-8 mx-lg-auto text-center text-lg-start">
          <i className="bi bi-facebook d-inline-block text-light opacity-50 fs-4 pe-3"></i>
          <i className="bi bi-instagram d-inline-block text-light opacity-50 fs-4 pe-3"></i>
          <i className="bi bi-twitter d-inline-block text-light opacity-50 fs-4 pe-3"></i>
          <i className="bi bi-youtube d-inline-block text-light opacity-50 fs-4 pe-3"></i>
        </Col>
      </Row>
      <Row className="my-2 text-center text-lg-start">
        <Col className=" col-12 col-lg-2 offset-lg-2 text-light opacity-50">
          <ListGroupItem className="d-block pt-2">
            Audio and Subtitles
          </ListGroupItem>
          <ListGroupItem className="d-block pt-2">Media Center</ListGroupItem>
          <ListGroupItem className="d-block pt-2">Privacy</ListGroupItem>
          <ListGroupItem className="d-block pt-2">Contact Us</ListGroupItem>
        </Col>
        <Col className=" col-12 col-lg-2 text-light opacity-50">
          <ListGroupItem className="d-block pt-2">
            Audio Description
          </ListGroupItem>
          <ListGroupItem className="d-block pt-2">
            Investor Relations
          </ListGroupItem>
          <ListGroupItem className="d-block pt-2">Legal Notices</ListGroupItem>
        </Col>
        <Col className=" col-12 col-lg-2 text-light opacity-50">
          <ListGroupItem className="d-block pt-2">Help Center</ListGroupItem>
          <ListGroupItem className="d-block pt-2">Jobs</ListGroupItem>
          <ListGroupItem className="d-block pt-2">
            Cookie Preferences
          </ListGroupItem>
        </Col>
        <Col className=" col-12 col-lg-2 text-light opacity-50">
          <ListGroupItem className="d-block pt-2">Gift Cards</ListGroupItem>
          <ListGroupItem className="d-block pt-2">Terms of Use</ListGroupItem>
          <ListGroupItem className="d-block pt-2">
            Corporate Information
          </ListGroupItem>
        </Col>
      </Row>
      <Row>
        <Col className="-12 col-lg-8 mx-lg-auto text-center text-lg-start">
          <p className="d-inline-block px-2 py-1 my-3 border border-1 border-light opacity-50 text-light opacity-50">
            Service Code
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="-12 col-lg-8 mx-lg-auto text-center text-lg-start">
          <p className="text-light opacity-50">
            <i className="bi bi-c-circle"></i>1997-2019 Netflix,
            inc.i-0d00fcda2fdf9c0de
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default NetflixFooter
