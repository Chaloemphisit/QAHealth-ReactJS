import React from 'react';

import {
  Card, CardHeader, CardBody, Col, Button, FormText, Form, FormGroup, Label, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ContactUs extends React.Component {
  render() {
    return (
      // Show Div Full Page => container-fluid
      <div className="container ask-card">
        <Card>
          <CardHeader tag="h3">ติดต่อสอบถาม</CardHeader>
          <CardBody>
          <Form>
          <FormGroup>
          <Label for="contactUs">เรื่อง</Label>
          <Input type="text" name="question" id="question"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">อีเมลผู้ส่ง</Label>
          <Input type="email" name="email" id="exampleEmail"/>
        </FormGroup>
        <FormGroup>
          <Label for="detail">รายละเอียด</Label>
          <Input type="textarea" name="detail" id="detail" style={{ height: 200 }}  />
        </FormGroup>
        <Button>ส่ง</Button>
      </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}