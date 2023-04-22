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
                        <NavLink to='/selfcare' className={(navData) => (navData.isActive ? "active-link nav-link" : 'nav-link')}>Self Care</NavLink>
                    </Col>
                    <Col>
                    <HouseDoorFill className='icon'/>
                    <br/>
                        <NavLink to='/' className={(navData) => (navData.isActive ? "active-link nav-link" : 'nav-link')}>Home</NavLink>
                    </Col>
                    <Col>
                    <Journal className="icon"/>
                    <br/>
                        <NavLink to='/journals' className={(navData) => (navData.isActive ? "active-link nav-link" : 'nav-link')}>Journal</NavLink>
                    </Col>
                </Row>
            </Container>
            <section className="d-none d-lg-block">
                <Container className="text-center">
                    <Row>
                        <Col className="col-2">
                            <h1 className="title text-left mt-3"><strong>ZEN</strong></h1>
                        </Col>

                            <Col className="col-2 offset-5 mt-4 selfcare-nav">
                                <PersonHeart className="icon"/>
                                <NavLink to='/selfcare' className={(navData) => (navData.isActive ? "active-link nav-link" : 'nav-link')}>Self Care</NavLink>
                            </Col>
                            <Col className="col-2 mt-4 home-nav">
                                <HouseDoorFill className='icon'/>
                                <br/>
                                <NavLink to='/' className={(navData) => (navData.isActive ? "active-link nav-link" : 'nav-link')}>Home</NavLink>
                            </Col>
                            <Col className="col-2 mt-4 journals-nav">
                                <Journal className="icon"/>
                                <br/>
                                <NavLink to='/journals' className={(navData) => (navData.isActive ? "active-link nav-link" : 'nav-link')}>Journal</NavLink>

                            </Col>
                    </Row>
                </Container>
            </section>

        </div>
     );
}
 
export default NavBar;