import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bautismos = ({artID, artName, unEvento, persona, precio, agregarAlCarrito, imagen}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{artID} - {artName}</Card.Title>
        <Card.Text>
          <p>Tipo: {unEvento}</p>
          <p>Para: {persona} </p>
          <p>Precio de: ${precio}</p>
        </Card.Text>
        <Button variant="primary" onClick={agregarAlCarrito}>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export {Bautismos};