import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/netflix.css'
import './assets/styles/custom-bootstrap.css'
import NetflixFooter from './components/NetflixFooter'
import NetflixNavbar from './components/NetflixNavbar'
import NetflixMenu from './components/NetflixMenu'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className=" bg-darkest vh-100">
      <header>
        <NetflixNavbar />
      </header>
      <main>
        <Container>
          <NetflixMenu />
        </Container>
      </main>
      <footer>
        <NetflixFooter />
      </footer>
    </div>
  )
}

export default App
