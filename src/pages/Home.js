import "./Home.css"
// import jwt from 'jsonwebtoken'
// import { useNavigate } from "react-router-dom";
import Affirmation from "../components/Affirmation";
// import axios from "axios";
import React from 'react';



const Home = () => {

    //     const navigate = useNavigate()

    //     const populate = async () => {
    //         try { 
    //             const response = await axios.get('https://zen-backend-e3xl.onrender.com/journals', {
    //             headers: {
    //                 'x-access-token' : localStorage.getItem('token'),
    //             },
    //         })
    //         const data = response.data
    //         console.log(data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // };

    //     useEffect(()=> {
    //         const token = localStorage.getItem('token')
    //         if (token) {
    //             const user = jwt.decode(token)
    //             if (token) {
    //                 const user = jwt.decode(token)
    //                 if(!user) {
    //                     localStorage.removeItem('token')
    //                     navigate('/login', { replace: true })
    //                 } else {
    //                     navigate('/');
    //                 }
    //             }
    //         }
    //     }, [navigate])

    return ( 
        <>
        <Affirmation />
        <section className="feelings text-center">
            <h3>How are you feeling today, user?</h3>
            <button className="mt-4 btn btn-info">Happy</button>
            <br/>
            <br/>
            <button className='btn btn-info'>Sad</button>
            <br/>
            <br/>
            <button className='btn btn-info'>Angry</button>
            <br/>
            <br/>
            <button className='btn btn-info'>Scared</button>
            <br/>
            <br/>
            <button className='btn btn-info'>Surprised</button>
            <br/>
            <br/>
            <button className='btn btn-info'>Disgusted</button>
        </section>
        </>
     );
}
 
export default Home;