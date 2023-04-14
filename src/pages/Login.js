import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (event) => {
        event.preventDefault();
      
        try {
          const response = await axios.post('https://zen-backend-e3xl.onrender.com/api/login', {
            email,
            password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          const data = await response.data;
          if(data.user) {
            localStorage.setItem('token', data.user)
            alert('Login successful')
            window.location.href='/'
          } else {
            alert('Please check your username and password')
          }
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };

    return ( 
        <>
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder="Email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
        </div>
        
        </>
     );
}
 
export default Login;