import React, { useState, useEffect } from 'react';
import axios from 'axios';



const AloneTime = () => {
    const [soloActivity, setSoloActivity] = useState([])

    const getActivity = () => {
        axios.get('https://www.boredapi.com/api/activity?participants=1').then((response) => {
            setSoloActivity(response.data)
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
        <p>{soloActivity.activity}</p>
        <p>{soloActivity.type}</p>
        </>
     );
}
 
export default AloneTime;