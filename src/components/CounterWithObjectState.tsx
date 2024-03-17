import { useState } from "react";
import Display from "./Display";

interface State {
    readonly value:number
};


export default function CounterWithObjectState() {
    //definizione di uno stato, di tipo number,
    //inizializzato a zero
    const [state, setState] = useState<State>({value:0});
    console.log("CounterWithObjectState():", state);
  
    return <> 
    <div>CounterWithObjectState</div>
    <Display n={state.value} color="blue" /> 
    <button onClick={()=>{
        const newState: State={
            ...state,//crea una copia dello stato state che poi settiamo
            value:state.value+1}
        setState(newState);//è il setting della copia dello stato State appena creata
        //setState({value:state.value+1});
        console.log("Click!, contatore:",state.value);
        }}>premi</button>
        {state.value > 5 && <div>Attenzione! maggiore di 5</div>}
    </>
  }
