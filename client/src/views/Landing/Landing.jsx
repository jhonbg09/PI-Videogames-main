import { Link } from "react-router-dom/cjs/react-router-dom";
import style from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.landing_container}>
        <h1 className={style.landing_title}>Gamer's QuestLand</h1>
        <p className={style.landing_p}>
          "Vive cada nivel, siente cada desafío.
        </p>
        <p className={style.landing_p}>
          Bienvenido a la nueva era del gaming."
        </p>
        <div>
        <Link className={style.boton} to="/videogames">¡Juguemos!</Link>
        </div>
        
      </div>
      
    </div>
  );
};
export default Landing;
