import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';

export default class QuestionsList extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem tag="a" href="#">
          <ListGroupItemHeading href="#">หัวข้อคำถามทดสอบ 1<Badge pill>ตอบแล้ว 14</Badge></ListGroupItemHeading>

          <ListGroupItemText href="#">
            มีอาการ กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem tag="a" href="#">
          <ListGroupItemHeading>หัวข้อคำถามทดสอบ 2</ListGroupItemHeading>
          <ListGroupItemText>
            มีอาการ ขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขข
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem tag="a" href="#">
          <ListGroupItemHeading>หัวข้อคำถามทดสอบ </ListGroupItemHeading>
          <ListGroupItemText>
            มีอาการ คคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคค
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem tag="a" href="#">
          <ListGroupItemHeading>หัวข้อคำถามทดสอบ </ListGroupItemHeading>
          <ListGroupItemText>
            มีอาการ คคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคค
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem tag="a" href="#">
          <ListGroupItemHeading>หัวข้อคำถามทดสอบ </ListGroupItemHeading>
          <ListGroupItemText>
            มีอาการ คคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคค
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem tag="a" href="#">
          <ListGroupItemHeading>หัวข้อคำถามทดสอบ </ListGroupItemHeading>
          <ListGroupItemText>
            มีอาการ คคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคค
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem tag="a" href="#">
          <ListGroupItemHeading>หัวข้อคำถามทดสอบ </ListGroupItemHeading>
          <ListGroupItemText>
            มีอาการ คคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคค
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
  }
}