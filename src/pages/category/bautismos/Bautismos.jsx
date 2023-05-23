import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";

const Bautismos = ({
  artID,
  artName,
  unEvento,
  persona,
  precio,
  agregarAlCarrito,
  imagen,
}) => {
  const { id } = useParams;
  const [card, configCard] = useState(null);

  const mostrarCard = (cardID) => {
    configCard(cardID);
  };

  return (
    <div key={card.id} onClick={()=> mostrarCard(card.id)}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title as={Link} to={"/category/bautismos/detail"}>
            {artID} - {artName}
          </Card.Title>
          <Card.Text>
            <p>Tipo: {unEvento}</p>
            <p>Para: {persona} </p>
            <p>Precio de: ${precio}</p>
          </Card.Text>
          <Button variant="primary" onClick={agregarAlCarrito}>
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export { Bautismos };
