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
const Account = lazy(()=> import("../components/Account/Account.jsx"))
const Create = lazy(() => import("../pages/CreateDb.jsx"))
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
          <Route path="login" element={<LoginPage></LoginPage>}></Route>
          <Route path="account" element={<Account></Account>}></Route>
          <Route path="create" element={<Create></Create>}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}


