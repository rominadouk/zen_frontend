import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Social = () => {
    const [socialActivity, setSocialActivity] = useState([])

    const getActivity = () => {
        axios.get('https://www.boredapi.com/api/activity?type=social').then((response) => {
            setSocialActivity(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    };
    


    useEffect(()=> {
        getActivity()
    }, []);


    return ( 
        <>
        <div className="post-container container px-5 py-4">
            <h2>Social Activity</h2>
            <p className='lead'>{socialActivity.activity}.</p>
            <h3>Cost Rating</h3>
            <p className='lead'>{socialActivity.price}</p>
            <div className="mt-4 text-right">
                <button className="btn btn-dark" onClick={getActivity}>Next Activity</button>
            </div>
        </div>
        </>
     );
}
 
export default Social;