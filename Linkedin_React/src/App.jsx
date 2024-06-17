import { useState } from 'react'
import './App.css'
import MyNav from './components/MyNav'
import Main from './components/Main'
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
        <Route path='/' element={<Main />}></Route>
      </Routes>
      <MyFooter />
    </Router>

    </>
  )
}

export default App
