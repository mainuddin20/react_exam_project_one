import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import icon from '../../asset/images/icons.png';
import icons from '../../asset/images/icon.png';
import iconn from '../../asset/images/iconn.png';


class InnerHeader extends Component {
      render() {
            return (
                  <Fragment flude className='bgcolor'>

                        <Container>
                              <Row >
                                    <div>
                                    <h1 className='goodexp text-center mt-5'>Best features for a good experience</h1>
                                    </div>

                                    <Col lg={4} md={6} sm={12} className='mt-5'>
                                          <h3><img src={ icon } alt="" className='' ></img>  Video messaging</h3>
                                          <p className='callp'>This software is very easy for you to manage. You can use it as you wish.</p>
                                    </Col>

                                    <Col lg={4} md={6} sm={12} className='mt-5'>

                                          <h3><img src={ icons } alt="" className='' ></img>  Keep safe & private</h3>
                                          <p className='callp'>This software is very easy for you to manage. You can use it as you wish.</p>

                                    </Col>

                                    <Col lg={4} md={6} sm={12} className='mt-5'>

                                          <h3><img src={ iconn } alt="" className='' ></img>  Save your time</h3>
                                          <p className='callp'>This software is very easy for you to manage. You can use it as you wish.</p>

                                    </Col>

                              </Row>
                        </Container>
                        
                  </Fragment>
            );
      }
}

export default InnerHeader;