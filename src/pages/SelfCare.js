import { Container, Col, Row, DropdownButton, Dropdown} from "react-bootstrap";
import { useState } from "react";
import Skincare from "../components/Skincare.jsx";
import Exercise from "../components/Exercise.jsx";
import Joke from "../components/Jokes.jsx";
import Social from "../components/Social.jsx";
import AloneTime from "../components/AloneTime.jsx";
const Selfcare = () => {

    const [selectedOption, setSelectedOption] = useState("");
    const [dropdownTitle, setDropdownTitle] = useState("Choose One")

    const handleSelect = (option) => {
        setSelectedOption(option)
        setDropdownTitle(option)
    }
    
    return ( 
        <>
        <h1 className="my-3 text-center">Self Care</h1>
        <Container className='filter-container text-center'>
            <Row>
                <Col>
                <p className="mt-2 mx-1"> Today I want to...</p>
                    <DropdownButton className="mx-1" title={dropdownTitle} onSelect={handleSelect}>
                        <Dropdown.Item eventKey="exercise">exercise</Dropdown.Item>
                        <Dropdown.Item eventKey="improve my skincare">improve my skin care</Dropdown.Item>
                        <Dropdown.Item eventKey='laugh'>laugh</Dropdown.Item>
                        <Dropdown.Item eventKey='be social'>be social</Dropdown.Item>
                        <Dropdown.Item eventKey='have alone-time'>have alone time</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        </Container>
        <Container className="mb-5">
            <Row>
                <Col>
                    {selectedOption === "improve my skincare" && <Skincare />}
                    {selectedOption === "exercise" && <Exercise /> }
                    {selectedOption === "laugh" && <Joke /> }
                    {selectedOption === "be social" && <Social /> }
                    {selectedOption === "have alone-time" && <AloneTime /> }
                </Col>
            </Row>
        </Container>
        
        </>
     );
}
 
export default Selfcare;