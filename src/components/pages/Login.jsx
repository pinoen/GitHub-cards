import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from '../../styles/styled.module.css'
import { AuthContext } from '../commons/GHContext'

const Login = () => {

  const { handleAuth } = useContext(AuthContext)

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  let datos = JSON.parse(localStorage.getItem("github"))

  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setUser(preData => {
      return {
        ...preData,
        [name]: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (datos.email === user.email && datos.password === user.password) {
      handleAuth()
      navigate("/home")
    } else {
      alert("Usuario no registrado")
    }
  }



  return (
    <div>
      <form className={styled.loginContainer} >
        <TextField
          onChange={handleChange}
          name='email'
          value={user.email}
          type={"email"}
          id="email"
          label="email"
          variant="filled"
          color="success"
          focused />

        <TextField
          onChange={handleChange}
          name="password"
          value={user.password}
          type={"password"} id="password"
          label="password"
          variant="filled"
          color="success"
          focused />

        <Box sx={{ display: 'flex', gap: "40px" }}>
          <Button variant="container" color='secondary'>CANCEL</Button>
          <Button onClick={handleSubmit} type='submit' variant="contained" color='primary'>SUBMIT</Button>
        </Box>
        <Link to={"/register"}>If you do not have an account, click here</Link>

      </form>
    </div>
  )
}

export default Login