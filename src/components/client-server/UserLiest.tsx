import { useEffect, useState } from "react"
import { UserDTO } from "./UserDto";
import User from "./User";
import { Button, Spin, Alert } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { fetchUsers } from "./apis";



/*
async function myApiCall() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
  }
*/

export default function UserList() {

    const [list,setList]=useState<UserDTO[]>([]);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState<string | null>(null);

    async function myApiCall() {
        console.log("inizio chimata");
        setIsLoading(true);
        setList([]);
        setError(null);
        try{
            const users=await fetchUsers();
            console.log(users);
            setList(users);
        } catch (e:any) {
            console.log(e.message);
            setError(e.message);
        }    
    setIsLoading(false);
            
    }

    useEffect(()=>{
    myApiCall();
    console.log("log");
    })


    return <> 
    <div>User List</div>
    <Button type="primary" onClick={()=>{myApiCall()}}>Refresh</Button>
    {isLoading && <Spin indicator={<LoadingOutlined style={{fontSize: 32}}spin />}/>}
    {error != null && <Alert
        message ="Errore"   
        description={error}
        type="error"
        showIcon
        />}

    {list.map((user,i) => <User User={user} key={i}  />)}
    
    </>

        
}