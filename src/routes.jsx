import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/pages/mainPage'
import { AuthPage } from './components/pages/authPage'

const AppRoutes = ({user}) => {
  return (
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/login' element={<AuthPage/>}/>
   </Routes>
  )
}

export default AppRoutes
