import { useState } from 'react'
import './App.css'
import MyNav from './components/MyNav'
import GetProfiles from './components/GetProfiles'
import MyFooter from './components/MyFooter'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [search, setSearch] = useState('');
  const handleChange = (e) => setSearch(e.target.value);
  return (
    <>
    <Router>
      <MyNav search={search} setSearch={setSearch} handleChange={handleChange}/>
      <Routes>
        <Route path='/' element={<GetProfiles />}></Route>
      </Routes>
      <MyFooter />
    </Router>

    </>
  )
}

export default App
