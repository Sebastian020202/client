import { 
  GET_USERS,GET_BY_NAME,GET_BY_ID,GET_GENRE ,GET_GENRES,POST_GAME,FILTER_GAMES_GENRES,FILTERGENRE,FILTERATING,GET_COPY
 } from "../Actions";

let initialState = { allUsers: [], userCopy: [], posts: [], userId: [], genres: [], games:[], getCopy:[] };



function rootReducer(state = initialState, action) {

  switch (action.type) {

    case GET_COPY:
      return {
        ...state,
        getCopy: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
        userCopy: action.payload
      };
    case GET_BY_NAME:
      return {
        ...state,
        allUsers: action.payload,
        userCopy: action.payload
      };
    case GET_BY_ID:
      return {
        ...state,
        allUsers: action.payload,
      };
    case GET_GENRE:
      return {
        ...state,
        genres: action.payload
      };
      case GET_GENRES:
        return { ...state, genres: action.payload }

      case POST_GAME:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };

          case FILTERGENRE:
            const filterGenres = state.userCopy.filter((game) =>
              game.genres.includes(action.payload)
            );
            return {
              ...state,
              allUsers: filterGenres,
            };

                case FILTERATING:
                  const { allUsers, getCopy } = state;
                  const filteredUsers = action.payload === "1-5"
                    ? [...getCopy].sort((a, b) => b.rating - a.rating) // Descending order
                    : [...getCopy].sort((a, b) => a.rating - b.rating); // Ascending order
            
                  return {
                    ...state,
                    allUsers: filteredUsers,
                  };
                default:
                  return state;
                
  }

  
}

export default rootReducer;
