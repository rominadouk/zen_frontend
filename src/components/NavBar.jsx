import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import './NavBar.css'

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
                        <p>Self Care</p>
                    </Col>
                    <Col>
                        <Link to='/'>Home</Link>
                    </Col>
                    <Col>
                        <Link to='newpost'>Journal</Link>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default NavBar;