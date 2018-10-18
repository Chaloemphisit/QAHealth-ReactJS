import React from 'react';
import { Tabs } from "@yazanaabed/react-tabs";
import QuestionsList from './QuestionsList'


class QuestionTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Question: [
                {
                    question_Header: 'คำถามทดสอบ 1',
                    decripttion: 'มีอาการ กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก',
                    comment:'1'
                },
                {
                    question_Header: 'คำถามทดสอบ 2',
                    decripttion: 'มีอาการ กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก',
                    comment:'0'
                },
                {
                    question_Header: 'คำถามทดสอบ 3',
                    decripttion: 'มีอาการ กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก',
                    comment:'5'
                }
            ],
            answerQuestion: [],
            noAnswerQuestion: []
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Tabs
                    activeTab={{
                        id: "tab1"
                    }}
                >
                    <Tabs.Tab id="tab1" title="คำถามทั้งหมด" >
                        <div className="mt-3" >
                            <QuestionsList />
                        </div>
                    </Tabs.Tab>
                    <Tabs.Tab id="tab2" title="คำถามที่ตอบแล้ว">
                        <div className="mt-3">

                        </div>
                    </Tabs.Tab>
                    <Tabs.Tab id="tab3" title="คำถามที่ยังไม่ได้ตอบ">
                        <div className="mt-3">

                        </div>
                    </Tabs.Tab>
                </Tabs>
            </div>
        );
    }
}
export default QuestionTabs;