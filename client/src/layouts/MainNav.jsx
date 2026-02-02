import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MainFooter from '../components/MainFooter'
const MainNav = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <MainFooter/>
    </>
  )
}

export default MainNav
