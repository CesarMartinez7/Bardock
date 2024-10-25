import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { lazy } from "react";
import LoadingComponente from "./components/Loading/Loading"


// import NotFoundPage from "./pages/404"



const HomePage = lazy(()=> import("./pages/404"))
const FormularioPage = lazy(()=> import("./pages/Formulario"))
const NotFoundPage = lazy(()=> import("./pages/404"))
const DataListV2Page = lazy(()=> import("./pages/DataList"))
const DataListV1Component = lazy(()=> import("./components/DataListGrid/DataListGrid"))


export function App() {
  return (
    <Suspense fallback={<LoadingComponente></LoadingComponente>}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="form" element={<FormularioPage/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
          <Route path="datosv1" element={<DataListV1Component></DataListV1Component>}></Route>
          <Route path="datosv2" element={<DataListV2Page/>}></Route>
        </Routes>
    </BrowserRouter>
    </Suspense>
    
  );
}
