import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Setting() {

  const navigate = useNavigate()

  return (
    <div className="settings">
      <Outlet />
      <div className="steps">
        <div className="circle" onClick={() => navigate("temperature")}/>
        <div className="circle" onClick={() => navigate("tags")}/>
        <div className="circle" onClick={() => navigate("countries")}/>
      </div>
    </div>
  )
}
