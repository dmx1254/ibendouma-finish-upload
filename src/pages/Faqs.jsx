import React from "react";
import { FaqsSection } from "../components";

import { useSelector } from "react-redux";

const Faqs = () => {
  const { language } = useSelector((state) => state.language);

  return (
    <div>
      <div
        style={{
          width: "100%",
          background: "rgba(0, 0, 0, 0.9)",
          textAlign: "center",
          height: "200px",
          color: "white",
          marginBottom: "60px",
        }}
      >
        {language === "anglais" ? (
          <h1
            style={{
              fontFamily: "Roboto, sans-serif",
              paddingTop: "30px",
              letterSpacing: "4px",
            }}
          >
            Need help ?
          </h1>
        ) : language === "espagnol" ? (
          <h1
            style={{
              fontFamily: "Roboto, sans-serif",
              paddingTop: "30px",
              letterSpacing: "4px",
            }}
          >
            Necesitas ayuda ?
          </h1>
        ) : (
          <h1
            style={{
              fontFamily: "Roboto, sans-serif",
              paddingTop: "30px",
              letterSpacing: "4px",
            }}
          >
            Besoin d'aide ?
          </h1>
        )}

        <div
          style={{
            margin: "20px auto",
            width: "350px",
            userSelect: "none",
          }}
        >
          <input
            type="search"
            name="search"
            id="sdearch"
            placeholder={
              language === "anglais"
                ? "Your questions answered !"
                : "Vos questions repondus !"
            }
            style={{
              fontSize: "20px",
              padding: "10px 30px",
              outline: "none",
              borderRadius: "3px",
              width: "100%",
              textAlign: "center",
            }}
          />
        </div>
      </div>
      <div>
        {language === "anglais" ? (
          <h1
            style={{
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Frequently Asked Questions!
          </h1>
        ) : language === "espagnol" ? (
          <h1
            style={{
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Preguntas frecuentes!
          </h1>
        ) : (
          <h1
            style={{
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Questions fréquentes posées !
          </h1>
        )}

        <FaqsSection />
      </div>
    </div>
  );
};

export default Faqs;
