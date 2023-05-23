import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image from "../../assets/img/pngwing.com (1).png";

const CartWidget =({countCar2}) => {
  const styles = {
    with: 30,
    height: 30

  }
  return (
    <>
        <Container className='d-flex justify-content-end'>
        
          <Navbar.Brand href="#home">
          <img src={image} alt="carrito" style={styles} />
<span>{countCar2}</span>
          </Navbar.Brand>
        </Container>
    </>
  );
}

export {CartWidget};