import React from 'react';

import {
  Card, CardHeader, CardBody, Col, Row, CustomInput, Form, FormGroup, Label, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Ask extends React.Component {
  render() {
    return (
      // Show Div Full Page => container-fluid
      <div className="container ask-card">
        <Card>
          <CardHeader tag="h3">รายละเอียด</CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="question">คำถาม</Label>
                <Input type="text" name="question" id="question" placeholder="ระบุคำถาม" />
              </FormGroup>
              <FormGroup>
                <Label for="detail">รายละเอียดคำถาม</Label>
                <Input type="textarea" name="detail" id="detail" />
              </FormGroup>
              <FormGroup>
                <Label for="objective">วัตถุประสงค์</Label>
                <Input type="text" name="objective" id="question" placeholder="ระบุวัตถุประสงค์ที่ถาม" />
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>ประเภทคำถาม</legend>
                <Row form>
                  <Col md={6} xs={12}>
                    <FormGroup check>
                      <Label check><Input type="radio" name="questionType" />{' '}คำถามเฉพาะทางแพทย์</Label>
                    </FormGroup>
                  </Col>
                  <Col md={6} xs={12}>
                    <FormGroup check>
                      <Label check><Input type="radio" name="questionType" />{' '} คำถามเฉพาะทางเภสัชกร</Label>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>
              <Row form>
                <legend>ข้อมูลผู้ป่วย</legend>
                <Col md={2}>
                  <FormGroup>
                    <Label for="gender">เพศ</Label>
                    <CustomInput type="select" id="gender" name="customSelect">
                      <option value="">เลือก</option>
                      <option>ชาย</option>
                      <option>หญิง</option>
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleState">น้ำหนัก (กก.)</Label>
                    <Input type="text" name="state" id="weight" />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="height">ส่วนสูง (ซม.)</Label>
                    <Input type="text" name="height" id="height" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="birthDate">วันเกิด</Label>
                    <Input type="date" name="birthDate" id="birthDate" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="congenitalDisease">โรคประจำตัว</Label>
                <Input type="text" name="congenitalDisease" id="congenitalDisease" placeholder="ระบุโรคประจำตัว" />
              </FormGroup>
              <Link to="/" className="back404page"><div className="button3">ตั้งคำถาม</div></Link>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}