import { Container, Col, Row, DropdownButton, Dropdown} from "react-bootstrap";
import { useState } from "react";
import Skincare from "../components/Skincare.jsx";
import Exercise from "../components/Exercise.jsx";
import Joke from "../components/Jokes.jsx";
import Social from "../components/Social.jsx";
import AloneTime from "../components/AloneTime.jsx";
const Selfcare = () => {

    const [selectedOption, setSelectedOption] = useState("");
    const [dropdownTitle, setDropdownTitle] = useState("what would you like to do?")

    const handleSelect = (option) => {
        setSelectedOption(option)
        setDropdownTitle(option)
    }
    
    return ( 
        <>
        <h1 className="mt-3 text-center">Tips and More</h1>
        <Container className='filter-container'>
                    <Row>
                        <Col>
                        <p className="mt-2"> Today I want to...</p>
                        </Col>
                        <Col>
                            <DropdownButton title={dropdownTitle} onSelect={handleSelect}>
                                <Dropdown.Item eventKey="exercise">exercise</Dropdown.Item>
                                <Dropdown.Item eventKey="improve my skincare">improve my skin care</Dropdown.Item>
                                <Dropdown.Item eventKey='laugh'>laugh</Dropdown.Item>
                                <Dropdown.Item eventKey='be social'>be social</Dropdown.Item>
                                <Dropdown.Item eventKey='have alone-time'>have alone time</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
        </Container>
        {selectedOption === "improve my skincare" && <Skincare />}
        {selectedOption === "exercise" && <Exercise /> }
        {selectedOption === "laugh" && <Joke /> }
        {selectedOption === "be social" && <Social /> }
        {selectedOption === "have alone-time" && <AloneTime /> }
        </>
     );
}
 
export default Selfcare;