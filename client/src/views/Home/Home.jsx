import style from "./Home.module.css"
import CardsContainer from "../../components/CardsContainer/CardContainer";
const Home = () =>{
    return(
        <div className={style.home_container}>
            
            <CardsContainer/>
        </div>
    );
}

export default Home;