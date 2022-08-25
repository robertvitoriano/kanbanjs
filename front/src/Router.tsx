import React, { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/unauth/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={localStorage.getItem('token') && <Login />} />
      </Routes>
    </BrowserRouter>
  )
}