import { Bautismos } from "../../pages/category/bautismos/Bautismos";
import { articulosBautismo } from "../ItemListContainer/itemsBautismo";
const ItemListContainer =({sumCarr})=> {
    return (
        <main className="d-flex justify-content-center">
            <div className="card-list">
                {articulosBautismo.map((art) => (
                        <Bautismos artID = {art.id}  artName = {art.articulo} unEvento = {art.tipo} persona = {art.para} precio = {art.precio} agregarAlCarrito={sumCarr} imagen = {art.img}/>
                ))
                }
            </div>
        </main>
    )
}
export {ItemListContainer};