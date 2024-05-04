import React, { Component, Fragment } from 'react';
import { Col, Container, Row ,Button,} from 'react-bootstrap';
import topheader from '../../asset/images/topheader.png';
import count from '../../asset/images/count.png';
import star from '../../asset/images/Stars.png';
// import tir from '../../asset/images/tir.png';
import { GoArrowRight } from "react-icons/go";



import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class TopHeader extends Component {
      render() {
            return (
                  <Fragment flude className='bg'>

                        <Container >
                              <Row>
                                    <Col lg={6} md={6} sm={12}>

                                          <h1 className='toptext'>The most flexible chatting app you will ever use.</h1>
                                          <p className=' mt-3 topp'>Great software that allows you to chat from any place at any time without any interruption.</p>
                                          <Button variant="primary" className='mt-4'>Start Chatting Now <GoArrowRight /> </Button>


                                        <div className='d-flex m-5'>  

                                        <Col><img src={ count } alt="" className='' ></img></Col>

                                          
                                                <Col>
                                                      <h3><CountUp start={0} end={38482}>

                                          
                                                            {({ countUpRef, start }) => (


                                                                  <VisibilitySensor onChange={start}>
                                                                  <span ref={countUpRef} />
                                                                  </VisibilitySensor>
                                                                  
                                                                  

                                                            )}
                                                            </CountUp>
                                                      </h3>
                                                      <p>Happy Customers</p>

                                                      
                                                </Col>

                                                <Col>
                                                <h3>4.8/5</h3>
                                                <p><img src={ star } alt="" className='' ></img> Rating</p>
                                                </Col>
                                          


                                        
                                        
                                        
                                        
                                        </div>  




                                    </Col>


                                    <Col lg={6} md={6} sm={12}>

                                    <img src={ topheader } alt="" className=' topimages w-100' ></img>


                                    </Col>

                              </Row>
                        </Container>
                        
                  </Fragment>
            );
      }
}

export default TopHeader;