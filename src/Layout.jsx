import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Components/partials/Header'
import Footer from './Components/partials/Footer'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout