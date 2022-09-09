import React, { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/unauth/Login";
import { Main } from "./pages/auth/Main";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
      </Routes>

    </BrowserRouter>
  )
}