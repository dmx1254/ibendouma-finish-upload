import React, { useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { addNewLanguage } from "../features/languageSliceSelected";

import { addNewCurrencyExchange } from "../features/currencyExchange";

import { removeUser } from "../features/userSlice";

import { VscAccount } from "react-icons/vsc";

import { Badge, IconButton } from "@mui/material";

import { ShoppingCart } from "@mui/icons-material";

import { Box } from "@mui/material";
import service24h from "../assets/call/24h.png";
import skype from "../assets/call/skype.png";
import discord from "../assets/call/discord.png";
import fr from "../assets/lang/fr.webp";
import en from "../assets/lang/en.webp";
import spain from "../assets/lang/spain.png";

import logo from "../assets/ibendouma-logo.png";

const Header = () => {
  let quantity = useSelector((state) => state.cart.quantity);
  let { user } = useSelector((state) => state.user);
  const [language, setLanguage] = useState("francais");
  const [selectCurrency, setSelectCurrency] = useState("euro");
  const [toggleUserProfile, setToggleUserProfile] = useState(false);

  const dispatch = useDispatch();

  const handleSelectLanguage = (e) => {
    dispatch(addNewLanguage(e.target.value));
    setLanguage(e.target.value);
  };

  const handleSelectCurrency = (e) => {
    dispatch(addNewCurrencyExchange(e.target.value));
    setSelectCurrency(e.target.value);
  };

  const handleToggleUserProfile = () => {
    setToggleUserProfile((prevToggleProfile) => !prevToggleProfile);
  };
  const handleLogout = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_CLIENT_URL}/users/logout`,
      withCredentials: true,
    })
      .then(() => {
        dispatch(removeUser());
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  let { language: lang } = useSelector((state) => state.language);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#000000",
        height: "80px",
        width: "100%",
        color: "white",
      }}
      className="header"
    >
      <Box
        sx={{ display: "flex", gap: 1, alignItems: "center", marginLeft: -1 }}
      >
        <div style={{ marginBottom: "2px" }} className="logo-ibendouma">
          <Link to="/">
            <img src={logo} className="image-logo" alt="ibendouma" />
          </Link>
        </div>
        <div
          style={{
            marginLeft: "-25px",
          }}
        >
          <select
            name="currency"
            id="currency"
            style={{
              border: "none",
              background: "#000000",
              color: "white",
              margin: "2px 0px",
              padding: "8px 2px",
              fontWeight: 600,
              borderRadius: "5px",
              outline: "none",
              cursor: "pointer",
            }}
            value={selectCurrency}
            onChange={handleSelectCurrency}
            className="currency-exchange"
          >
            <option value="euro">EUR</option>
            <option value="gbp">GBP</option>
            <option value="dollar">USD</option>
            {/* <option value="usdt">USDT</option> */}
            <option value="cad">CAD</option>
            <option value="mad">MAD</option>
            <option value="chf">CHF</option>
            <option value="rub">RUB</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "-3px",
          }}
          className="lang-changes"
        >
          {language === "anglais" && (
            <span>
              <img src={en} alt="anglais" />
            </span>
          )}

          {language === "francais" && (
            <span>
              <img src={fr} alt="francais" />
            </span>
          )}

          {language === "espagnol" && (
            <span>
              <img
                src={spain}
                alt="espagnol"
                style={{
                  marginTop: "5px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </span>
          )}

          <select
            name="currency"
            id="currency"
            style={{
              border: "none",
              background: "#000000",
              color: "white",
              margin: "2px 0px",
              padding: "8px 4px",
              fontWeight: 600,
              borderRadius: "5px",
              outline: "none",
              cursor: "pointer",
              fontSize: "10px",
            }}
            value={language}
            onChange={handleSelectLanguage}
          >
            <option value="anglais">
              {lang === "francais" && "Anglais"}
              {lang === "anglais" && "English"}
              {lang === "espagnol" && "Inglés"}
            </option>
            <option value="francais">
              {lang === "francais" && "Francais"}
              {lang === "anglais" && "French"}
              {lang === "espagnol" && "Francés"}
            </option>

            <option value="espagnol">
              {lang === "francais" && "Espagnol"}
              {lang === "anglais" && "Spanish"}
              {lang === "espagnol" && "Español"}
            </option>
          </select>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: { sm: 2, xs: 1 },
          marginRight: { sm: 2, xs: 1 },
          alignItems: "center",
        }}
      >
        {/* <div style={{ cursor: "pointer", marginBottom: "5px" }}>
          <Link to="/faqs" style={{ color: "white", fontSize: "14px" }}>
            FAQs
          </Link>
        </div> */}
        {user?.user && (
          <div
            style={{ cursor: "pointer", marginLeft: "5px" }}
            className="logo-icon-displays"
          >
            <a href="javascript:void(Tawk_API.toggle())">
              <img
                src={service24h}
                alt="ibendouma help-service"
                style={{
                  width: "17px",
                  height: "17px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="img-h"
              />
            </a>
          </div>
        )}
        {user?.user && (
          <div
            style={{ cursor: "pointer" }}
            className="logo-icon-displays  skype-display"
          >
            <a href="skype:ilyass bendouma?chat" target="__blank">
              <img
                src={skype}
                alt="ibendouma skype"
                style={{
                  width: "17px",
                  height: "17px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </a>
          </div>
        )}
        {user?.user && (
          <div style={{ cursor: "pointer" }} className="logo-icon-displays">
            <a href="https://discord.com/channels/@me" target="__blank">
              <img
                src={discord}
                alt="ibendouma discord"
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </a>
          </div>
        )}
        {user?.user ? (
          <div className="idCorrect">
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
            >
              <Badge badgeContent={quantity} color="error">
                <ShoppingCart
                  style={{
                    color: "white",
                    marginTop: "-3px",
                    fontSize: "24px",
                    // marginLeft: "10px"
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
                    <span onClick={handleLogout}>Logout</span>
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
                    <span onClick={handleLogout}>Cerrar sesión</span>
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
      </Box>
    </div>
  );
};

export default Header;
