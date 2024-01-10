import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useState, useEffect } from "react";
export default function EffectSection(){
    const [modal, showModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    async function fetchUsers(){
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
        setLoading(false);
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    return(
        <section>
            <h3>Effects</h3>
            <Button onClick={()=>showModal(true)}>Открыть информацию</Button>
            <Modal open = {modal} >
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, harum, eum ex praesentium soluta at, quis libero magnam enim natus molestiae ducimus eligendi? Veritatis soluta reprehenderit odio voluptates eos fugiat.</p>
                <Button onClick={()=>showModal(false)}>Close</Button>
            </Modal>
            { loading&&<p>Loading ...</p>}
            {!loading&&<ul>
                {users.map((users)=><li key={users.id} >{users.name}</li>)}
                </ul>}
        </section>
    )
}