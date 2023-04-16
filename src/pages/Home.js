import "./Home.css"
import Affirmation from "../components/Affirmation";
import axios from "axios";
import React from 'react';
import { useState, useEffect } from 'react'




const Home = () => {
    
    const [emotionData, setEmotionData] = useState([])
    const [happyData,setHappyAmount] = useState(Number);
    const [sadData, setSadAmount] = useState(Number)
    const [angryData, setAngryAmount] = useState(Number)

    const getEmotions = () => {
        axios.get('http://localhost:4000/emotions').then((response)=> {
            setEmotionData(response.data)
            setHappyAmount(response.data[0].instances)
            setSadAmount(response.data[1].instances)
            setAngryAmount(response.data[2].instances)
            
            // accesses happy console.log(response.data[0].category)
        })
    };

    const updateHappyAmount = () => {
        const addHappy = happyData + 1
        return addHappy
    };

    const updateAngryAmount = () => {
        const addAngry = angryData + 1
        return addAngry
    }


    useEffect(()=> {
        getEmotions()
    }, [])

    return ( 
        <>
        <Affirmation />
        <section className="feelings text-center">
            <h3>How are you feeling today?</h3>
            <button className="mt-4 btn btn-info emotion-button" onClick={updateHappyAmount}>Happy</button>
            <br/>
            <br/>
            <button className='btn btn-info emotion-button'>Sad</button>
            <br/>
            <br/>
            <button className='btn btn-info emotion-button'>Angry</button>
            <br/>
            <br/>
            <button className='btn btn-info emotion-button'>Scared</button>
            <br/>
            <br/>
            <button className='btn btn-info emotion-button'>Anxious</button>
        </section>
        </>
     );
}
 
export default Home;