import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import cryptoapi from "../assets/payment-checkout/cryptoapi.webp";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { CopyToClipboard } from "react-copy-to-clipboard";

import { AiFillCopy } from "react-icons/ai";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

import { FaServer, FaCheckCircle } from "react-icons/fa";

import { FcApproval } from "react-icons/fc";

const PaymentUsdt = () => {
  const [dataUsdt, setDataUsdt] = useState(null);
  const [dataQrcode, setDataQrcode] = useState(null);
  const [copied, setCopied] = useState(false);
  let [compt, setCompt] = useState(5);
  let [minutes, setMinutes] = useState(compt);
  const [valueCurrencyConvert, setValueCurrencyConvert] = useState(null);
  const [loadingQr, setLoadingQr] = useState(true);
  const [valueCurrencyToggle, setValueCurrencyToggle] = useState(true);
  const [dataUsdtToggle, setDataUsdtToggle] = useState(true);
  //   console.log(valueCurrencyConvert);

  console.log(dataUsdt);

  const { currency } = useSelector((state) => state.currency);
  const { language } = useSelector((state) => state.language);

  let params = useParams();
  //   console.log(params);
  const userId = params?.userid;
  const valuCurren = Number(params?.valuetoconverter);

  //   console.log(dataUsdt);
  //   //   console.log(dataQrcode);
  //   const d = new Date();
  //   let min = d.getMinutes();
  //   console.log(min);
  //   const funcMin = () => {};
  //   const setFuncMin = () => {
  //     compt--;
  //     setMinutes(compt);
  //     if (compt === 0) {
  //       setCompt(5);
  //     }
  //   };

  //   setInterval(setFuncMin, 60000);
  //   clearInterval(setFuncMin, 60000);

  //   console.log(seconds);

  useEffect(() => {
    const getRateCrypto = async () => {
      if (currency === "euro") {
        axios({
          method: "post",
          url: `${process.env.REACT_APP_CLIENT_URL}/pay-with-crypto/getcurrencycrypto`,
          data: { valuCur: valuCurren, currency: "eur" },
        }).then((res) => {
          setValueCurrencyConvert(res?.data);
          setValueCurrencyToggle(false);
        });
      } else if (currency === "dollar") {
        axios({
          method: "post",
          url: `${process.env.REACT_APP_CLIENT_URL}/pay-with-crypto/getcurrencycrypto`,
          data: { valuCur: valuCurren, currency: "usd" },
        }).then((res) => {
          setValueCurrencyConvert(res?.data);
          setValueCurrencyToggle(false);
        });
      } else {
        axios({
          method: "post",
          url: `${process.env.REACT_APP_CLIENT_URL}/pay-with-crypto/getcurrencycrypto`,
          data: { valuCur: valuCurren, currency: currency },
        }).then((res) => {
          setValueCurrencyConvert(res?.data);
          setValueCurrencyToggle(false);
        });
      }
    };

    getRateCrypto();
  }, [currency, valuCurren]);

  useEffect(() => {
    const getUsdtPayment = async () => {
      await axios
        .get(`${process.env.REACT_APP_CLIENT_URL}/pay-with-crypto`)
        .then((res) => {
          setDataUsdt(res.data);
          setDataUsdtToggle(false);
        })
        .catch((error) => console.log(error));
    };

    getUsdtPayment();
  }, []);

  useEffect(() => {
    const getUsdtPaymentQr = async () => {
      await axios
        .get(`${process.env.REACT_APP_CLIENT_URL}/pay-with-crypto/qrcode`)
        .then((res) => {
          setDataQrcode(res.data);
          setLoadingQr(false);
        })
        .catch((error) => console.log(error));
    };

    getUsdtPaymentQr();
  }, []);

  const handleCopyToClipboad = (text, result) => {
    setCopied(result);
  };

  return (
    <div className="paymentusdt">
      <div className="paymentusdt-container">
        {loadingQr ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Skeleton height="250px" width="300px" />
            <Skeleton height="50px" width="100px" />
          </div>
        ) : (
          <div className="usdt-qrcode">
            <img
              src={`data:image/png;base64,${dataQrcode?.qr_code}`}
              alt="Payment QR Code"
            />

            <p>Adress</p>
          </div>
        )}

        <div className="paymentusdt-paytrc">
          <span className="paymentusdt-paytrc-send">
            {language === "anglais" && "PLEASE SEND"}
            {language === "francais" && "VEUILLEZ ENVOYER"}
            {language === "espagnol" && "POR FAVOR ENVIE"}
          </span>
          {valueCurrencyToggle ? (
            <Skeleton height="40px" width="50px" />
          ) : (
            <span className="paymentusdt-paytrc-cur">
              {valueCurrencyConvert?.value_coin} TRC20_USDT
            </span>
          )}

          <span className="paymentusdt-paytrc-val">
            ({valuCurren}
            {currency === "euro" && "€"}
            {currency === "" && "€"}
            {currency === "dollar" && "$"}
            {currency === "mad" && "MAD"}
            {currency === "usdt" && "USDT"}
            {currency === "cad" && "CAD"}
            {currency === "chf" && "CHF"}
            {currency === "rub" && "RUB"}
            {currency === "gbp" && "£"} )
          </span>
        </div>
        <div className="paymentusdt-adjust">
          <span className="convert-rate">
            {language === "anglais" &&
              "The TRC20_USDT conversion rate will be adjusted in"}
            {language === "francais" &&
              "Le taux de conversion TRC20_USDT sera ajusté dans"}
            {language === "espagnol" &&
              "La tasa de conversión TRC20_USDT se ajustará en"}
          </span>
          <span className="min-hou"> {minutes} minutes</span>
        </div>
        <div className="adress-to-copy">
          {dataUsdtToggle ? (
            <Skeleton height="40px" width="250px" />
          ) : (
            <div className="copyclip">
              {/* <input type="text" value="" /> */}
              <CopyToClipboard
                text={dataUsdt?.address_in}
                onCopy={handleCopyToClipboad}
              >
                <button className="btn-copyclip-contain">
                  <span className="copy-sap1">{dataUsdt?.address_in}</span>
                  <span className="copy-sap2">
                    <AiFillCopy />
                  </span>
                </button>
              </CopyToClipboard>
            </div>
          )}
          <span>
            {copied && (
              <span
                style={{
                  color: "red",
                  fontSize: "18px",
                  marginLeft: "10px",
                }}
              >
                Copié
              </span>
            )}
          </span>
        </div>
        <div className="paymentusdt-valid">
          <span>
            {language === "anglais" && "This order will be valid for"}
            {language === "francais" && "Cette commande sera valable pour"}
            {language === "espagnol" && "Este pedido será válido para"}
          </span>
          <span className="min-hou"> 1h </span>
        </div>
        <div className="cryptoapi-power">
          <span>Powered by</span>
          <img src={cryptoapi} alt="cryptoapi" />
        </div>
        <div className="waiting-network">
          <div className="waiting-for-pay">
            <span className="logo1">
              <BsFillArrowDownCircleFill />
            </span>
            <span className="text-payment1">
              {language === "francais" && "En attendre du paiement"}
              {language === "anglais" && "Waiting form payment"}
              {language === "espagnol" && "Forma de pago de espera"}
            </span>
          </div>
          <span className="first-trait"></span>
          <div className="waiting-for-network">
            <span className="logo2">
              <FaServer />
            </span>
            <span className="text-payment2">
              {language === "francais" &&
                " En attente de la confirmation du réseau"}
              {language === "anglais" && "Waiting for network confirmation"}
              {language === "espagnol" && "Esperando la confirmación de la red"}
            </span>
          </div>
          <span className="second-trait"></span>
          <div className="waiting-for-valid">
            <span className="logo3">
              <FaCheckCircle />
            </span>
            <span className="text-payment3">
              {language === "francais" && "paiement confirmé"}
              {language === "anglais" && "Payment confirmed"}
              {language === "espagnol" && "confirmado el pago"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentUsdt;
