import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import WishList from "../pages/WishList";
import CommingSoon from "../pages/Comingsoon";
import SearchPage from "../pages/SearchPage";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/commingsoon" element={<CommingSoon />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}
