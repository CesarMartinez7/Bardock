import { createRoot } from 'react-dom/client'
import { FetchingData } from "./components/DataList/dataList.jsx"
import React from 'react';
import './main.css'
import 'bulma/css/bulma.css';
import { App } from './App.jsx';
const root = createRoot(document.getElementById("root"))



root.render(
  <>
    <App></App>
  </>

)



