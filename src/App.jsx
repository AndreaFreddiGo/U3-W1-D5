import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/custom-bootstrap.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
