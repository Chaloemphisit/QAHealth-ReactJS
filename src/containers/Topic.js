import React from 'react';

import {
  Card, CardTitle, CardText, Col, Row, Label, UncontrolledTooltip
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Answer, AnswerCard } from '../components';

export default class Topic extends React.Component {
  render() {
    return (
      // Show Div Full Page => container-fluid
      <div className="container" id="topicContainer">
        <Row>
          <Card body id="topicCard">
            <Row>
              <Col md={10} xs={12} sm={12}>
                <CardTitle style={{ fontSize: '1.6em' }}>หัวข้อคำถาม กกกกกกกกกกกกกกกกกกกกกกกกก</CardTitle>
                <Label className=""> <FontAwesomeIcon icon="question" /> คำถามเฉาะทางแพทย์</Label>
              </Col>
              <Col md={2} xs={12} sm={12}>
                <Link to="/spam" ><a href="/" className="float-right" id="trash"> <FontAwesomeIcon icon="trash-alt" /></a>
                  <UncontrolledTooltip placement="right" target="trash">แจ้งลบ</UncontrolledTooltip>
                </Link>
              </Col>
            </Row>
            <Row className="mt-4 ml-2 mb-4">
              <CardText>มีอาการรรรรรรรรรรรรรรรรรรรรรรรร กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก</CardText>
            </Row>
            <div id="cardBottomBar">
              <div className="child">
                bbbbb
              </div>
            </div>
          </Card>
        </Row>

        <Row>
          <Answer />
        </Row>

        <div class="background"><span><FontAwesomeIcon icon="comments" size="lg" />  33 คำตอบ</span></div>
        <div>
          <AnswerCard />
        </div>
        <div>
          <AnswerCard />
        </div>
        <div>
          <AnswerCard />
        </div>
        <div>
          <AnswerCard />
        </div>
        <div>
          <AnswerCard />
        </div>
        <div>
          <AnswerCard />
        </div>
      </div>
    );
  }
}