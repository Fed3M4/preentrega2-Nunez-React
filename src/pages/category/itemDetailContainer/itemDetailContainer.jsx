import { useParams } from "react-router-dom";
import { itemsBautismo } from "../../../components/ItemListContainer/itemsBautismo";
import Button from "react-bootstrap/Button";
const ItemDetailContainer = ({agregarAlCarrito}) => {
    const {id} = useParams()
    const item = itemsBautismo.find((articulo) => articulo.id == id)
    
    return (
        <div>
            <img src={item.img} alt={item.articulo} style={{height: "18rem"}} />
            <aside>
                <div>
                    <h3>{item.id} - {item.articulo}</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam delectus dolore molestias voluptates ea cum, mollitia numquam modi! Porro quaerat laudantium sunt nobis suscipit quas inventore necessitatibus ipsam magnam consequuntur.</p>
                </div>
            <Button onClick={agregarAlCarrito}>Comprar</Button>
            </aside>
        </div>
    )
}
export {ItemDetailContainer}