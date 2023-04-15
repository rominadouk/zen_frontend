import "./Home.css"
import Affirmation from "../components/Affirmation";
import React from 'react';
import { useState } from 'react'




const Home = () => {
    const [selectedEmotion, setSelectedEmotion] = useState('')

    return ( 
        <>
        <Affirmation />
        <section className="feelings text-center">
            <h3>How are you feeling today, user?</h3>
            <button className="mt-4 btn btn-info emotion-button" onClick={() => setSelectedEmotion('happy')}>Happy</button>
            <br/>
            <br/>
            <button className='btn btn-info emotion-button' onClick={() => setSelectedEmotion('sad')}>Sad</button>
            <br/>
            <br/>
            <button className='btn btn-info emotion-button' onClick={() => setSelectedEmotion('angry')}>Angry</button>
            <br/>
            <br/>
            <button className='btn btn-info emotion-button' onClick={() => setSelectedEmotion('scared')}>Scared</button>
            <br/>
            <br/>
            <button className='btn btn-info emotion-button' onClick={() => setSelectedEmotion('anxious')}>Anxious</button>
        </section>
        </>
     );
}
 
export default Home;