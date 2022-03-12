import { useEffect, useState } from "react"


export const Timer = ({start}) =>{
    
const [timer, setTimer] = useState(start)

useEffect(()=>{
    const id = setInterval(()=>{
        
        setTimer((p)=>p+1)
        
    },1000)
    

    
       
            return ()=>{
                clearInterval(id)
                console.log("cleanup ")
            }
        
    
},[]);

    return (
        <div>
            
            <h1>{timer}</h1>
        </div>

    )
}