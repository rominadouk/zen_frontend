import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Joke = () => {
    const [joke, setJoke] = useState([]);

    const getJoke = async () => {
        try {
            const response = await axios.get('https://zen-backend-e3xl.onrender.com/jokes');
            setJoke(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getJoke();
    }, []);
//use conditional rendering, checks if the right side is true first, if it is, it will render the right side. 
    return (
        <>
            {joke.length > 0 && <p>Joke: {joke[0].joke}</p>}
        </>
    );
}

export default Joke;
