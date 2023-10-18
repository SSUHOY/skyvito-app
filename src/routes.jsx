import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/pages/mainPage'

const AppRoutes = ({user}) => {
  return (
   <Routes>
    <Route path='/' element={<Main/>}/>
    {/* <Route path='/login' element={}/> */}
   </Routes>
  )
}

export default AppRoutes
