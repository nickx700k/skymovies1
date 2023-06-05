import React from "react";
import { searchApi } from "../api/api";
import SearchList from "../components/SearchList";
import { UtilityContext } from "../utilities/Provider";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function SearchPage() {
  const { search } = useContext(UtilityContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(search, "search");
    try {
      const searchAct = async () => {
        await fetch(`${searchApi}=${search}`)
          .then((response) => response.json())
          .then((res) => setData(res.results));
      };
      searchAct();
    } catch (err) {
      console.log(err);
    }
  }, [search]);

  return (
    <div>
      <SearchList title={`Searching for ${search}`} items={data.slice(0, 10)} />
      {/* {data && data.map((item) => <span>{item?.title}</span>)} */}
    </div>
  );
}
