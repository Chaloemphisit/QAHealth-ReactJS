import React from 'react';

import {
  Row, Col, Card, CardBody
} from 'reactstrap';
import { SearchPanel, QuestionTabs } from '../components'

export default class Home extends React.Component {
  render() {
    return (
      // Show Div Full Page => container-fluid
      <div className="container mb-5"> 
        <Row>
          <Col xs="12"><SearchPanel /></Col>
        </Row>
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardBody>
                <QuestionTabs />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}