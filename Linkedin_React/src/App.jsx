import { useState } from 'react'
import './App.css'
import MyNav from './components/MyNav'
import Main from './components/Main'
import MyFooter from './components/MyFooter'
import AltriProfiliDetail from './components/AltriProfiliDetail'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [profiles, setProfiles] = useState([""]);
  const [search, setSearch] = useState('');
  const handleChange = (e) => setSearch(e.target.value);
  return (
    <>
    <Router>
      <MyNav search={search} setSearch={setSearch} handleChange={handleChange}/>
      <Routes>
        <Route path='/' element={<Main profiles={profiles} setProfiles={setProfiles}/>}></Route>
        <Route path='/profile/:id' element={<AltriProfiliDetail profiles={profiles} setProfiles={setProfiles}/>}></Route>
      </Routes>
      <MyFooter />
    </Router>

    </>
  )
}

export default App
