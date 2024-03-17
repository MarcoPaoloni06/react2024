import { useState } from "react";

export function MyCustomInput(props:{
    readonly required:boolean,
    readonly label:string,
    readonly placeholder:string,
    /*
    Callback per ricevere in input serve per passare al genitore un contenuto informativo
    in questo caso passa al genitore il testo dell'input ogni volta che questo (il testo) cambia
    */
    readonly onChange:(text: string) => void
}) {
    const {required,label,placeholder,onChange} = props;
    const [text, setText] = useState<string>("");
    return <>
    <div>
        <div>
            <label>{label} {required===true && <span>**</span>}</label>
            <input type="text" placeholder={placeholder} value={text} onChange={ev =>{ 
                setText(ev.target.value); 
                onChange(ev.target.value)
            }} />
        </div>
        {text.length===0 && required===true && <div>Campo Obbligatorio</div>}
        <button onClick={()=>{setText("");}}>Pulisci</button>
        
    </div>
    
    </>
}