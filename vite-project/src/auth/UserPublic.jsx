import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import LoadingComponente from "../components/Loading/Loading";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
const HomePage = lazy(() => import("../pages/Home"));
const RegistrerPage = lazy(() => import("../pages/Registrer"));
const NotFoundPage = lazy(() => import("../pages/404"));
const DataListV2Page = lazy(() => import("../pages/DataList"));
const Documentacion = lazy(() => {
  return import("../pages/Documentacion")
})
const Contact = lazy(()=> import("../pages/contact.jsx"))
const DashBoard = lazy(()=> import("../pages/Dashboard.jsx"))
const LoginPage = lazy(()=> import("../components/Login/Login.jsx"))

export function AppUser() {
  return (
    <Suspense fallback={<LoadingComponente />}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<RegistrerPage />} />
          <Route path="datos" element={<DataListV2Page />} />
          <Route path="docs" element={<Documentacion></Documentacion>}></Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="contact" element={<Contact/>}></Route>
          {/* <Route path="dash" element={<DashBoard></DashBoard>}></Route> */}
          <Route path="login" element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}


