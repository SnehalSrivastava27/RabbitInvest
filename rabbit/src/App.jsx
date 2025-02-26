import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, BrowserRouter as Router,Route} from 'react-router-dom';
import { Dropdown } from './components/DropDown'
import { SelectedPage } from './components/Display'
import { FinalPage } from './components/Final';
import { Summary } from './components/Summary';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dropdown/>} />
        <Route path="/selected" element={<SelectedPage />} />
        <Route path="/final" element={<FinalPage/>}/>
        <Route path="/summary" element={<Summary/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
