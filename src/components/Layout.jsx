import React from 'react'
import { Outlet } from 'react-router-dom'
import "./components.scss"

export default function Layout() {
  return (
    <div className='container'>
      <Outlet />
    </div>
  )
}
