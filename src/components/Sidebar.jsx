import React, { useContext, useEffect } from "react";
import newsfeeds from "../data/newsfeeds.json";
import users from "../data/users.json";
import { UtilityContext } from "../utilities/Provider";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const { changeMode, theme, color } = useContext(UtilityContext);

  return (
    <div
      className={`sidebar ${theme}`}
      style={{
        backgroundColor: changeMode?.background,
        transition: changeMode?.transition,
      }}
    >
      <div className="sidebar--container">
        <div className="sidebar--container--logo">
          <h3
            className="sidebar--container--logo--title"
            style={{
              color: changeMode?.color1,
              transition: changeMode?.transition,
            }}
          >
            <span className={`${color}`}>SKY</span> Movies
          </h3>
        </div>
        <div className={`sidebar--container--feeds ${theme}`}>
          <span
            style={{
              color: changeMode?.gray,
              transition: changeMode?.transitions,
            }}
          >
            Options
          </span>
          <ul className="sidebar--container--feeds--ul">
            {newsfeeds.map((item, index) => (
              <li key={index} className="sidebar--container--feeds--ul--li">
                <NavLink
                  className={`${color}bg`}
                  style={{
                    color: changeMode?.gray,
                    transition: changeMode?.transitions,
                  }}
                  to={item.route}
                >
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
        <div className={`sidebar--container--users ${theme}`}>
          <span
            className="sidebar--container--users--span"
            style={{
              color: changeMode?.gray,
              transition: changeMode?.transitions,
            }}
          >
            Users
          </span>
          {users.map((item, index) => (
            <div key={index} className="sidebar--container--users--user">
              <div className="sidebar--container--users--user--info">
                <img
                  src={item.profile}
                  alt="profile photo"
                  className="sidebar--container--users--user--info--profile"
                />
                <span
                  style={{
                    color: changeMode?.gray,
                    transition: changeMode?.transitions,
                  }}
                  className="sidebar--container--users--user--info--username"
                >
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
          <i
            className="sidebar--container--logout--icon bx bxs-log-out"
            style={{
              color: changeMode?.gray,
              transition: changeMode?.transitions,
            }}
          ></i>
          <span
            className="sidebar--container--logout--span"
            style={{
              color: changeMode?.gray,
              transition: changeMode?.transitions,
            }}
          >
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}
