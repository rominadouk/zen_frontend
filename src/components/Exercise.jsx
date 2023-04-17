import axios from "axios";
import React, { useState, useEffect } from 'react';

//this page runs twice because of react strictmode in index.js
const Exercise = () => {
 const [exercise, setExercise] = useState([])

    const getExercise = () => {
        axios.get('https://zen-backend-e3xl.onrender.com/exercises').then((response) => {
        setExercise(response.data)
        console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    };

    useEffect(()=> {
        getExercise()
    }, []);

    return (  
        <>
        <p>Exercise Name:{exercise.name}</p>
        <p>Exercise Type:{exercise.type}</p>
        <p>Muscle:{exercise.muscle}</p>
        <p>Equipment:{exercise.equipment}</p>
        <p>Difficulty:{exercise.difficulty}</p>
        <p>Instructions:{exercise.instructions}</p>
        </>
    );
}
 
export default Exercise;