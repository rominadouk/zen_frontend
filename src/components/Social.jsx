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
        <p>{socialActivity.activity}</p>
        <p>{socialActivity.type}</p>
        </>
     );
}
 
export default Social;