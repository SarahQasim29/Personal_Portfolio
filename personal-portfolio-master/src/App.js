import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Skills from './components/Skills'
import Soundbar from './components/Soundbar'
import Work from './components/Work'
import Awards from './components/Award'
import Resume from './components/Resume'
import './App.scss'

function App() {
  return (
    <>
      <Soundbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Award" element={<Awards />} />
          <Route path="/Resume" element={<Resume />} />
        
        </Route>
      </Routes>
    </>
  )
}

export default App
