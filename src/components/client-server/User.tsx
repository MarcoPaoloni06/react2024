import { UserDTO } from "./UserDto"


export default function User(props:{
    readonly User:UserDTO;
}) {
    
    const { User } = props;

    return <>
    <div style={{display:"flex", alignItems: "center" }}></div>
    <img src={User.avatar} alt="avatar" />
    <div>{User.id}-{User.first_name}-{User.last_name}-{User.email}</div>
    </>
}