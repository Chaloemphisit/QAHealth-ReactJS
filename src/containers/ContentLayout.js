import React from 'react';
import {
  Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import { SearchPanel, QuestionList } from '../components'

export default class ContentLayout extends React.Component {
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
                  <QuestionList />
              </CardBody>
            </Card>

          </Col>
        </Row>
      </Container>
    );
  }
}