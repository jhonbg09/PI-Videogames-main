import style from "./Card.module.css"

const Card = (Props) =>{
    return(
        <div className={style.card}>
            <h2 className={style.card_title}>{Props.name}</h2>
            <img className={style.card_img} src={Props.img} alt="img"/>
            <p className={style.card_p}>Rating: {Props.rating}</p>

        </div>
    )
}

export default Card;