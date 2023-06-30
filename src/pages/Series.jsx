import React, { useState, useEffect } from "react";
import { airingTodayApi } from "../api/api";
import { onTheAirApi } from "../api/api";
import { populerTvApi } from "../api/api";
import { topTvRatedApi } from "../api/api";
import { useFetch } from "../hooks/useFetch";
import SimbleSlider2 from "../components/SimbleSlider2";
import SeriesList from "../components/SeriesList";

export default function Series() {
  const { airT } = useFetch(airingTodayApi);
  const { popTv } = useFetch(populerTvApi);
  const { onTheAire } = useFetch(onTheAirApi);
  const { tvRate } = useFetch(topTvRatedApi);

  return (
    <div className="series">
      <div className="series--header">
        {airT && <SimbleSlider2 items={airT.slice(0, 15)} />}
      </div>
      <div className="series--body">
        {popTv && <SeriesList items={popTv} title={"Populer Series"} />}
        {onTheAire && (
          <SeriesList items={onTheAire} title={"ON The Air Series"} />
        )}
        {airT && <SeriesList items={airT} title={"Airing Series Today"} />}
        {tvRate && <SeriesList items={tvRate} title={"Top Rated Series"} />}
      </div>
    </div>
  );
}
