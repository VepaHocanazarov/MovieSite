import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// Create context

export const GlobalContext = createContext();

const initialState = {
  watchList: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// Provider Components

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  console.log(state);

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWhatlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToWatchedList = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHED_LIST", payload: movie });
  };

  const removeMovieFromWatchedList = (id) => {
    dispatch({ type: "REMOVE_MOVİE_FROM_WATCHEDLIST", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWhatlist,
        addMovieToWatched,
        moveToWatchedList,
        removeMovieFromWatchedList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
