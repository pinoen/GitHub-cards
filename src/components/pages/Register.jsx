import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import styled from '../../styles/styled.module.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [userData, SetUserData] = useState({
    email: "",
    password: "",
    confirm: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    SetUserData(preData => {
      return {
        ...preData,
        [name]: value
      }
    })
  }

  const navigate = useNavigate()

  function handleCancel() {
    navigate("/")
  }

  function handleRegister(e) {
    e.preventDefault()
    if (userData.password === userData.confirm) {
      localStorage.setItem("github", JSON.stringify(userData))
      alert("Registro exitoso. Ahora puede loguearse")
      navigate("/")
    } else {
      alert("Revisar datos ingresados.")
    }
  }

  return (
    <div>
      <form className={styled.loginContainer} >
        <TextField
          onChange={handleChange}
          type={"email"}
          id="email"
          label="email"
          variant="filled"
          color="warning"
          name="email"
          value={userData.email}
          focused />
        <TextField
          onChange={handleChange}
          type={"password"} id="password"
          label="password"
          variant="filled"
          color="warning"
          name='password'
          value={userData.password}
          focused />
        <TextField
          onChange={handleChange}
          type={"password"}
          id="confirm"
          label="confirm password"
          variant="filled" color="warning"
          name='confirm'
          value={userData.confirm}
          focused />

        <Box sx={{ display: 'flex', gap: "40px" }}>
          <Button onClick={handleCancel} variant="container" color='secondary'>CANCEL</Button>
          <Button onClick={handleRegister} type='submit' variant="contained" color='primary'>REGISTER</Button>
        </Box>

      </form>
    </div>
  )
}

export default Register