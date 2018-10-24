import React from 'react';
// import { Tabs } from "@yazanaabed/react-tabs";
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserQuestionTabs } from '../components'


export default class LoginSignup extends React.Component {

    render() {
        const hColor = "#717171"
        const bColor = "#717171"
        return (
            <div className="container" id="card-margin-top-bottom">
                <div>
                    <Card outline color="info">
                        <CardBody>
                            <Row>
                                <Col md={4} sm={12} xs={12} align="center">
                                    <FontAwesomeIcon className="align-items-center" icon="user-circle" size="10x" color="#17A2B8" />
                                    <h4 className="mt-3"><Link to="/editProfile"><Button outline color="info">แก้ไขโปรไฟล์</Button>{' '}</Link></h4>
                                </Col>
                                <Col md={8} sm={12} xs={12} className="mt-4">
                                    <Row >
                                        <Col align="center" className="text-md-left text-lg-left">
                                            <h2 style={{ color: hColor, fontWeight: 'bold' }}>ทดสอบ ทำไม </h2>
                                            {/* <p>User ID :{this.props.match.params.id}</p> */}
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col lg={3} md={4} sm={4} xs={6}><h5 style={{ color: hColor, fontWeight: 'bold' }}>Username</h5></Col>
                                        <Col lg={5} md={4} sm={8} xs={6}><h5 align="left" style={{ color: bColor }}>khonthai</h5></Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={4} sm={4} xs={6}><h5 style={{ color: hColor, fontWeight: 'bold' }}>Email</h5></Col>
                                        <Col lg={5} md={4} sm={8} xs={6}><h5 align="left" style={{ color: bColor }}>khonthai@thai.com</h5></Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={4} sm={4} xs={6}><h5 style={{ color: hColor, fontWeight: 'bold' }}>Password</h5></Col>
                                        <Col lg={5} md={4} sm={8} xs={6}><h5 align="left" style={{ color: bColor }}>*********</h5></Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={4} sm={4} xs={6}></Col>
                                        <Col lg={5} md={4} sm={8} xs={6}> <Button outline color="info">เปลี่ยนรหัส</Button>{' '}</Col>
                                    </Row>

                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </div>
                <div id="card-margin-top-bottom">
                    <Card outline color="info">
                        <CardBody>
                            <UserQuestionTabs />
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}