import { useState } from 'react'
import UserDetails from './userdetails'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<UserDetails />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
