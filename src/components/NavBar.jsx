import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import './NavBar.css'
import {HouseDoorFill, Journal, PersonHeart } from 'react-bootstrap-icons'

const NavBar = () => {
    return ( 
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="title text-center mt-2 lg:mt-3"><strong>ZEN</strong></h1>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center">
                <Row>
                    <Col>
                    <PersonHeart className="icon"/>
                        <Link to='/selfcare' className='nav-link'>Self Care</Link>
                    </Col>
                    <Col>
                    <HouseDoorFill className='icon'/>
                    <br/>
                        <Link to='/' className="nav-link">Home</Link>
                    </Col>
                    <Col>
                    <Journal className="icon"/>
                    <br/>
                        <Link to='/journals' className="nav-link">Journal</Link>
                    </Col>
                </Row>
            </Container>

        </div>
     );
}
 
export default NavBar;