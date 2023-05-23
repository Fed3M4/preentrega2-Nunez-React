import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import { itemsBautismo } from "../ItemListContainer/itemsBautismo";
const ItemListContainer = ({ sumCarr }) => {
  const { id } = useParams;
  const [cardElegida, configCard] = useState(null);

  const mostrarCard = (cardID) => {
    configCard(cardID);
  };

  return (
    <main className="d-flex justify-content-evenly flex-nowrap w-100">
      <div className="card-list d-flex justify-content-evenly align-items-center flex-nowrap w-100">
        {itemsBautismo.map((art) => (
          <div onClick={()=> mostrarCard(art.id)}>
            <Card style={{ width: "18rem", height: "27rem"}}>
              <Card.Img variant="top" src={art.img} style={{height: "12rem"}}/>
              <Card.Body>
                <Card.Title> <Link to={`/category/bautismos/item/${art.id}`}>{art.id} - {art.articulo}</Link>
                </Card.Title>
                <Card.Text>
                  <p>Para: {art.para} </p>
                  <p>Precio de: ${art.precio}</p>
                </Card.Text>
                <Button variant="primary" onClick={art.sumCarr}>
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
};

export { ItemListContainer };
