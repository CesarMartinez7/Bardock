import React, { useEffect, useState } from "react";


const useUserPrueba = ({password,name}) => {
    const [rool,setRool] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/api/login?name=${name}&password=${password}`)
            .then(repuesta => repuesta.json())
            .then(roolUser => setRool(roolUser[0]?.rool))
    },[name,password])
    return {rool}
}

export default useUserPrueba;