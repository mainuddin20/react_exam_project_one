import React, { Component, Fragment } from 'react';
import { Container,Navbar,Nav ,Button} from 'react-bootstrap';
import '../../asset/css/bootstrap.min.css';
import logo from '../../asset/images/Logo.png';
import '../../asset/css/style.css';




class NavBar extends Component {
      render() {
            return (
                  <Fragment>

                        <Container fluid>

                        <Navbar expand="lg" >
                              <Container >
                              <Navbar.Brand href="#" > <img src={ logo } alt="" className='mainas'></img> </Navbar.Brand> 
                              <Navbar.Toggle aria-controls="navbarScroll" />
                              <Navbar.Collapse id="navbarScroll">
                              <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                              >
                                    <Nav.Link href="#action1" className='textco'>Demos</Nav.Link>
                                    <Nav.Link href="#action2" className='textco'>About</Nav.Link>

                                    <Nav.Link href="#action1" className='textco'>Blog</Nav.Link>
                                    <Nav.Link href="#action2" className='textco'>Pages</Nav.Link>
                                    <Nav.Link href="#action1" className='textco'>Contact</Nav.Link>
                                    
                                    
                              </Nav>
                                    <Nav.Link href="#action2" className='textco'>Login</Nav.Link>
                              
                                    <Button variant="primary">Get Started Free</Button>
                              
                              </Navbar.Collapse>
                              </Container>
                        </Navbar>

                        </Container>
                        
                  </Fragment>
            );
      }
}

export default NavBar;