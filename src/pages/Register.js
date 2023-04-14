import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const registerUser = async (event) => {
        event.preventDefault();
      
        try {
          const response = await axios.post('https://zen-backend-e3xl.onrender/api/register', {
            username,
            email,
            password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          const data = response.data;
          if(data.status === 'ok') {
            navigate('/login')
          }
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
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Password" />
                <input type="submit" value="Register" />
            </form>
        </div>
        
        </>
     );
}
 
export default Register;