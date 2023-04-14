const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (event) => {
        event.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:4000/api/login', {
            email,
            password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          const data = await response.json();
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