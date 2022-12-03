import React from "react";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from "./components/commons/ProtectedRoutes";
import GHContext from './components/commons/GHContext'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <GHContext>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/home" element={<Home />} />
              <Route path="/profile/:user" element={<Profile />} />
            </Route>

          </Routes>
        </GHContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
