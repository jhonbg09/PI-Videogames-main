
import style from "./CardContainer.module.css"
import Card from "../Card/Card";

const CardsContainer = () => {
    const games = [
        {
            "id":1,
            "name": "Grand Theft Auto V",
            "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
            "rating": 4.47,
            "platforms": [
                {
                    "platform":{
                        "name": "PlayStation 5",
                    }
                },
                {
                    "platform":{
                        "name": "Pc",
                    }
                },
                {
                    "platform":{
                        "name": "Xbox",
                    }
                },
                
            ]
        },
    
        {
            "id":2,
            "name": "Tomb Raider (2013)",
            "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            "rating": 4.05,
            "platforms": [
                {
                    "platform":{
                        "name": "PlayStation 5",
                    }
                },
                {
                    "platform":{
                        "name": "Pc",
                    }
                },
                {
                    "platform":{
                        "name": "Xbox",
                    }
                },
                
            ]
        },
    
        {
            "id":3,
            "name": "Counter-Strike: Global Offensive",
            "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            "rating": 4.05,
            "platforms": [
                {
                    "platform":{
                        "name": "PlayStation 5",
                    }
                },
                {
                    "platform":{
                        "name": "Pc",
                    }
                },
                {
                    "platform":{
                        "name": "Xbox",
                    }
                },
                
            ]
        },
    
        {
            "id":4,
            "name": "Counter-Strike: Global Offensive",
            "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            "rating": 4.05,
            "platforms": [
                {
                    "platform":{
                        "name": "PlayStation 5",
                    }
                },
                {
                    "platform":{
                        "name": "Pc",
                    }
                },
                {
                    "platform":{
                        "name": "Xbox",
                    }
                },
                
            ]
        },
    
        {
            "id":5,
            "name": "Counter-Strike: Global Offensive",
            "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            "rating": 4.05,
            "platforms": [
                {
                    "platform":{
                        "name": "PlayStation 5",
                    }
                },
                {
                    "platform":{
                        "name": "Pc",
                    }
                },
                {
                    "platform":{
                        "name": "Xbox",
                    }
                },
                
            ]
        },
    
        {
            "id":6,
            "name": "Counter-Strike: Global Offensive",
            "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            "rating": 4.05,
            "platforms": [
                {
                    "platform":{
                        "name": "PlayStation 5",
                    }
                },
                {
                    "platform":{
                        "name": "Pc",
                    }
                },
                {
                    "platform":{
                        "name": "Xbox",
                    }
                },
                
            ]
        },
    
        {
            "id":7,
            "name": "Counter-Strike: Global Offensive",
            "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            "rating": 4.05,
            "platforms": [
                {
                    "platform":{
                        "name": "PlayStation 5",
                    }
                },
                {
                    "platform":{
                        "name": "Pc",
                    }
                },
                {
                    "platform":{
                        "name": "Xbox",
                    }
                },
                
            ]
        },
    ];
    
  return <div className={style.cardContainer}>
    {games.map(game=>{
        return <Card
            key={game.id} 
            name={game.name}
            img={game.background_image}
            rating={game.rating}
        />
    })}
  </div>;
};

export default CardsContainer;
