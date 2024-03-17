/*
fare un componente che quando si monta fa partire un interval che ogni volta si incrementa
*/

import { useEffect,useState } from "react";


export default function IntervalCount() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        const intervalRef = setInterval(()=>{
            console.log(count);
            setCount(count => count+1);
            return ()=>{
                clearInterval(intervalRef);
            }
        },1000);
    },[])
    
    return <> 
    <div>intervalCount: {count}</div>
    </>
  }