import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import NovoProjeto from './components/pages/NovoProjeto'
import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/novoprojeto" element={<NovoProjeto />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
