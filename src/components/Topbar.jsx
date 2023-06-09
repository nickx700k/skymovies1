import React, { useContext, useState } from "react";
import { UtilityContext } from "../utilities/Provider";
import notification from "../data/notification.json";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Topbar() {
  const {
    theme,
    handleThemeColor,
    handleThemeMode,
    handleSearch,
    search,
    changeMode,
    color,
  } = useContext(UtilityContext);

  const navigate = useNavigate();

  const colors = [
    {
      id: "1",
      name: "blue",
      color: "var(--blue-color)",
      darkcolor: "var(--dark-blue-color)",
    },
    {
      id: "2",
      name: "red",
      color: "var(--red-color)",
      darkcolor: "var(--dark-red-color)",
    },
    {
      id: "3",
      name: "yellow",
      color: "var(--yellow-color)",
      darkcolor: "var(--dark-yellow-color)",
    },
    {
      id: "4",
      name: "orange",
      color: "var(--orange-color)",
      darkcolor: "var(--dark-orange-color)",
    },
    {
      id: "5",
      name: "pink",
      color: "var(--pink-color)",
      darkcolor: "var(--dark-pink-color)",
    },
    {
      id: "6",
      name: "green",
      color: "var(--green-color)",
      darkcolor: "var(--dark-green-color)",
    },
    {
      id: "7",
      name: "purple",
      color: "var(--purple-color)",
      darkcolor: "var(--dark-purple-color)",
    },
  ];

  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive((preve) => !preve);
  };

  const location = useLocation().pathname;

  useEffect(() => {
    if (search && location.includes("/tvseries")) {
      navigate(`/searchfortv`);
    }
    if (search && location === "/") {
      navigate(`/searchformovie`);
    }
    if (!search) {
      navigate("/");
    }
  }, [search]);

  return (
    <div className="topbar">
      <div className="topbar--container">
        <div className="topbar--container--search">
          <input
            type="text"
            className="topbar--container--search--input"
            placeholder="Search everthing"
            onChange={handleSearch}
            value={search}
            style={{
              backgroundColor: changeMode?.background2,
              transition: changeMode?.transition,
              border: "none",
              outline: "none",
            }}
          />
          <i
            className="bx bx-search topbar--container--search--icon"
            style={{
              color: changeMode?.color2,
              transition: changeMode?.transition,
            }}
          ></i>
        </div>
        <div className="topbar--container--dropdown">
          <i
            className="bx bx-palette topbar--container--dropdown--icon topbar--container--dropdown--palette"
            style={{
              color: changeMode?.color2,
              transition: changeMode?.transition,
            }}
          >
            <div
              className="topbar--container--dropdown--theme"
              style={{
                backgroundColor: changeMode?.background2,
                transition: changeMode?.transition,
              }}
            >
              <div className="topbar--container--dropdown--theme--modes">
                <span
                  className="topbar--container--dropdown--theme--modes--span"
                  style={{
                    color:
                      theme === "dark"
                        ? "var(--white2-color)"
                        : "var(--black2-color)",
                  }}
                >
                  Theme Mode
                </span>
                <div className="topbar--container--dropdown--theme--modes--mode">
                  <span className="topbar--container--dropdown--theme--modes--mode--switch">
                    <input
                      type="checkbox"
                      id="switch-round"
                      className="topbar--container--dropdown--theme--modes--mode--switch--item"
                      onClick={() =>
                        handleThemeMode(theme === "light" ? "dark" : "light")
                      }
                    />
                    <label htmlFor="switch-round"></label>
                  </span>
                </div>
              </div>
              <div className="topbar--container--dropdown--theme--colors">
                <span
                  style={{
                    color:
                      theme === "dark"
                        ? "var(--white2-color)"
                        : "var(--black2-color)",
                  }}
                >
                  Theme Color
                </span>
                <div className="topbar--container--dropdown--theme--colors--color">
                  {colors.map((color) => (
                    <input
                      type="button"
                      key={color.id}
                      style={{ backgroundColor: color.color }}
                      onClick={() => handleThemeColor(color.name)}
                      className="topbar--container--dropdown--theme--colors--color--item"
                    />
                  ))}
                </div>
              </div>
            </div>
          </i>
          <i
            className="bx bx-message-alt-detail topbar--container--dropdown--icon topbar--container--dropdown--detail"
            style={{
              color: changeMode?.color2,
              transition: changeMode?.transition,
            }}
          >
            <div
              className="topbar--container--dropdown--notification"
              style={{
                backgroundColor: changeMode?.background2,
                transition: changeMode?.transition,
              }}
            >
              {notification.map((item) => (
                <div
                  key={item.id}
                  className="topbar--container--dropdown--notification--item"
                >
                  <div className="topbar--container--dropdown--notification--item--info">
                    <img
                      src={item.profile}
                      alt="no pic"
                      className="topbar--container--dropdown--notification--item--info--profile"
                    />
                    <span className="topbar--container--dropdown--notification--item--info--span">
                      {item.username}
                    </span>
                  </div>
                  <p className="topbar--container--dropdown--notification--item--p">
                    {item.pharag.substring(0, 40)}
                  </p>
                </div>
              ))}
            </div>
          </i>
          <i
            className="bx bx-bell topbar--container--dropdown--icon topbar--container--dropdown--bell"
            style={{
              color: changeMode?.color2,
              transition: changeMode?.transition,
            }}
          >
            <div
              className="topbar--container--dropdown--bellnote"
              style={{
                backgroundColor: changeMode?.background2,
                transition: changeMode?.transition,
              }}
            >
              {notification.map((item) => (
                <div
                  key={item.id}
                  className="topbar--container--dropdown--notification--item"
                >
                  <div className="topbar--container--dropdown--notification--item--info">
                    <img
                      src={item.profile}
                      alt="no pic"
                      className="topbar--container--dropdown--notification--item--info--profile"
                    />
                    <span className="topbar--container--dropdown--notification--item--info--span">
                      {item.username}
                    </span>
                  </div>
                  <p className="topbar--container--dropdown--notification--item--p">
                    {item.pharag.substring(0, 40)}
                  </p>
                </div>
              ))}
            </div>
          </i>
          <img
            className="topbar--container--dropdown--userPhoto"
            style={{
              border: `2px solid var(--${color}-color)`,
              transition: "all .3s",
            }}
            src="assets/images/nasir.jpg"
            alt="user photo"
            onClick={handleActive}
          />
        </div>
        <div
          className={`topbar--container--userprofile ${active ? "active" : ""}`}
          style={{
            backgroundColor: changeMode?.background2,
            transition: changeMode?.transition,
          }}
        >
          <div className={`topbar--container--userprofile--up ${color}bg`}>
            <h5 className={`topbar--container--userprofile--up--h5 ${color}`}>
              Admiral0796
            </h5>
          </div>
          <div className="topbar--container--userprofile--middle">
            <ul className="topbar--container--userprofile--middle--options">
              <li
                className={`topbar--container--userprofile--middle--options--item ${color}bg`}
              >
                <span
                  className={`topbar--container--userprofile--middle--options--item--span ${color}hover`}
                  style={{
                    color: changeMode?.color2,
                    transition: changeMode?.transition,
                  }}
                >
                  Edit Profile
                </span>
              </li>
              <li
                className={`topbar--container--userprofile--middle--options--item ${color}bg`}
              >
                <span
                  className={`topbar--container--userprofile--middle--options--item--span ${color}hover`}
                  style={{
                    color: changeMode?.color2,
                    transition: changeMode?.transition,
                  }}
                >
                  Edit Settings
                </span>
              </li>
              <li
                className={`topbar--container--userprofile--middle--options--item ${color}bg`}
              >
                <span
                  className={`topbar--container--userprofile--middle--options--item--span ${color}hover`}
                  style={{
                    color: changeMode?.color2,
                    transition: changeMode?.transition,
                  }}
                >
                  Dashboard
                </span>
              </li>
              <li
                className={`topbar--container--userprofile--middle--options--item ${color}bg`}
              >
                <span
                  className={`topbar--container--userprofile--middle--options--item--span ${color}hover`}
                  style={{
                    color: changeMode?.color2,
                    transition: changeMode?.transition,
                  }}
                >
                  Wish List
                </span>
              </li>
              <li
                className={`topbar--container--userprofile--middle--options--item ${color}bg`}
              >
                <span
                  className={`topbar--container--userprofile--middle--options--item--span ${color}hover`}
                  style={{
                    color: changeMode?.color2,
                    transition: changeMode?.transition,
                  }}
                >
                  Upgrade Profile
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
