import React from 'react';

import {
  Card, CardTitle, CardText, Col, Row, Label, UncontrolledTooltip, CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Answer, AnswerCard } from '../components';

export default class Topic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: {
        id: '',
        question_Header: '',
        decripttion: '',
        comment_Count: '',
        objecttive: '',
        question_Type: '',
        gender: '',
        weight: '',
        height: '',
        birthDate: '',
        disease: '',
        postDate: '',
        owner: '',
        comments: []
      },
      isLoading: false,
      error: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://my-json-server.typicode.com/Chaloemphisit/HealthQA-API-Test/topic/" + this.props.match.params.id)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ topic: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return (
        <div>
          Loading
        </div>
      );
    }

    const { id, question_Header, description, comment_Count, objecttive, question_Type, gender, weight,
      height, birthDate, disease, postDate, owner } = this.state.topic;
    console.log(this.state.topic)
    return (
      <div className="container" id="topicContainer">
        <Row>
          <Card body id="topicCard">
            <Row>
              <Col md={10} xs={10} sm={10}>
                <CardTitle style={{ fontSize: '1.6em' }}>{question_Header}</CardTitle>
                <Label className=""> <FontAwesomeIcon icon="question" />{question_Type}</Label>
              </Col>
              <Col md={2} xs={2} sm={2}>
                <Link to={"/spam/"+id} ><a href="/" className="float-right" id="trash"> <FontAwesomeIcon icon="trash-alt" /></a>
                  <UncontrolledTooltip placement="right" target="trash">แจ้งลบ</UncontrolledTooltip>
                </Link>
              </Col>
            </Row>
            <Row className="mt-4 ml-2 mb-4 mr-2">
              <CardText>{description}</CardText>
            </Row>
            <div className="mt-1 ml-1 mb-4 mr-1">
              <Card>
                <CardBody>
                  <Row className="rowMargin">
                    <Col lg={2} md={3} sm={12} xs={12}>
                      <div className="topic-text-header">วัตถุประสงค์</div>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                      <div className="topic-text-body">{objecttive}</div>
                    </Col>
                  </Row>
                  <Row className="rowMargin">
                    <Col lg={2} md={3} sm={12} xs={12}>
                      <div className="topic-text-header">เพศ</div>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                      <div className="topic-text-body">{gender}</div>
                    </Col>
                  </Row>
                  <Row className="rowMargin">
                    <Col lg={2} md={3} sm={12} xs={12}>
                      <div className="topic-text-header">น้ำหนัก</div>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                      <div className="topic-text-body">{weight}</div>
                    </Col>
                  </Row>
                  <Row className="rowMargin">
                    <Col lg={2} md={3} sm={12} xs={12}>
                      <div className="topic-text-header">ส่วนสูง</div>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                      <div className="topic-text-body">{height}</div>
                    </Col>
                  </Row>
                  <Row className="rowMargin">
                    <Col lg={2} md={3} sm={12} xs={12}>
                      <div className="topic-text-header">วันเกิด</div>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                      <div className="topic-text-body">{birthDate}</div>
                    </Col>
                  </Row>
                  <Row className="rowMargin">
                    <Col lg={2} md={3} sm={12} xs={12}>
                      <div className="topic-text-header">โรคประจำตัว</div>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                      <div className="topic-text-body">{disease}</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
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

        <div class="background"><span><FontAwesomeIcon icon="comments" size="lg" />  {comment_Count} คำตอบ</span></div>
        <div>
          <AnswerCard comments={this.state.topic.comments} />
        </div>
      </div>
    );
  }
}