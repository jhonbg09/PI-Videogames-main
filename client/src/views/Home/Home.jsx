import style from "./Home.module.css"
import CardsContainer from "../../components/CardsContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getVideoGames } from "../../redux/actions";


const Home = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideoGames());
    },[dispatch])
    //Cuando se monta, haga el dispatch
    // useEfect()    -    useDispatch()

    return(
        <div className={style.home_container}>
            
            <CardsContainer/>
        </div>
    );
}

export default Home;