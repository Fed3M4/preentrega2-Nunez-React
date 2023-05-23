import { useParams } from "react-router-dom";
import { itemsBautismo } from "../../../components/ItemListContainer/itemsBautismo";
import Button from "react-bootstrap/Button";
const ItemDetailContainer = ({agregarAlCarrito}) => {
    const {id} = useParams()
    const item = itemsBautismo.find((articulo) => articulo.id == id)
    const handleClic = () => {
        agregarAlCarrito()
      }
        return (
            <div className="d-flex justify-content-evenly align-items-center p-3" style={{height:"90vh"}}>
                <img src={item.img} alt={item.articulo} style={{height: "18rem"}} className="p-3" />
                <aside>
                    <div>
                        <h3 className="text-center">{item.id} - {item.articulo}</h3>
                        <p>{item.descripcion}</p>
                    </div>
                <Button onClick={handleClic}>Comprar</Button>
                <span>${item.precio}</span>
                </aside>
            </div>
        )

}
export {ItemDetailContainer}