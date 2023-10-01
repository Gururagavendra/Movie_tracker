import React, { useEffect, useState } from "react";
import Movie from "./Main/Movie";
import search from "../search.svg";
const Content = () => {
  const [newmovie, setMovie] = useState([]);
  const [text, setMovieText] = useState("");
  const apikey = "https://www.omdbapi.com/?apikey=9bdbab58";
  const getmovies = async (title) => {
    const response = await fetch(`${apikey}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
  };

  useEffect(() => {
    getmovies("Superman");
    Seacrhmovie();
  }, [text]);
  const Seacrhmovie = () => {
    getmovies(text);
  };

  return (
    <>
      <div className="searchbar">
        <input
          className="search"
          value={text}
          onChange={(e) => {
            setMovieText(e.target.value);
          }}
          placeholder="Enter the Movie Name..."
        />
        <img className="icon" onClick={Seacrhmovie} src={search} alt="icon" />
      </div>
      <div className="flex">
        {newmovie?.length > 0 ? (
          <div className="Movie-section">
            {newmovie.map((movie) => (
              <Movie newmovie={movie} />
            ))}
          </div>
        ) : (
          <div style={{ color: "white" }}>No</div>
        )}
      </div>
    </>
  );
};

export default Content;
