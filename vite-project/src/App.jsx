import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { lazy } from "react";
import LoadingComponente from "./components/Loading/Loading"
import { Navbar } from "./components/Navbar/Navbar";


// import NotFoundPage from "./pages/404"



const HomePage = lazy(()=> import("./pages/Home"))
const FormularioPage = lazy(()=> import("./pages/Formulario"))
const NotFoundPage = lazy(()=> import("./pages/404"))
const DataListV2Page = lazy(()=> import("./pages/DataList"))
const DataListV1Component = lazy(()=> import("./components/DataListGrid/DataListGrid"))


export function App() {
  return (
    <Suspense fallback={<LoadingComponente></LoadingComponente>} set>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar></Navbar>}>
            <Route index element={<HomePage ></HomePage>}></Route>
            <Route path="form" element={<FormularioPage/>}></Route>
            <Route path="datosv1" element={<DataListV1Component></DataListV1Component>}></Route>
            <Route path="datosv2" element={<DataListV2Page/>}></Route>
            <Route path="*" element={<NotFoundPage/>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
    </Suspense>
    
  );
}
