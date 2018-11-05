import React from 'react';

import {
  Card, CardTitle, Col, Row, Label, UncontrolledTooltip, CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Answer, AnswerCard } from '../components';
import Skeleton from 'react-loading-skeleton';

export default class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: {
        topicId: '',
        topicName: '',
        topicText: '',
        height: '',
        wieght: '',
        ageY: '',
        ageM: '',
        gender: '',
        disease: '',
        questionPurpose: '',
        questionType: '',
        username: '',
        answerCount: '',
        createDate: '',
        comments: []
      },
      isLoading: false,
      error: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://health-qa-api.herokuapp.com/api/topic/" + this.props.match.params.id)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(topic => this.setState({ topic, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    const { topicId, topicName, topicText, height, weight, ageY, ageM, gender,
      disease, questionPurpose, questionType, username, answerCount, createDate } = this.state.topic;
    return (
      <div className="container" id="topicContainer">
        <Row>
          <Card body id="topicCard">
            <Row>
              <Col md={10} xs={10} sm={10}>
                <CardTitle style={{ fontSize: '1.6em' }}>{isLoading ? <Skeleton width="40%" /> : topicName}</CardTitle>
                {isLoading ? <Skeleton width="30%" /> : (
                  <Label className="ml-2"> <FontAwesomeIcon icon="question" />{" " + questionType}</Label>
                )}

              </Col>
              <Col md={2} xs={2} sm={2}>
                <Link to={"/spam/" + topicId} ><div href="/" className="float-right" id="trash"> <FontAwesomeIcon icon="trash-alt" /></div>
                  <UncontrolledTooltip placement="right" target="trash">แจ้งลบ</UncontrolledTooltip>
                </Link>
              </Col>
            </Row>
            <div className="mt-1 ml-1 mb-4 mr-1">
              {isLoading ? <Skeleton count={3} /> : topicText}
              <Card>
                <CardBody>
                  <Row className="rowMargin">
                    <Col lg={2} md={3} sm={12} xs={12}>
                      <div className="topic-text-header">วัตถุประสงค์</div>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                      <div className="topic-text-body">{isLoading ? <Skeleton width="40%" /> : questionPurpose}</div>
                    </Col>
                  </Row>
                  <Row className="rowMargin">
                    <Col lg={2} md={3} sm={12} xs={12}>
                      <div className="topic-text-header">เพศ</div>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                      <div className="topic-text-body">{isLoading ? <Skeleton width="40%" /> : gender}</div>
                    </Col>
                  </Row>
                  <Row className="rowMargin">
                    <Col lg={2} md={3} sm={12} xs={12}>
                      <div className="topic-text-header">น้ำหนัก</div>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                      <div className="topic-text-body">{isLoading ? <Skeleton width="40%" /> : weight}</div>
                    </Col>
                  </Row>
                  <Row className="rowMargin">
                    <Col lg={2} md={3} sm={12} xs={12}>
                      <div className="topic-text-header">ส่วนสูง</div>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                      <div className="topic-text-body">{isLoading ? <Skeleton width="40%" /> : height}</div>
                    </Col>
                  </Row>
                  <Row className="rowMargin">
                    <Col lg={2} md={3} sm={12} xs={12}>
                      <div className="topic-text-header">วันเกิด</div>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                      <div className="topic-text-body">{isLoading ? <Skeleton width="40%" /> : ageY + " ปี " + ageM + " เดือน"}</div>
                    </Col>
                  </Row>
                  <Row className="rowMargin">
                    <Col lg={2} md={3} sm={12} xs={12}>
                      <div className="topic-text-header">โรคประจำตัว</div>
                    </Col>
                    <Col lg={10} md={9} sm={12} xs={12}>
                      <div className="topic-text-body">{isLoading ? <Skeleton width="40%" /> : disease}</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
            <div id="cardBottomBar">
              <div className="child">
                {isLoading ? <Skeleton width="40%" /> : username}
                {isLoading ? <Skeleton width="40%" /> : createDate}
              </div>
            </div>
          </Card>
        </Row>

        <Row>
          <Answer />
        </Row>

        <div className="background"><span><FontAwesomeIcon icon="comments" size="lg" />  {answerCount} คำตอบ</span></div>
        <div>
          <AnswerCard comments={this.state.topic.comments} />
        </div>
      </div>
    );
  }
}