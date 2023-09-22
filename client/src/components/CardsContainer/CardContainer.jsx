import style from "./CardContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const games = useSelector(state => state.games);



  return (
    <div className={style.cardContainer}>
      {games.map((game) => {
        return (
          <Card
            key={game.id}
            name={game.name}
            img={game.image}
            rating={game.rating}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
