import { useState } from "react";
import { Button } from "antd";

export function ListItemAdder(props:{
    readonly SaveString:(text: string) => void
}) {
    const {SaveString} = props;
    const [text, setText] = useState<string>("");
    return <>
    <div>
        <input type="text" value={text} onChange={ev =>{ setText(ev.target.value); }} /> 
            <Button type="primary" onClick={()=>{
                SaveString(text);
                setText("");
                <div>Testo Salvato: {text}</div>
            }}>Salva</Button>  
    </div>
    </>
}
