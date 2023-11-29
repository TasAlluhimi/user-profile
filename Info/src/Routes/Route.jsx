import React from 'react'
import { Routes, Route as R } from 'react-router-dom'
import EnterProfile from '../Pages/EnterProfile'
import Profile from '../Pages/Profile'

function Route() {
  return (
    <>
    <Routes>
        <R path='/' element={<EnterProfile/>}></R>
        <R path='/Profile' element={<Profile/>}></R>
    </Routes>
    </>
  )
}

export default Route