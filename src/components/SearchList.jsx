import React from "react";
import { orginalImageApi } from "../api/api";
import { largeImageApi } from "../api/api";
import { UtilityContext } from "../utilities/Provider";
import { useContext } from "react";

export default function SearchList({ items, title }) {
  const { color } = useContext(UtilityContext);

  return (
    <div className="searchlist">
      <h3 className={`page_title ${color}`}>{title}</h3>

      <div className="searchlist--lists">
        {items &&
          items.map((item) => (
            <div key={item?.id} className="searchlist--lists--movie">
              <img
                src={
                  item?.poster_path
                    ? `${orginalImageApi}${item?.poster_path}`
                    : `${largeImageApi}${item?.backdrop_path}`
                }
                className="searchlist--lists--movie--poster"
              />
              <div className="searchlist--lists--movie--info">
                <div className="searchlist--lists--movie--info--rating">
                  <i className="bx bxs-star searchlist--lists--movie--info--rating--star"></i>
                  <span className="searchlist--lists--movie--info--rating--vote">
                    {item?.vote_average}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
