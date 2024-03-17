import { ListItemAdder } from "./ListItemAdder";
import { TodoListItem } from "./TodoListItem"
import { useState } from "react";

export default function ToDoList() {
    const [list, setList] = useState<string[]>([]);

    return <>
    <div>ToDoList Marco Paoloni</div>
    <ListItemAdder SaveString={(text)=>{
        setList(list.concat(text)); }}/>
    {list.length>0 && <button onClick={()=>{
        setList([])}}>Cancella</button>}

    {list.map((listItem, index) => <TodoListItem
            key={index}
            i={index}
            item={listItem}
            Elimina={indexToRemove => {
                setList(list.filter((listItem, index) => index !== indexToRemove))
            }} />)}
    </>
}