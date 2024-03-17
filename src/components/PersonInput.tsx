/*
Creare un componente 
1)chiamato PersonInput che dovrà visualizzare:
--2 input testuali,uno per il nome e uno per il cognome
--un bottone con scritto salva

App.tsx dovrà utilizzare questo componente e potrà passargli una callback
il comportamento deve essere:
quando il bottone preme il bottone salva, app deve essere notificato tramite la callback
del salvataggio e ricevere la persona salvata

    input della callback {"name":"<...>","surname":"<...>" "}
    
per verifiva inviare il codice a:  gdradi@mydev.it
*/
import { useState } from "react";

export function PersonInput(props:{
    readonly Save:(text: string) => void}) {
    const {Save} = props;
    const [text, setText] = useState<string>("");
    return <>
    <div>
        <div>
            <input type="text" value={text} onChange={ev =>{ 
                setText(ev.target.value); 
                Save(ev.target.value);
            }} />
        </div>
        <button onClick={()=>{setText("");}}>Pulisci</button>
    </div>
    </>
}

/*
<PersonInput Save={text => {console.log(text); setTextNome(text)}} />
<div>{textNome}</div>
                
<PersonInput  Save={text => {console.log(text); setTextCognome(textCognome)}} />
<div>{textCognome}</div>

<button onClick={(ev)=>{<div>{textNome+textCognome}</div>}}>Salva</button>

da aggiustare e mettere in App.tsx
*/