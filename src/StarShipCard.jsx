import {Card} from 'react-bootstrap'

export default function StarshipCard(props) {
  return (

          <Card>
            <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
            <Card.Text>made by {props.data.manufacturer}</Card.Text>
            </Card.Body>
          </Card>

  );
}
