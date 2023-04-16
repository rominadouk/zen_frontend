import { Container, Col, Row, DropdownButton, Dropdown} from "react-bootstrap";
import { useState } from "react";
import Skincare from "../components/Skincare.jsx";
const Selfcare = () => {

    const [selectedOption, setSelectedOption] = useState("");

    const handleSelect = (option) => {
        setSelectedOption(option)
    }
    
    return ( 
        <>
        <h1 className="mt-3 text-center">Tips and More</h1>
        <Container className='filter-container'>
                    <Row>
                        <Col>
                        <p className="mt-2"> Today I want to</p>
                        </Col>
                        <Col>
                            <DropdownButton title='activity' onSelect={handleSelect}>
                                <Dropdown.Item eventKey="exercise">exercise</Dropdown.Item>
                                <Dropdown.Item eventKey="skincare">improve my skin care</Dropdown.Item>
                                <Dropdown.Item eventKey='eating-habits'>improve my eating habits</Dropdown.Item>
                                <Dropdown.Item eventKey='sun'>see more of the sun</Dropdown.Item>
                                <Dropdown.Item eventKey='social'>be social</Dropdown.Item>
                                <Dropdown.Item eventKey='alone-time'>have alone time</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
        </Container>
        {selectedOption === "skincare" && <Skincare />}
        </>
     );
}
 
export default Selfcare;