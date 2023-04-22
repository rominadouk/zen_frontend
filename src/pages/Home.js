import "./Home.css"
import Affirmation from "../components/Affirmation";
import axios from "axios";
import React from 'react';
import { useState, useEffect } from 'react'
import Moment from 'moment'
import { Col, Container, Row } from "react-bootstrap";




const Home = () => {
    const [happyData,setHappyAmount] = useState(Number);
    const [sadData, setSadAmount] = useState(Number)
    const [angryData, setAngryAmount] = useState(Number)
    const [showHappy,setShowHappy] = useState(false)
    const [showSad, setShowSad] = useState(false)
    const [showAngry, setShowAngry] = useState(false)


    //use Moment for date and format how it displays
    const now = new Date();
    const formattedDateTime = Moment(now).format('MMMM Do YYYY');

    const getEmotions = () => {
        axios.get('https://zen-backend-e3xl.onrender.com/emotions').then((response)=> {
            setHappyAmount(response.data[0].instances)
            setSadAmount(response.data[1].instances)
            setAngryAmount(response.data[2].instances)
            
        })
    };

    const updateHappyAmount = () => {
        const addHappy = happyData + 1
        setHappyAmount(addHappy)
        setShowHappy(true)
    };

    const updateAngryAmount = () => {
        const addAngry = angryData + 1
        setAngryAmount(addAngry)
        setShowAngry(true)
    };

    const updateSadAmount = () => {
        const addSad = sadData + 1
        setSadAmount(addSad)
        setShowSad(true)
    };


    useEffect(()=> {
        getEmotions()
    }, []);

    return ( 
        <>
        <h2 className="text-center mt-5">{formattedDateTime}</h2>
        <Affirmation />
        <section className="feelings text-center">
            <h3>How are you feeling today?</h3>
            <button className="mt-4 btn btn-info emotion-button" onClick={updateHappyAmount}>Happy</button>
            <br/>
            <br/>
            <button className='btn btn-info emotion-button' onClick={updateSadAmount}>Sad</button>
            <br/>
            <br/>
            <button className='btn btn-info emotion-button' onClick={updateAngryAmount}>Angry</button>
        </section>
        <Container className="mt-4 text-center">
            {showHappy && 
                <Row>
                    <Col>
                        <p>You've been Happy: {happyData} times! Keep it up.</p>
                    </Col>
                </Row>
            }
            {showSad && 
                <Row>
                    <Col>
                        <p>You've been Sad: {sadData} times! We all have those days. Practice journaling and self-care.</p>
                    </Col>
                </Row>
            }
            {showAngry && 
                <Row>
                    <Col>
                        <p>You've been Angry: {angryData} times. Practice journaling and self-care.</p>
                    </Col>
                </Row>
            }
        </Container>
        </>
     );
}
 
export default Home;