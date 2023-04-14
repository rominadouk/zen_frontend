import "./Home.css"
// import jwt from 'jsonwebtoken'
// import { useNavigate } from "react-router-dom";
import Affirmation from "../components/Affirmation";
// import axios from "axios";
import React, { useEffect } from 'react';



const Home = () => {

    //     const navigate = useNavigate()

    //     const populate = async () => {
    //         try { 
    //             const response = await axios.get('http://localhost:4000/journals', {
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
            <button>Happy</button>
            <button>Sad</button>
            <button>Angry</button>
            <button>Scared</button>
            <button>Surprised</button>
            <button>Disgusted</button>
        </section>
        </>
     );
}
 
export default Home;