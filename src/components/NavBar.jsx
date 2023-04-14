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
                        <h1 className="title text-center mt-2 lg:mt-3 d-lg-none"><strong>ZEN</strong></h1>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center mobile-nav-links-icons d-lg-none">
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
            <section className="d-none d-lg-block">
                <Container className="">
                    <Row>
                        <Col className="col-2">
                            <h1 className="title text-left mt-3"><strong>ZEN</strong></h1>
                        </Col>
                            <Col className="col-2">
                                <PersonHeart className="icon"/>
                                <NavLink to='/selfcare' activeClassName='active-link' className='nav-link'>Self Care</NavLink>
                            </Col>
                            <Col className="col-2">
                                <HouseDoorFill className='icon'/>
                                <br/>
                                <NavLink to='/' activeClassName='active-link' className="nav-link">Home</NavLink>
                            </Col>
                            <Col className="col-2">
                                <Journal className="icon"/>
                                <br/>
                                <NavLink to='/journals' activeClassName='active-link' className="nav-link">Journal</NavLink>
                            </Col>

                    </Row>
                </Container>
            </section>

        </div>
     );
}
 
export default NavBar;