import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
// import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const QuestionsList = (props) => (
  <div>
    < ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading >{<Skeleton width='40%' />}</ListGroupItemHeading>
        <ListGroupItemText>
          {<Skeleton count={2} />}
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup >
    < ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading >{<Skeleton width='40%' />}</ListGroupItemHeading>
        <ListGroupItemText>
          {<Skeleton count={2} />}
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup >
    < ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading >{<Skeleton width='40%' />}</ListGroupItemHeading>
        <ListGroupItemText>
          {<Skeleton count={2} />}
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup >
    < ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading >{<Skeleton width='40%' />}</ListGroupItemHeading>
        <ListGroupItemText>
          {<Skeleton count={2} />}
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup >
    < ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading >{<Skeleton width='40%' />}</ListGroupItemHeading>
        <ListGroupItemText>
          {<Skeleton count={2} />}
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup >
  </div>
);
export default QuestionsList;