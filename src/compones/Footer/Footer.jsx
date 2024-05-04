import React, { Component, Fragment } from 'react';
import { Container, Row ,Col,Button,Navbar,Nav,Form} from 'react-bootstrap';
import logo from '../../asset/images/Logo.png';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

class Footer extends Component {
      render() {
            return (
                  <Fragment>

                        <Container>
                              <Row>
                                    <div className='mt-4'>
                                          <Col>


                                          <h1 className='footerheding text-center mt-5 '>Drop us a line or two, we are <br></br> open for creative minds and<br></br>collaborations!</h1>

                                          <div className='text-center'><Button variant="primary" className=' mt-4'>Start Chatting Now</Button></div>
                                          
                                          

                                          <div>




                                          <Navbar expand="lg"  className='navbarn'>
                                                      <Container fluid>
                                                      <Navbar.Brand href="#"><img src={ logo } alt="" ></img></Navbar.Brand>
                                                      <Navbar.Toggle aria-controls="navbarScroll" />
                                                      <Navbar.Collapse id="navbarScroll">
                                                      <Nav
                                                            className="mx-auto my-2 my-lg-0"
                                                            style={{ maxHeight: '100px' }}
                                                            navbarScroll
                                                      >
                                                            <Nav.Link href="#action1" className='textco'>About</Nav.Link>
                                                            <Nav.Link href="#action2" className='textco'>Features</Nav.Link>
                                                            <Nav.Link href="#action1" className='textco'>Works</Nav.Link>
                                                            <Nav.Link href="#action2" className='textco'>Support</Nav.Link>
                                                            
                                                            
                                                      </Nav>
                                                      <Form className=" sideicon d-flex">
                                                            
                                                      
                                                      
                                                      <p className='padingicon'><a href="https://twitter.com/itexpertmainu"><FaTwitter /></a></p>
                                                      
                                                      <p className='padingicon'><a href="https://www.facebook.com/mainuddinhossen.mainuddin.56/"><FaFacebookF /></a></p>
                                                      
                                                      <p className='padingicon'><a href="https://www.instagram.com/petloverallcountry/"><FaInstagram /></a></p>
                                                      
                                                      <p className='padingicon'><a href="https://github.com/mainuddin20"><FaGithub /></a></p>
                                                      </Form>
                                                      </Navbar.Collapse>
                                                      </Container>

                                          </Navbar>

                                                <div className="oreng-underline mt-2 m-auto"></div>


                                                <div className='d-flex'>
                                                <Col>
                                                      <p className='mainu'>&copy;Copyright 2021, All Rights Reserved</p>
                                                </Col>

                                                <Col className='rigthtex'>
                                                      <div className='d-flex'>
                                                      <p className='pmargin'>Privacy Policy</p> 
                                                      <p className='pmargin'>Terms & Conditions</p>
                                                      <p className='pmargin'>Rulls and regulation</p>
                                                      </div>   
                                                </Col>
                                                </div>

                                          </div>
                                          </Col>

                                    </div>
                              </Row>
                        </Container>
                        
                  </Fragment>
            );
      }
}

export default Footer;