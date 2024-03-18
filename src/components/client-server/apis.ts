import { UserDTO } from "./UserDto";

const HOSTNAME="https://reqres.in/api/users" 

export async function fetchUsers() {
    const response = await fetch(HOSTNAME);
    const users:UserDTO[] = (await response.json()).data;
    return users
}

