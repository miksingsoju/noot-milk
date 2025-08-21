import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QPICalculator from './pages/QPICalculator'
import DayDream from './pages/DayDreamCalculator'

// import other pages as needed

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/QPI" element={<QPICalculator />} />
        <Route path="/DayDream" element={<DayDream />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App