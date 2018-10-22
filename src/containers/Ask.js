import React from 'react';

import {
  Card, CardHeader, CardBody, Col, Row, Button
} from 'reactstrap';
// import { Link } from 'react-router-dom';
import { AvForm, AvField, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';

export default class Ask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      detail: '',
      objective: '',
      questionType: '',
      gender: '',
      weight: '',
      height: '',
      birthDate: '',
      congenitalDisease: ''
    }
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // console.log(value)
    const { name } = target;
    await this.setState({
      [name]: value,
    });
  }

  submitQuestion() {
    
  }


  render() {
    const { question, detail, objective, questionType, gender, weight, height, birthDate, congenitalDisease } = this.state

    return (
      // Show Div Full Page => container-fluid
      <div className="container" id="card-margin-top-bottom">
        <Card outline color="info">
          <CardHeader style={{ backgroundColor: '#17A2B8', color: '#FFF' }} tag="h3">รายละเอียด</CardHeader>
          <CardBody>
            <AvForm onSubmit={this.submitQuestion}>
              <AvField
                label="คำถาม"
                type="text"
                name="question"
                id="question"
                placeholder="ระบุคำถาม"
                value={question}
                onChange={(e) => {
                  this.handleChange(e)
                }}
                validate={{
                  required: { value: true, errorMessage: 'กรุณาระบุคำถาม' }
                }} />
              <AvField
                label="รายละเอียดคำถาม"
                type="textarea"
                name="detail"
                id="detail"
                value={detail}
                onChange={(e) => {
                  this.handleChange(e)
                }}
                validate={{
                  required: { value: true, errorMessage: 'กรุณาระบุรายละเอียด' }
                }} />

              <AvField
                label="วัตถุประสงค์"
                ttype="text"
                name="objective"
                id="objective"
                placeholder="ระบุวัตถุประสงค์ที่ถาม"
                value={objective}
                onChange={(e) => {
                  this.handleChange(e)
                }}
                validate={{
                  required: { value: true, errorMessage: 'กรุณาระบุรายละเอียด' }
                }} />

              <AvRadioGroup
                inline
                name="questionType"
                label="ประเภทคำถาม"
                value={questionType}
                onInput={(e) => { this.handleChange(e) }}
                validate={{
                  required: { value: true, errorMessage: 'กรุณาเลือกประเภทของคำถาม' }
                }}>
                <AvRadio customInput label="คำถามเฉพาะทางแพทย์" value="0" />
                <AvRadio customInput label="คำถามเฉพาะทางเภสัชกร" value="1" />
              </AvRadioGroup>
              <Row form>
                <legend>ข้อมูลผู้ป่วย</legend>
                <Col md={2}>
                  <AvField type="select" id="gender" name="gender" label="เพศ" helpMessage="กรุณาเลือกเพศของท่าน!">
                    value={gender}
                    onChange={(e) => {
                      this.handleChange(e)
                    }}
                    <option>ชาย</option>
                    <option>หญิง</option>
                  </AvField>
                </Col>
                <Col md={3}>
                  <AvField
                    label="น้ำหนัก (กก.)"
                    type="number"
                    name="weight"
                    id="weight"
                    value={weight}
                    onChange={(e) => {
                      this.handleChange(e)
                    }}
                    validate={{
                      required: { value: true, errorMessage: 'กรุณาระบุน้ำหนัก' }
                    }} />

                </Col>
                <Col md={3}>
                  <AvField
                    label="ส่วนสูง (ซม.)"
                    type="number"
                    name="height"
                    id="height"
                    value={height}
                    onChange={(e) => {
                      this.handleChange(e)
                    }}
                    validate={{
                      required: { value: true, errorMessage: 'กรุณาระบุส่วนสูง' }
                    }} />

                </Col>
                <Col md={4}>
                  <AvField name="birthDate" id="birthDate" label="วันเกิด" type="date"
                    value={birthDate}
                    onInput={(e) => {
                      this.handleChange(e)
                    }}
                    validate={{
                      required: { value: true, errorMessage: 'กรุณาระบุวันเกิด' }
                    }} />
                </Col>
              </Row>
              <AvField
                label="โรคประจำตัว"
                type="text"
                name="congenitalDisease"
                id="congenitalDisease"
                placeholder="ระบุโรคประจำตัว"
                value={congenitalDisease}
                onChange={(e) => {
                  this.handleChange(e)
                }}
              />
              <Button size="lg" color="danger" className="float-right">ตั้งคำถาม</Button>{' '}
            </AvForm>
          </CardBody>
        </Card>
      </div>
    );
  }
}