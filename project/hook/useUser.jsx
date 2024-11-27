import React, { useEffect, useState } from "react";

const useUser = () => {
  const [rool, setRool] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/datos?table=userroot")
      .then((repuesta) => repuesta.json())
      .then((roolUser) => setRool(roolUser[0].rool));
  }, [rool]);
  return [rool];
};

export default useUser;
