import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { itemsBautismo } from "../ItemListContainer/itemsBautismo";

const ItemListContainer = ({agregarAlCarrito}) => {
  const handleClick = () => {
    agregarAlCarrito()
  }
  return (
    <main className="d-flex justify-content-evenly flex-nowrap w-100">
      <div className="card-list d-flex justify-content-evenly align-items-center flex-nowrap w-100">
        {itemsBautismo.map((art) => (
            <Card style={{ width: "18rem", height: "27rem"}}>
              <Card.Img variant="top" src={art.img} style={{height: "12rem"}}/>
              <Card.Body>
                <Card.Title> <Link to={`/category/bautismos/item/${art.id}`}>{art.id} - {art.articulo}</Link>
                </Card.Title>
                <Card.Text>
                  Para: {art.para} <br />
                  Precio de: ${art.precio}
                </Card.Text>
                <Button variant="primary" onClick={handleClick}>
                  Comprar
                </Button>
              </Card.Body>
            </Card>
        ))}
      </div>
    </main>
  );
};

export { ItemListContainer };
