import React, { useState, useEffect } from "react";
import { populerApi } from "../api/api";
import { topRatedApi } from "../api/api";
import { nowPlayingApi } from "../api/api";
import { upcommingApi } from "../api/api";
import { useFetch } from "../hooks/useFetch";
import SimpleSlider from "../components/SimbleSlider";
import MovieList from "../components/MovieList";

export default function Home() {
  const { populer } = useFetch(populerApi);
  const { top } = useFetch(topRatedApi);
  const { now } = useFetch(nowPlayingApi);
  const { up } = useFetch(upcommingApi);

  return (
    <div className="home">
      <div className="home--header">
        {populer && <SimpleSlider items={populer.slice(0, 4)} />}
      </div>
      <div className="home--body">
        {populer && <MovieList title={"Populer"} items={populer} />}
        {top && <MovieList title={"Top Rated"} items={top} />}
        {now && <MovieList title={"Now Playing"} items={now} />}
        {up && <MovieList title={"Up Comming"} items={up} />}
      </div>
    </div>
  );
}
