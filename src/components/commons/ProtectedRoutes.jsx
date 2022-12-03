import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './GHContext'


const ProtectedRoutes = () => {

  const { isAuth } = useContext(AuthContext)
  console.log("hi from context")

  if (!isAuth) {
    return <Navigate to="/" />
  }

  return (
    <Outlet />
  )
}

export default ProtectedRoutes