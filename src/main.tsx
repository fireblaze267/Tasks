import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import Home from './pages/home/home'
import Login from './pages/login/login'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>

  
  </React.StrictMode>,
  document.getElementById('root')
)
