import React from 'react';
import { Tabs } from "@yazanaabed/react-tabs";
import QuestionsList from './QuestionsList'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


class QuestionTabs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            topics: {
                allTopics: [],
                answeredTopics: [],
                noAnswerTopic: []
            },
            isLoading: false,
            error: null
        }
    }

    handleSelect(e) {
        console.log('Selected tab: ' + e.Tabs.activeTab);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        axios.all([
            axios.get('https://health-qa-api.herokuapp.com/api/topic/all'),
            axios.get('https://health-qa-api.herokuapp.com/api/topic/ans'),
            axios.get('https://health-qa-api.herokuapp.com/api/topic/noAns')
        ])
            .then(axios.spread((allTopicsRes, ansTopicsRes, noAnsTopicRes) => {
                this.setState({
                    topics: {
                        allTopics: allTopicsRes.data,
                        answeredTopics: ansTopicsRes.data,
                        noAnswerTopic: noAnsTopicRes.data
                    },
                    isLoading: false
                })
            }))
            .catch(error => {
                this.setState({ error, isLoading: false })

                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('Something went wrong...');
                }
            });



    }

    render() {
        const { isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return (
                <div>
                    <Tabs activeTab={{ id: "tab1" }}>
                        <Tabs.Tab id="tab1" title="คำถามทั้งหมด" ><div className="mt-3" > <QuestionsList /></div> </Tabs.Tab>
                        <Tabs.Tab id="tab2" title="คำถามที่ตอบแล้ว"><div className="mt-3"> <QuestionsList /></div> </Tabs.Tab>
                        <Tabs.Tab id="tab3" title="คำถามที่ยังไม่ได้ตอบ"> <div className="mt-3"><QuestionsList /></div></Tabs.Tab>
                    </Tabs>
                </div>
            );
        }
        return (

            <div>
                <Tabs
                    activeTab={{
                        id: 'tab1'
                    }}

                >
                    <React.Fragment>
                        <Tabs.Tab id="tab1" title="คำถามทั้งหมด" >
                            <div className="mt-3" >
                                {
                                    this.state.topics.allTopics.map(
                                        (question, index) =>
                                            < ListGroup key={index} >
                                                <ListGroupItem>
                                                    <ListGroupItemHeading ><Link to={"/topic/" + question.head_topic_id} className="question-header">{question.topic_name}</Link><Badge style={{ marginLeft: '2%' }} pill> ตอบแล้ว {question.answer}</Badge></ListGroupItemHeading>
                                                    <Label style={{ color: '#6C757D' }}> <FontAwesomeIcon icon="question" size="sm" />{"" + question.question_type}</Label>
                                                    <ListGroupItemText>
                                                        <Link to={"topic/" + question.head_topic_id} className="question-body">
                                                            {question.topic_text}
                                                        </Link>
                                                    </ListGroupItemText>
                                                </ListGroupItem>
                                            </ListGroup >
                                    )
                                }
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab id="tab2" title="คำถามที่ตอบแล้ว">
                            <div className="mt-3">
                                {
                                    this.state.topics.answeredTopics.map(
                                        (question, index) =>
                                            < ListGroup key={index}>
                                                <ListGroupItem>
                                                    <ListGroupItemHeading ><Link to={"/topic/" + question.head_topic_id} className="question-header">{question.topic_name}</Link><Badge style={{ marginLeft: '2%' }} pill> ตอบแล้ว {question.answer}</Badge></ListGroupItemHeading>
                                                    <Label style={{ color: '#6C757D' }}> <FontAwesomeIcon icon="question" size="sm" />{"" + question.question_type}</Label>
                                                    <ListGroupItemText>
                                                        <Link to={"/topic/" + question.head_topic_id} className="question-body">
                                                            {question.topic_text}
                                                        </Link>
                                                    </ListGroupItemText>
                                                </ListGroupItem>
                                            </ListGroup >
                                    )
                                }
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab id="tab3" title="คำถามที่ยังไม่ได้ตอบ">
                            <div className="mt-3">
                                {
                                    this.state.topics.noAnswerTopic.map(
                                        (question, index) =>
                                            < ListGroup key={index}>
                                                <ListGroupItem>
                                                    <ListGroupItemHeading ><Link to={"/topic/" + question.head_topic_id} className="question-header">{question.topic_name}</Link><Badge style={{ marginLeft: '2%' }} pill> ตอบแล้ว {question.answer}</Badge></ListGroupItemHeading>
                                                    <Label style={{ color: '#6C757D' }}> <FontAwesomeIcon icon="question" size="sm" />{"" + question.question_type}</Label>
                                                    <ListGroupItemText>
                                                        <Link to={"/topic/" + question.head_topic_id} className="question-body">
                                                            {question.topic_text}
                                                        </Link>
                                                    </ListGroupItemText>
                                                </ListGroupItem>
                                            </ListGroup >
                                    )
                                }
                            </div>
                        </Tabs.Tab>
                    </React.Fragment>
                </Tabs>
            </div>
        );
    }
}
export default QuestionTabs;