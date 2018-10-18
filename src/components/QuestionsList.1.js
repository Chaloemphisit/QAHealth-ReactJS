import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

class QuestionsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allQuestion: [
        {
          question_Header: 'คำถามทดสอบ 1',
          decripttion: 'มีอาการ กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก'
        },
        {
          question_Header: 'คำถามทดสอบ 2',
          decripttion: 'มีอาการ กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก'
        },
        {
          question_Header: 'คำถามทดสอบ 3',
          decripttion: 'มีอาการ กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก'
        },
        

      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.allQuestion.map(
            (allQuestion, index) =>
              < ListGroup key={index}>
                <ListGroupItem>
                  <ListGroupItemHeading ><Link to="/" className="question-header">{allQuestion.question_Header} 1</Link><Badge style={{ marginLeft: '2%' }} pill> ตอบแล้ว 14</Badge></ListGroupItemHeading>
                  <ListGroupItemText>
                    <Link to="/topic" className="question-body">
                      {allQuestion.decripttion}
                    </Link>
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup >
          )
        }

      </div>
    );
  }
}
export default QuestionsList;