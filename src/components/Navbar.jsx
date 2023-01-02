import React, { useState, useEffect } from "react";
import { VscAccount } from "react-icons/vsc";
import logo from "../assets/ibendouma-logo.png";
import { Link } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { FaGamepad } from "react-icons/fa";

import { removeUser } from "../features/userSlice";

import { useSelector, useDispatch } from "react-redux";

import SearchComponent from "./SearchComponent";

import axios from "axios";

const Navbar = () => {
  const [toggleUserProfile, setToggleUserProfile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  let { language } = useSelector((state) => state.language);
  let { user } = useSelector((state) => state.user);
  let quantity = useSelector((state) => state.cart.quantity);

  const handleToggleUserProfile = () => {
    setToggleUserProfile((prevToggleProfile) => !prevToggleProfile);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    // axios({
    //   method: "get",
    //   url: `${process.env.REACT_APP_CLIENT_URL}/users/logout`,
    //   withCredentials: true,
    // })
    //   .then(() => {
    //     dispatch(removeUser());
    //     window.location = "/";
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <div className="navbar">
      <div className="menu-logo">
        <span className="image-logo-wrapper">
          <Link to="/">
            <img src={logo} className="image-logo" alt="ibendouma" />
          </Link>
        </span>
        {/* <Link to="/">
          <span className="ibendouma">ibendouma</span>
        </Link> */}
      </div>
      {user?.user && (
        <div className="searchWraper">
          <span className="searchWrapper-icon">
            <FaGamepad color="#e7c80b" />
          </span>

          {language === "francais" && (
            <input
              type="text"
              className="searchWraper-search"
              placeholder="Rechercher..."
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
          {language === "anglais" && (
            <input
              type="text"
              className="searchWraper-search"
              placeholder="Search..."
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
          {language === "espagnol" && (
            <input
              type="text"
              className="searchWraper-search"
              placeholder="Búsqueda..."
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
        </div>
      )}
      {user?.user ? (
        <div className="idCorrect">
          <IconButton component={Link} to="/cart" aria-label="Show cart items">
            <Badge badgeContent={quantity} color="error">
              <ShoppingCart
                style={{
                  color: "white",
                  marginTop: "2px",
                  fontSize: "28px",
                }}
              />
            </Badge>
          </IconButton>
          {language === "anglais" ? (
            <span className="iconUser">
              {user.person.profil ? (
                <img
                  src={user.person.profil}
                  alt={user.person.lastname}
                  className="img-user-person"
                  onClick={handleToggleUserProfile}
                />
              ) : (
                <VscAccount onClick={handleToggleUserProfile} />
              )}
              {toggleUserProfile && (
                <div className="revealAccount">
                  <Link to="/profil" className="link-profil">
                    <span>Profile</span>
                  </Link>
                  <span className="sepa"></span>
                  <span>Logout</span>
                </div>
              )}
            </span>
          ) : language === "espagnol" ? (
            <span className="iconUser">
              {user.person.profil ? (
                <img
                  src={user.person.profil}
                  alt={user.person.lastname}
                  className="img-user-person"
                  onClick={handleToggleUserProfile}
                />
              ) : (
                <VscAccount onClick={handleToggleUserProfile} />
              )}
              {toggleUserProfile && (
                <div className="revealAccount">
                  <Link to="/profil" className="link-profil">
                    <span>Perfil</span>
                  </Link>
                  <span className="sepa"></span>
                  <span>Cerrar sesión</span>
                </div>
              )}
            </span>
          ) : (
            <span className="iconUser">
              {user.person.profil ? (
                <img
                  src={user.person.profil}
                  alt={user.person.lastname}
                  className="img-user-person"
                  onClick={handleToggleUserProfile}
                />
              ) : (
                <VscAccount onClick={handleToggleUserProfile} />
              )}

              {toggleUserProfile && (
                <div className="revealAccount">
                  <Link to="/profil" className="link-profil">
                    <span>Profile</span>
                  </Link>
                  <span className="sepa"></span>
                  <span onClick={handleLogout}>Deconnexion</span>
                </div>
              )}
            </span>
          )}
        </div>
      ) : (
        <div className="acountUser">
          <Link to="/register">
            <button className="btnToLog">
              {language === "francais" && "S'inscrire"}
              {language === "anglais" && "Sign up"}
              {language === "espagnol" && "Inscribirse"}
            </button>
          </Link>
          <Link to="/login">
            <button className="btnToLog">
              {language === "francais" && "S'identifier"}
              {language === "anglais" && "Sign in"}
              {language === "espagnol" && "registrarse"}
            </button>
          </Link>
        </div>
      )}
      {searchTerm && (
        <div className="search-all-term">
          <SearchComponent searchTerm={searchTerm} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
