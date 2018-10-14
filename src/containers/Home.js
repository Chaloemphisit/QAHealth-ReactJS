import React from 'react';

import {
  Row, Col, Card, CardBody, CardHeader, ListGroup, ListGroupItem
} from 'reactstrap';
import { SearchPanel, QuestionTabs } from '../components'

export default class Home extends React.Component {
  render() {
    return (
      // Show Div Full Page => container-fluid
      <div className="container"> 
        <Row>
          <Col xs="12"><SearchPanel /></Col>
        </Row>
        <Row>
          <Col xs="0" md="4">
            <Card>
              <CardHeader tag="h3">ใส่บางอย่างตรงนี้</CardHeader>
              <CardBody>
                <ListGroup flush>
                  <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
                  <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                  <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                  <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="8">
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