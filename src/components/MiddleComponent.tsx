import { MyCustomInput } from "./MyCustomInput";

export function MiddleComponent(props: {readonly onChange:(text: string) => void}){
    const {onChange} = props;
    return<> <MyCustomInput placeholder='Inserisci' label='Nome' required={true} onChange={onChange}/>  </>
}

