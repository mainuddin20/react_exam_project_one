import React, { Component, Fragment } from 'react';
import { Container, Row,Col,} from 'react-bootstrap';
import directorder from '../../asset/images/directorder.png';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class DirectOrder extends Component {
      render() {
            return (
                  <Fragment>

                        <Container>

                              <Row>
                                    
                                    <Col lg={6} md={6} sm={12}>
                                    <img src={ directorder } alt="" className='w-100' ></img>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} className=''>

                                          <h3 className='directtext'>Get direct orders from your customers</h3>
                                          <p className='mt-4'>Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks easily build a page. There are many variations of passages of available.  </p>

                                          <div className='d-flex'>
                                                <Col>

                                                <h3 className='directtext mt-5'><CountUp start={0} end={12}>

                                                
                                                                  {({ countUpRef, start }) => (


                                                                        <VisibilitySensor onChange={start}>
                                                                        <span ref={countUpRef} />
                                                                        </VisibilitySensor>
                                                                        
                                                                        

                                                                  )}
                                                                  </CountUp>
                                                                  K+

                                                                  
                                                </h3>
                                                </Col>

                                                <Col className='directtext mt-5'>
                                                <h6>Project</h6>
                                                <h6>Created</h6>
                                                </Col>

                                                <Col>

                                                <h3 className='directtext mt-5'><CountUp start={0} end={1947}>

                                                
                                                                  {({ countUpRef, start }) => (


                                                                        <VisibilitySensor onChange={start}>
                                                                        <span ref={countUpRef} />
                                                                        </VisibilitySensor>
                                                                        
                                                                        

                                                                  )}
                                                                  </CountUp>
                                                                 

                                                                  
                                                </h3>
                                                </Col>

                                                <Col className='directtext mt-5'>
                                                <h6>Agencies</h6>
                                                <h6>Joined</h6>
                                                </Col>
                                                 



                                          </div>
                                          
                                    </Col>
                              </Row>

                        </Container>
                        
                  </Fragment>
            );
      }
}

export default DirectOrder;