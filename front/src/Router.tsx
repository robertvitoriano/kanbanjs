import React, { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/unauth/Login";
import { Main } from "./pages/auth/Main";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {localStorage.getItem('token') ?
          <>
            <Route path='/home' element={<Main />} />
            <Route path='/' element={<Main />} />
          </>
          :
          <>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
          </>
        }


      </Routes>

    </BrowserRouter>
  )
}