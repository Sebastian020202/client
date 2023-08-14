import axios from "axios"

export const GET_USERS = "GET_USERS"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_BY_ID = "GET_BY_ID"
export const GET_GENRE = "GET_GENRE"
export const POST_VIDEOGAME = "POST_VIDEOGAME"
export const GET_GENRES = "GET_GENRES"
export const POST_GAME = "POST_GAME"
export const GET_PLATFORMS = 'GET_PLATFORMS'
export const FILTER_GAMES_GENRES = 'FILTER_GAMES_GENRES'
export const FILTERGENRE = 'FILTERGENRE'
export const FILTERATING =  'FILTERATING'
export const GET_COPY = 'GET_COPY'


export function getUsers(){
    return async function(dispatch){
        const responce = await axios("http://localhost:3001/Videogames");
        return dispatch ({
            type: "GET_USERS",
            payload:responce.data
        })
    };
}
export function getCopy(){
    return async function(dispatch){
        const responce = await axios("http://localhost:3001/Videogames");
        return dispatch ({
            type: "GET_COPY",
            payload:responce.data
        })
    };
}

export function getByName(name){
    return async function(dispatch){
        const responce = await axios(`http://localhost:3001/Videogames/name?name=${name}`);
        return dispatch ({
            type: "GET_BY_NAME",
            payload: responce.data
        })
    };
}

export function getById(id){
    return async function(dispatch){
        const responce = await axios(`http://localhost:3001/Videogames/${id}`);
        return dispatch ({
            type: "GET_BY_ID",
            payload: responce.data
        })
    };
}

export function getGenre(){
    return async function(dispatch){
        const responce = await axios("http://localhost:3001/genre");
        console.log(responce);
        return dispatch ({
            type: "GET_GENRE",
            payload:responce.data
        })
    };
}
export const getGenres = () => {
    return async (dispatch) => {
      let response = await axios('http://localhost:3001/genre')
      return dispatch({ type: GET_GENRES, payload: response.data })
    }
}

export const postGames = (payload) => {
    return async function (dispatch) {
      console.log(payload);
      const postGame = await axios.post(
        `http://localhost:3001/videogames/`,
        payload
      );
      const res = await postGame.data;
  
      dispatch({ type: POST_GAME, payload: res });
    };
  };

export const getPlatforms = () => {
    return async (dispatch) => {
      let response = await axios('http://localhost:3001/platforms')
      return dispatch({ type: GET_PLATFORMS, payload: response.data })
    }
}

export const filterGameGenres = () => {
    return async (dispatch) => {
      // Obtener todos los usuarios con el género seleccionado
      const response = await axios.get(`http://localhost:3001/genre`);
      dispatch({ type: GET_USERS, payload: response.data });
    };
  };

  export const filterByGenre = (genres) => {
    return { type: FILTERGENRE, payload: genres };
  };

  
  export const filterRating = (rating) => {
    return { type: FILTERATING, payload: rating  };
  };
