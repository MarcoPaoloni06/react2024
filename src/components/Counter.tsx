import { useEffect, useState } from "react";
import Display from "./Display";

export default function Counter(props: {
    readonly initialvalue?:number;
}) {
    
    //definizione di uno stato, di tipo number,
    //inizializzato a zero
    const {initialvalue =0} = props;
    const [contatore, setContatore] = useState(initialvalue);
    console.log("App:", contatore);
    
    /*
    -quando almeno una delle variabili elencate nella lista di dipendenze cambia 
    allora viene invocato l'effetto

    con:
        lista delle dipendenze -> array(secondo argomento)
        effetto -> funzione(primo argomento)
    */
    useEffect(()=>{
        console.log("useEffect in corso:",initialvalue);
        setContatore(initialvalue);
        return () => {
            console.log("return dello useEffect",initialvalue);
        }
    },[initialvalue])


    return <> 
    <Display n={contatore} color="blue" /> 
    <button onClick={(ev)=>{
        /*
        setContatore(partial => partial+1);
        setContatore(partial => partial+2);//aumenta di 3 
        */
        setContatore(contatore+1);
        //aumenta di 1 leggendo solo l'ultima istruzione
        console.log("Click!, contatore:",contatore);
        }}>premi</button>
        {/* {contatore<20 &&  initialvalue=10}  */}
        <button onClick={()=>{setContatore(0);}}>Pulisci</button>
    </>
  }