import React from 'react';
import {
    Card, CardTitle, CardText, Col, Row, UncontrolledTooltip
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class AnswerCard extends React.Component {
    render() {
        return (
            <Row>
                <Card body id="answerCard">
                    <Row>
                        <Col md={11} xs={11} sm={11}>
                            <CardTitle style={{ fontSize: '0.9em' }}>คำตอบที่ x</CardTitle>
                        </Col>
                        <Col md={1} xs={1} sm={1}>
                            <Link to="/spam" ><a href="/" className="float-right" id="trash"> <FontAwesomeIcon icon="trash-alt" /></a>
                                <UncontrolledTooltip placement="right" target="trash">แจ้งลบ</UncontrolledTooltip>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-4 ml-2 mb-4">
                        <CardText>ตอบบบบบบบบบบบบ กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก</CardText>
                    </Row>
                    <div id="cardBottomBar">
                        <div className="child">
                            bbbbb
              </div>
                    </div>
                </Card>
            </Row>
        );
    }
}