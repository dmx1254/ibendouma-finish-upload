import React from "react";
import { Link } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";

import { useSelector } from "react-redux";

import partnership from "../assets/partnership.jpg";

const Partenership = () => {
  const { language } = useSelector((state) => state.language);
  return language === "anglais" ? (
    <div className="partner">
      <div className="header-partner">
        <h1>Want to be a partner</h1>
        <p>
          Since we have just officially launched our site, if you have a means
          of advertising that can increase our visibility (ex: Youtube channel –
          Twitch account…), please contact us. In counterpart you will receive
          either cash or a advertising exchange.
        </p>
      </div>
      <Link to="/">
        <span className="come-back-hom">
          <IoMdArrowRoundBack />
        </span>
      </Link>
      <div className="main-partner">
        <img src={partnership} alt="partner" />
      </div>
      <div
        className="footer-partner"
        style={{
          color: "gray",
          fontSize: "14px",
          width: "400px",
        }}
      >
        <p>
          By using this site, you agree{" "}
          <Link
            to="/term-and-conditions"
            style={{
              color: "#1652f0",
            }}
          >
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy-policy"
            style={{
              color: "#1652f0",
            }}
          >
            Privacy Policy{" "}
          </Link>
          copyright &copy; 2020-
          {new Date().getFullYear()}, iBendouma.All rights are reserved to
          iBendouma Limited.
          <br></br>
          Adress: 71-75 Shelton Street, Covent<br></br>
          Garden, Londres, WC2H9JQ
        </p>
      </div>
    </div>
  ) : language === "espagnol" ? (
    <div className="partner">
      <div className="header-partner">
        <h1>Quiero ser socio</h1>
        <p>
          Dado que acabamos de lanzar oficialmente nuestro sitio, si tiene los
          medios de publicidad que puede aumentar nuestra visibilidad (ej: canal
          de Youtube – cuenta de Twitch...), contáctanos. En contrapartida
          recibirás ya sea en efectivo o un intercambio de publicidad.
        </p>
      </div>
      <Link to="/">
        <span className="come-back-hom">
          <IoMdArrowRoundBack />
        </span>
      </Link>
      <div className="main-partner">
        <img src={partnership} alt="partner" />
      </div>
      <div
        className="footer-partner"
        style={{
          color: "gray",
          fontSize: "14px",
          width: "400px",
        }}
      >
        <p>
          Al usar este sitio, usted acepta{" "}
          <Link
            to="/term-and-conditions"
            style={{
              color: "#1652f0",
            }}
          >
            Términos y condiciones
          </Link>{" "}
          y{" "}
          <Link
            to="/privacy-policy"
            style={{
              color: "#1652f0",
            }}
          >
            Política de privacidad{" "}
          </Link>
          Derechos de autor &copy; 2020-
          {new Date().getFullYear()}, iBendouma.Todos los derechos están
          reservados a iBendouma Limited.
          <br></br>
          Dirección: 71-75 Shelton Street, Covent<br></br>
          Garden, Londres, WC2H9JQ
        </p>
      </div>
    </div>
  ) : (
    <div className="partner">
      <div className="header-partner">
        <h1>Envie d'être partenaire</h1>
        <p>
          Etant donné que nous venons de lancer officiellement notre site, si
          vous avez un moyen de publicité qui puisse augmenter notre visibilité
          (ex: Chaine Youtube – Compte Twitch…), veuillez nous contacter. En
          contrepartie vous recevrez soit de l’argent en espèces, soit un
          échange de publicité.
        </p>
      </div>
      <Link to="/">
        <span className="come-back-hom">
          <IoMdArrowRoundBack />
        </span>
      </Link>
      <div className="main-partner">
        <img src={partnership} alt="partner" />
      </div>
      <div
        className="footer-partner"
        style={{
          color: "gray",
          fontSize: "14px",
          width: "400px",
        }}
      >
        <p>
          En utilisant ce site, vous acceptez{" "}
          <Link
            to="/term-and-conditions"
            style={{
              color: "#1652f0",
            }}
          >
            les Termes & Conditions
          </Link>{" "}
          et{" "}
          <Link
            to="/privacy-policy"
            style={{
              color: "#1652f0",
            }}
          >
            la Politique de confidentialité{" "}
          </Link>
          copyright &copy; 2020-
          {new Date().getFullYear()}, iBendouma.Tous les droits sont réservés à
          iBendouma Limited.
          <br></br>
          Adresse: 71-75 Shelton Street, Covent<br></br>
          Garden, Londres, WC2H9JQ
        </p>
      </div>
    </div>
  );
};

export default Partenership;
