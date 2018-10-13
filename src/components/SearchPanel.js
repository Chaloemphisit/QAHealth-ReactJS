import React from 'react';
import { Jumbotron, InputGroup, InputGroupAddon, Button, Input, Container } from 'reactstrap';

const SearchPanel = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <div>
            <InputGroup>
              <Input placeholder="อาการแบบนี้ถือเป็น bipolar หรือไม่..." />
              <InputGroupAddon addonType="append">
                <Button color="info">ค้นหา</Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default SearchPanel;

