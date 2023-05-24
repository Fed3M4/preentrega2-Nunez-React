import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { itemsBautismo } from "../ItemListContainer/itemsBautismo";
import React, { useState, useEffect } from "react";

const ItemListContainer = ({ agregarAlCarrito }) => {
  const handleClick = () => {
    agregarAlCarrito();
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="d-flex justify-content-evenly flex-nowrap w-100">
      <div className="card-list d-flex justify-content-evenly align-items-center flex-nowrap w-100">
        {itemsBautismo.map((art) => (
          <div key={art.id}>
            {loading ? (
              <p> Cargando...</p>
            ) : (
              <Card style={{ width: "18rem", height: "27rem" }}>
                <Card.Img
                  variant="top"
                  src={art.img}
                  style={{ height: "12rem" }}
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <Link to={`/category/bautismos/item/${art.id}`} style={{textDecoration:"none"}}>
                      {art.id} - {art.articulo}
                    </Link>
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
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export { ItemListContainer };
