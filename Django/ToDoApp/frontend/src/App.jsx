import { useState } from 'react'
import './App.css'
import LoginForm from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashbord'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/' element={<LoginForm></LoginForm>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
