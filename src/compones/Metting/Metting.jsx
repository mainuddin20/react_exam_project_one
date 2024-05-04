import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';

class Metting extends Component {
      render() {
            return (
                  <Fragment flued className='b'>

                        <Container>
                              <Row className='mett'>
                                    <Col lg={6} md={6} sm={12}>

                                    <div className=' player-wrapper'>
                                          <ReactPlayer 
                                          className='react-player'
                                          url='https://youtu.be/nGjry7dq6EI?si=O9lGdTB43c_PeYYC'
                                          width='400px'
                                          height='290px'
                                          muted={true}
                                          />
                                    </div>

                                    </Col>
                                    <Col lg={6} md={6} sm={12}>

                                          <h1 className='mettingclass'> 
                                          Meet your customers, with live video chat
                                          </h1>
                                          <h5 className='mt-4'>Proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</h5>
                                          <h6 className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</h6>


                                    </Col>

                              </Row>
                        </Container>
                        
                  </Fragment>
            );
      }
}

export default Metting;