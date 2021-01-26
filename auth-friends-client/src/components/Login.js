import axios from 'axios';
import React,{ useState } from 'react';


export default function Login(props) {
    const [signIn, setSignIn]=useState({username:'',password:''})
    const handleChange=(e)=>{
        setSignIn({
            ...signIn,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", signIn)
            .then((res)=>{
                console.log(res.data)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/protected')
            })
            .catch(err=>console.log(err))

    }
   

    return (
        <div>
            <h2>login</h2>
            <input type='text' name='username' placeholder='username' onChange={handleChange} value={signIn.username}></input>
            <input type='password' name='password' placeholder='password' onChange={handleChange} value={signIn.password}></input>
            <button onClick={handleSubmit}>Sign In</button>
           
        </div>
    )
}
