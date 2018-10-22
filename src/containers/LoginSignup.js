import React from 'react';
import { Tabs } from "@yazanaabed/react-tabs";
import { Card, CardBody, Form, FormGroup, Input, Label, Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const styles = {
    // fontFamily: "Prompt",
    textAlign: "center",
};

export default class LoginSignup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: '',
            validate: {
                emailState: '',
                textState: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    submitLoginForm(e) {
        e.preventDefault();
        console.log(`username: ${this.state.username}`)
    }
    submitSignUpForm(e) {
        e.preventDefault();
        console.log(`username: ${this.state.username}`)
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' && target.validity.valid ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    }

    render() {
        const { firstName, lastName, username, password, email } = this.state;

        return (
            <div id="login-signup-div" className="container-fluid">
                <Row>
                    <Col lg={{ size: 4, offset: 4 }} md={{ size: 6, offset: 3 }} xs={12} sm={12}>
                        <Card className="mt-3">
                            <CardBody>
                                <div style={styles}>
                                    <Tabs
                                        activeTab={{
                                            id: "tab1"
                                        }}
                                    >
                                        <Tabs.Tab id="tab1" title="Log In" >
                                            <div className="mt-3" >
                                                <Form onSubmit={(e) => this.submitLoginForm(e)}>
                                                    <FormGroup>
                                                        <Label for="username" className="float-left" >ชื่อผู้ใช้งาน</Label>
                                                        <Input
                                                            value={username}
                                                            type="text"
                                                            name="username"
                                                            id="username"
                                                            placeholder="Username"
                                                            required
                                                            onChange={(e) => {
                                                                this.handleChange(e)
                                                            }}
                                                        />

                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="password" className="float-left">รหัสผ่าน</Label>
                                                        <Input
                                                            value={password}
                                                            type="password"
                                                            name="password"
                                                            id="password"
                                                            placeholder="Password"
                                                            required
                                                            onChange={(e) => {
                                                                this.handleChange(e)
                                                            }}
                                                        />
                                                    </FormGroup>
                                                    <Row>
                                                        <Link to="/" className="float-left ml-3 mb-3">ลืมรหัสผ่านใช่ไหม?</Link>
                                                    </Row>
                                                    <Button outline color="info">Login</Button>{' '}
                                                </Form>
                                            </div>
                                        </Tabs.Tab>
                                        <Tabs.Tab id="tab2" title="Sign up">
                                            <div className="mt-3">
                                                <Form onSubmit={(e) => this.submitSignUpForm(e)}>
                                                    <FormGroup>
                                                        <Label for="firstName" className="float-left">ชื่อ</Label>
                                                        <Input
                                                            value={firstName}
                                                            type="text"
                                                            name="firstName"
                                                            id="firstName"
                                                            placeholder="First Name"
                                                            required
                                                            onChange={(e) => {
                                                                this.handleChange(e)
                                                            }} />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="lastName" className="float-left">นามสกุล</Label>
                                                        <Input
                                                            value={lastName}
                                                            type="text"
                                                            name="lastName"
                                                            id="lastName"
                                                            placeholder="Last Name"
                                                            required
                                                            onChange={(e) => {
                                                                this.handleChange(e)
                                                            }} />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="username" className="float-left">ชื่อผู้ใช้งาน</Label>
                                                        <Input
                                                            value={username}
                                                            type="text"
                                                            name="username"
                                                            id="username"
                                                            placeholder="Username"
                                                            required
                                                            onChange={(e) => {
                                                                this.handleChange(e)
                                                            }} />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="password" className="float-left">รหัสผ่าน</Label>
                                                        <Input
                                                            value={password}
                                                            type="password"
                                                            name="password"
                                                            id="password"
                                                            placeholder="Password"
                                                            required
                                                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                            onChange={(e) => {
                                                                this.handleChange(e)
                                                            }} />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="regisEmail" className="float-left">อีเมล</Label>
                                                        <Input
                                                            value={email}
                                                            type="email"
                                                            name="email"
                                                            id="regisEmail"
                                                            placeholder="E-Mail"
                                                            required
                                                            onChange={(e) => {
                                                                this.handleChange(e)
                                                            }} />
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
                </Row>
            </div>
        );
    }
}