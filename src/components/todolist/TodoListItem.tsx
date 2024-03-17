export function TodoListItem(props:{
    i:number,
    item:string,
    Elimina:(i: number) => void
}) {
    const {i,item,Elimina} = props;
    return <>
        <div><button onClick={()=>{
            Elimina(i)}}>Elimina</button></div>
        <div>{i}</div>
        <div>{item}</div>
    </>
}