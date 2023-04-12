import { NavLink } from "react-router-dom";
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
                        <NavLink to='/selfcare' activeClassName='active-link' className='nav-link'>Self Care</NavLink>
                    </Col>
                    <Col>
                    <HouseDoorFill className='icon'/>
                    <br/>
                        <NavLink to='/' activeClassName='active-link' className="nav-link">Home</NavLink>
                    </Col>
                    <Col>
                    <Journal className="icon"/>
                    <br/>
                        <NavLink to='/journals' activeClassName='active-link' className="nav-link">Journal</NavLink>
                    </Col>
                </Row>
            </Container>

        </div>
     );
}
 
export default NavBar;