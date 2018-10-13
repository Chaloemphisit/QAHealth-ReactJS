import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class QuestionList extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            คำถามทั้งหมด
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            ที่ถามทียังไม่ได้ตอบ
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            ที่ถามทีตอบแล้ว
            </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Card body>
                            <CardTitle>มีอาการ กกกกกกกก</CardTitle>
                            <CardText>มีรายละเอียดดดดดดดดดดดดดดดดดดดดดดดดด....</CardText>
                            <Button color="info">อ่านเพิ่มเติม</Button>
                        </Card>
                        <Card body>
                            <CardTitle>ปวดหัว ตัวร้อนนนนนนนนนนนนนนนนนนนนนน</CardTitle>
                            <CardText>มีรายละเอียดดดดดดดดดดดดดดดดดดดดดดดดด....</CardText>
                            <Button color="info">อ่านเพิ่มเติม</Button>
                        </Card>
                    </TabPane>
                    <TabPane tabId="2">

                    </TabPane>
                    <TabPane tabId="3">

                    </TabPane>
                </TabContent>
            </div>
        );
    }
}