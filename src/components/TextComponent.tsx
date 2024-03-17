import { useState } from "react";

export function TextComponent () {
    //Stato che contiene il valore imputato dell'utente
    const [text, setText] = useState<string>("giacomo");
    const [Password, setPassword] = useState<string>("ciao");

    return <>
    <div>TextComponent</div>
    <div>Username :<input type="text"
    value={text} /* passargli un value indica che questo input è controllato da noi */ 
    placeholder="Inserisci Username" 
    onChange={(ev)=>{
        setText(ev.target.value);
        console.log(ev.target.value);
    }} /><button onClick={()=>{
        setText("");
    }}>Pulisci</button> </div>


    <div>Password :<input type="text"//scrivendo passwod si vedono asterischi
    value={Password} 
    placeholder="Inserisci Password" 
    onChange={(ev)=>{
            setPassword(ev.target.value);
        }} /><button onClick={()=>{
            setPassword("");
        }}>Pulisci</button> 
        </div>

    <div>Username:{text}</div>
    <div>Password:{Password}</div>
    </>
}