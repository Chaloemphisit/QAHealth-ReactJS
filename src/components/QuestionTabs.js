import React from 'react';
import { Tabs } from "@yazanaabed/react-tabs";
import QuestionsList from './QuestionsList'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';


class QuestionTabs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: {
                allQuestion: [],
                answerQuestion: [],
                noAnswerQuestion: []
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
        fetch("https://my-json-server.typicode.com/Chaloemphisit/HealthQA-API-Test/question")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ questions: data, isLoading: false }))
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
                        id:'tab1'
                    }}
                    
                >
                    <React.Fragment>
                        <Tabs.Tab id="tab1" title="คำถามทั้งหมด" >
                            <div className="mt-3" >
                                {
                                    this.state.questions.allQuestion.map(
                                        (question, index) =>
                                            < ListGroup key={index} >
                                                <ListGroupItem>
                                                    <ListGroupItemHeading ><Link to={"/topic/" + question.id} className="question-header">{question.question_Header}</Link><Badge style={{ marginLeft: '2%' }} pill> ตอบแล้ว {question.comment}</Badge></ListGroupItemHeading>
                                                    <ListGroupItemText>
                                                        <Link to={"topic/" + question.id} className="question-body">
                                                            {question.description}
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
                                    this.state.questions.answerQuestion.map(
                                        (question, index) =>
                                            < ListGroup key={index}>
                                                <ListGroupItem>
                                                    <ListGroupItemHeading ><Link to={"/topic/" + question.id} className="question-header">{question.question_Header}</Link><Badge style={{ marginLeft: '2%' }} pill> ตอบแล้ว {question.comment}</Badge></ListGroupItemHeading>
                                                    <ListGroupItemText>
                                                        <Link to={"/topic/" + question.id} className="question-body">
                                                            {question.description}
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
                                    this.state.questions.noAnswerQuestion.map(
                                        (question, index) =>
                                            < ListGroup key={index}>
                                                <ListGroupItem>
                                                    <ListGroupItemHeading ><Link to={"/topic/" + question.id} className="question-header">{question.question_Header}</Link><Badge style={{ marginLeft: '2%' }} pill> ตอบแล้ว {question.comment}</Badge></ListGroupItemHeading>
                                                    <ListGroupItemText>
                                                        <Link to={"/topic/" + question.id} className="question-body">
                                                            {question.description}
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