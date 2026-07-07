import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClasePage from './pages/clase'


function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClasePage />} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App