import { useState,useEffect } from "react";
import axios from "axios";
import Temp from "./Temp";
import AdminNavBar from "./AdminNavBar"
function AdminWelcome(){
    const[user,setUser] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8091/v1/customer")
        .then((res)=>{
            setUser(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
<>
<AdminNavBar/>
        <h1>Admin welcome page</h1>
        {user.map(u=><Temp key={u.id}name={u.name} phoneNumber={u.phoneNumber} adhar={u.adhar} panNumber={u.panNumber} email={u.email} dateOfBirth={u.dateOfBirth}/>)}
</>
    );
}
export default AdminWelcome