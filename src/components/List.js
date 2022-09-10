import React from 'react';
import Card from 'react-bootstrap/Card';

function List(props) {

    const { userId, id, title, body } = props.item;
    console.log(props.item);

  return (
    <Card  style={{width: '70vw', margin: '20px'}}>
      <Card.Header as="p">Post ID : {id}</Card.Header>
      <Card.Body>
      <Card.Text>
          user id : {userId}
        </Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default List;