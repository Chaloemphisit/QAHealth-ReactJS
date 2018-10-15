import React from 'react';
import { Tabs } from "@yazanaabed/react-tabs";
import QuestionsList from './QuestionsList'

const styles = {
    fontFamily: "Prompt",
    // textAlign: "center"
};

export default class QuestionTabs extends React.Component {

    render() {
        return (
            <div style={styles}>
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