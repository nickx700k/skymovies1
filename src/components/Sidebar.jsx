import React from "react";
import newsfeeds from "../data/newsfeeds.json";
import users from "../data/users.json";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--container">
        <div className="sidebar--container--logo">
          <h3 className="sidebar--container--logo--title">
            <span>SKY</span> Movies
          </h3>
        </div>
        <div className="sidebar--container--feeds">
          <span>News Feed</span>
          <ul className="sidebar--container--feeds--ul">
            {newsfeeds.map((item, index) => (
              <li className="sidebar--container--feeds--ul--li">
                <NavLink to={item.route}>
                  <h2 className="sidebar--container--feeds--ul--li--title">
                    {item.title}
                  </h2>
                  <i
                    className={`sidebar--container--feeds--ul--li--icon ${item.Icon}`}
                  ></i>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar--container--users">
          <span className="sidebar--container--users--span">Users</span>
          {users.map((item) => (
            <div className="sidebar--container--users--user">
              <div className="sidebar--container--users--user--info">
                <img
                  src={item.profile}
                  alt="profile photo"
                  className="sidebar--container--users--user--info--profile"
                />
                <span className="sidebar--container--users--user--info--username">
                  {item?.username}
                </span>
              </div>
              {item?.state === "active" ? (
                <i
                  className="bx bxs-circle sidebar--container--users--user--icon"
                  style={{ color: "var(--green-color)" }}
                ></i>
              ) : (
                <i
                  className="bx bxs-circle sidebar--container--users--user--icon"
                  style={{ color: "var(--red-color)" }}
                ></i>
              )}
            </div>
          ))}
        </div>
        <div className="sidebar--container--logout">
          <i className="sidebar--container--logout--icon bx bxs-log-out"></i>
          <span className="sidebar--container--logout--span">Logout</span>
        </div>
      </div>
    </div>
  );
}
