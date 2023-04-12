function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [...state.watched, action.payload],
      };
    case "MOVE_TO_WATCHED_LIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchList: [...state.watchList, action.payload],
      };
      case "REMOVE_MOVİE_FROM_WATCHEDLIST":
        return{
          ...state,
          watched: state.watched.filter((movie)=> movie.id !== action.payload)
        }
    default:
      return state;
  }
}

export default AppReducer;
