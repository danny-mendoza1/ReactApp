import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/home-page";
import { LoginPage } from "../../pages/login-page";
import { SignUpPage } from "../../pages/sign-up-page";

export function AppRoutes(){
    return (
        <>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
        </>
    )
}