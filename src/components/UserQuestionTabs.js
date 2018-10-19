import React from 'react';
import { Tabs } from "@yazanaabed/react-tabs";
import QuestionsList from './QuestionsList'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom';


class UserQuestionTabs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: {
                allQuestion: [],
                answerQuestion: [],
            },
            isLoading: false,
            error: null
        }
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
                        <Tabs.Tab id="tab1" ><div className="mt-3" > <QuestionsList /></div> </Tabs.Tab>
                        <Tabs.Tab id="tab2" ><div className="mt-3"> <QuestionsList /></div> </Tabs.Tab>
                        <Tabs.Tab id="tab3" > <div className="mt-3"><QuestionsList /></div></Tabs.Tab>
                    </Tabs>
                </div>
            );
        }
        return (
            <div>
                <Tabs
                    activeTab={{
                        id: "tab1"
                    }}
                >
                    <React.Fragment>
                        <Tabs.Tab id="tab1" title="คำถามที่ฉันตั้ง" >
                            <div className="mt-3" >
                                {
                                    this.state.questions.allQuestion.map(
                                        (question, index) =>
                                            < ListGroup key={index}>
                                                <ListGroupItem>
                                                    <ListGroupItemHeading ><Link to={question.Link} className="question-header">{question.question_Header}</Link></ListGroupItemHeading>
                                                    <ListGroupItemText>
                                                        <Link to={question.Link} className="question-body">
                                                            {question.decripttion}
                                                        </Link>
                                                    </ListGroupItemText>
                                                </ListGroupItem>
                                            </ListGroup >
                                    )
                                }
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab id="tab2" title="คำถามที่ฉันตอบ">
                            <div className="mt-3">
                                {
                                    this.state.questions.answerQuestion.map(
                                        (question, index) =>
                                            < ListGroup key={index}>
                                                <ListGroupItem>
                                                    <ListGroupItemHeading ><Link to="/" className="question-header">{question.question_Header}</Link></ListGroupItemHeading>
                                                    <ListGroupItemText>
                                                        <Link to="/topic" className="question-body">
                                                            {question.decripttion}
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
export default UserQuestionTabs;