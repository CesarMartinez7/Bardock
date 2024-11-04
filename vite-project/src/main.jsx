import { createRoot } from 'react-dom/client'
import React from 'react';
import './main.css'
import 'bulma/css/bulma.css';
import { App } from './App.jsx';
import "antd/dist/antd.js"

const root = createRoot(document.getElementById("root"))



root.render(
  <>
    <App></App>
  </>

)



