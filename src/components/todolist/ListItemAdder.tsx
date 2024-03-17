import { useState } from "react";

export function ListItemAdder(props:{
    readonly SaveString:(text: string) => void
}) {
    const {SaveString} = props;
    const [text, setText] = useState<string>("");
    return <>
    <div>
        <input type="text" value={text} onChange={ev =>{ setText(ev.target.value); }} /> 
            <button onClick={()=>{
                SaveString(text);
                setText("");
                <div>Testo Salvato: {text}</div>
            }}>Salva</button>  
    </div>
    </>
}
