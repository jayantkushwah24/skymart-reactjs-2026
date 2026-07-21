import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const data = JSON.parse(localStorage.getItem("sm_session"));
  const navigate = useNavigate();

  useEffect(() => {
    if (data === null) {
      navigate("/signin");
      alert("Please signin");
    }
  }, []);

  function handleLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;
    localStorage.removeItem("sm_session");
    navigate("/signin");
  }

  return (
    <div className="flex justify-between">
      <div onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={25}
        >
          <path d="M13 10H20L11 23V14H4L13 1V10Z"></path>
        </svg>
        <h1>SkyMart</h1>
      </div>
      <div className="flex gap-5">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/products"}>Shop</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <div className="flex gap-5">
        <div id="user-name">{data?.name}</div>
        <div id="cart">
          <NavLink to={"/cart"}>🛒</NavLink>
        </div>
        <div id="logout">
          <button onClick={() => handleLogout()}>➜]</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
