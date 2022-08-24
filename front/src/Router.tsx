import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/unauth/Login";
import { SignIn } from "./pages/unauth/SignIn";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}