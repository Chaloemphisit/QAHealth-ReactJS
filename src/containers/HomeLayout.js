import React from 'react';
import {
  Container, Row, Col, Card,CardBody
} from 'reactstrap';
import { SearchPanel, QuestionTabs } from '../components'

export default class HomeLayout extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12"><SearchPanel /></Col>
        </Row>
        <Row>
          {/* <Col xs="12" md="4">

            <Card>
              <CardBody>

              </CardBody>
            </Card>

          </Col> */}
          <Col xs="12" md="12">

            <Card>
              <CardBody>
                  <QuestionTabs />
              </CardBody>
            </Card>

          </Col>
        </Row>
      </Container>
    );
  }
}