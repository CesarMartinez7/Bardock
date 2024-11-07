import React from "react";
import { NotFound } from "../components/Icons/Logos.jsx";

const NotFoundPage = () => {
  return (
    <div className="container has-text-centered">
      <NotFound></NotFound>
      <h1 className="subtitle is-size-3">Not Found</h1>
      <p className="content"></p>
    </div>
  )
}

export default NotFoundPage;