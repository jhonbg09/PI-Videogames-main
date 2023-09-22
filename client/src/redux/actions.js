import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMES_ID = "GET_VIDEOGAMES_ID"

export const getVideoGames = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/games");
    const videoGames = apiData.data;
    dispatch({ type: "GET_VIDEOGAMES", payload: videoGames });
    console.log(videoGames);
  };
};

export const getVideoGameId = (id)=>{
  return async function (dispatch){
    const apiData = await axios.get(`https://api.rawg.io/api/games/${id}`);
    const getVideoGameId = apiData.data;
    dispatch({type:"GET_VIDEOGAMES_ID", payload: getVideoGameId})

  }
}