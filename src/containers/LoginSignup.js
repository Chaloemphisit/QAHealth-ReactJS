import React from 'react';
import { Tabs } from "@yazanaabed/react-tabs";
import { Card, CardBody, Form, FormGroup, Input, Label, Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const styles = {
    // fontFamily: "Prompt",
    textAlign: "center",
};

export default class LoginSignup extends React.Component {

    render() {
        return (

            <div id="login-signup-div" className="container-fluid">
                <Row>
                    <Col md={4}></Col>
                    <Col md={4} xs={12}>
                        <Card className="mt-3">
                            <CardBody>
                                <div style={styles}>
                                    <Tabs
                                        activeTab={{
                                            id: "tab1"
                                        }}
                                    >
                                        <Tabs.Tab id="tab1" title="Login" >
                                            <div className="mt-3" >
                                                <Form action="/authenticate">
                                                    <FormGroup>
                                                        <Label for="loginUsername" className="float-left">ชื่อผู้ใช้งาน</Label>
                                                        <Input type="text" name="username" id="loginUsername" placeholder="Username" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="loginPassword" className="float-left">รหัสผ่าน</Label>
                                                        <Input type="password" name="password" id="loginPassword" placeholder="Password" />
                                                    </FormGroup>
                                                    <Row>
                                                        <Link to="/" className="float-left ml-3 mb-3">ลืมรหัสผ่านใช่ไหม?</Link>
                                                    </Row>
                                                    <Button outline color="info">Login</Button>{' '}
                                                </Form>
                                            </div>
                                        </Tabs.Tab>
                                        <Tabs.Tab id="tab2" title="Signup">
                                            <div className="mt-3">
                                                <Form>
                                                <FormGroup>
                                                        <Label for="regisFirstName" className="float-left">ชื่อ</Label>
                                                        <Input type="text" name="regisFirstName" id="regisFirstName" placeholder="First Name" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="regisLastName" className="float-left">นามสกุล</Label>
                                                        <Input type="text" name="regisLastName" id="regisLastName" placeholder="Last Name" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="loginUsername" className="float-left">ชื่อผู้ใช้งาน</Label>
                                                        <Input type="text" name="username" id="loginUsername" placeholder="Username" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="loginPassword" className="float-left">รหัสผ่าน</Label>
                                                        <Input type="password" name="password" id="loginPassword" placeholder="Password" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="regisEmail" className="float-left">อีเมล</Label>
                                                        <Input type="email" name="email" id="regisEmail" placeholder="E-Mail" />
                                                    </FormGroup>
                                                    <Button outline color="info">Register</Button>{' '}
                                                </Form>
                                            </div>
                                        </Tabs.Tab>
                                    </Tabs>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </div>
        );
    }
}