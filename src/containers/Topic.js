import React from 'react';

import {
  Card, CardTitle, CardText, Col, Row, Label
} from 'reactstrap';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
              </Col>
              <Col md={2} xs={12} sm={12}>
                <Label className=""> <FontAwesomeIcon icon="question"  /> คำถามเฉาะทางแพทย์</Label>
              </Col>
            </Row>
            <Row className="mt-4 ml-2 mb-4">
              <CardText>มีอาการรรรรรรรรรรรรรรรรรรรรรรรร กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก</CardText>
            </Row>
            <div id="cardBottomBar">
              b
          </div>
          </Card>
        </Row>
        <div class="background"><span><FontAwesomeIcon icon="comments" size="lg" />  33 ความคิดเห็น</span></div>
      </div>
    );
  }
}