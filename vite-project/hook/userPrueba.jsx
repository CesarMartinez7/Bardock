import React, { useEffect, useState } from "react";


const useUserPrueba = ({password,name}) => {
    const [rool,setRool] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/api/login?name=${name}&password=${password}`)
            .then(repuesta => repuesta.json())
            .then(roolUser => {
                console.table(roolUser)
                if(roolUser.length > 0){
                    setRool(roolUser[0]?.rool)
                }else{
                    console.log("No encontrado+")
                }
            })
    },[name,password])
    return {rool}
}

export default useUserPrueba;