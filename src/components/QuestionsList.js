import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class QuestionsList extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading ><Link to="/" className="question-header">หัวข้อคำถามทดสอบ 1</Link><Badge style={{marginLeft:'2%'}} pill> ตอบแล้ว 14</Badge></ListGroupItemHeading>
          <ListGroupItemText>
          <Link to="/" className="question-body">
            มีอาการ กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก
          </Link>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading ><Link to="/" className="question-header">หัวข้อคำถามทดสอบ 2</Link><Badge style={{marginLeft:'2%'}} pill> ตอบแล้ว 14</Badge></ListGroupItemHeading>
          <ListGroupItemText>
          <Link to="/" className="question-body">
            มีอาการ ขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขข
          </Link>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading ><Link to="/" className="question-header">หัวข้อคำถามทดสอบ 3</Link><Badge style={{marginLeft:'2%'}} pill> ตอบแล้ว 14</Badge></ListGroupItemHeading>
          <ListGroupItemText>
          <Link to="/" className="question-body">
            มีอาการ คคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคค
          </Link>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading ><Link to="/" className="question-header">หัวข้อคำถามทดสอบ 4</Link><Badge style={{marginLeft:'2%'}} pill> ตอบแล้ว 14</Badge></ListGroupItemHeading>
          <ListGroupItemText>
          <Link to="/" className="question-body">
            มีอาการ งงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงง
          </Link>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading ><Link to="/" className="question-header">หัวข้อคำถามทดสอบ 5</Link><Badge style={{marginLeft:'2%'}} pill> ตอบแล้ว 14</Badge></ListGroupItemHeading>
          <ListGroupItemText>
          <Link to="/" className="question-body">
            มีอาการ จจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจ
          </Link>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading ><Link to="/" className="question-header">หัวข้อคำถามทดสอบ 6</Link><Badge style={{marginLeft:'2%'}} pill> ตอบแล้ว 14</Badge></ListGroupItemHeading>
          <ListGroupItemText>
          <Link to="/" className="question-body">
            มีอาการ ฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉ
          </Link>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading ><Link to="/" className="question-header">หัวข้อคำถามทดสอบ 7</Link><Badge style={{marginLeft:'2%'}} pill> ตอบแล้ว 14</Badge></ListGroupItemHeading>
          <ListGroupItemText>
          <Link to="/" className="question-body">
            มีอาการ ชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชช
          </Link>
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
  }
}