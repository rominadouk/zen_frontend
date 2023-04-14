import React, { useState } from 'react';
import axios from 'axios';


const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const registerUser = async (event) => {
    //     event.preventDefault()
    //    const response = await fetch('http://localhost:4000/api/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type' : 'application/json',
    //         },
    //         body:JSON.stringify({
    //             name,
    //             email,
    //             password
    //         }),
    //     })
    //     const data = await response.json()
    //     console.log(data)
    // };


    const registerUser = async (event) => {
        event.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:4000/api/register', {
            username,
            email,
            password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          const data = response.data;
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };

    return ( 
        <>
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder="Username"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder="Email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder="Password" />
                <input type="submit" value="Register" />
            </form>
        </div>
        
        </>
     );
}
 
export default Register;