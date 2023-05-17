import Imagenbb from "../../assets/img/67645.jpg";

const Inicio =({greeting})=> {
    return (
        <main className="d-flex align-items-center flex-column">
            <h2> {greeting}</h2>
            <img src={Imagenbb} alt="imagen" className="cartelera w-50"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam veniam nesciunt, quasi voluptate quae explicabo, itaque cum fugiat nostrum ad. Quaerat ab neque consectetur? Dignissimos, totam! Dicta, vero voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil dolorum facilis rerum cupiditate tempora inventore laudantium aut, qui quisquam suscipit. Ipsa dolore alias quia eaque beatae similique nulla praesentium?</p>
        </main>

    )

}

export {Inicio}