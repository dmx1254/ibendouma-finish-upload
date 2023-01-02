import React from "react";
import { useSelector } from "react-redux";

const ProductDescription = ({ item }) => {
  // console.log(item);
  const { language } = useSelector((state) => state.language);
  return language === "anglais" ? (
    <div className="productdescription">
      <p className="productdescription-desc">
        Why buy Kamas Dofus on iBendouma? Speed Since the creation of the
        iBendouma site, speed delivery has been our main objective. More than
        99% of our orders are delivered between 3 and 15 minutes. On iBendouma,
        you can buy Kamas Dofus at low prices in order to benefit from many
        advantages and improve your gaming experience. We have stocks of kamas
        on all Dofus servers and we work with reliable suppliers to ensure the
        correct delivery process. We guarantee EXCELLENT quality service, 24/7,
        fast and safe. Save time and fully enjoy your game with iBendouma. Best
        price on the market If you find better on another online store, contact
        us and we will do our best to beat it. How to receive your Kamas on
        Dofus? After placing the order, our agent will contact you to give you
        the payment information and inform you of the meeting point (in-game
        map) to deliver your Kama. Make sure you can receive private messages
        in-game, then go to the meeting point. 99% of orders are delivered
        within 3-15 minutes. NB: Please check your emails or contact our
        customer service in livechat if you do not receive the kamas within the
        next 15 minutes.
      </p>
    </div>
  ) : language === "espagnol" ? (
    <div className="productdescription">
      <p className="productdescription-desc">
        Por qué comprar Kamas Dofus en iBendouma? Velocidad Desde la creación de
        la sitio iBendouma, la velocidad de entrega ha sido nuestro principal
        objetivo. Más que El 99% de nuestros pedidos se entregan entre 3 y 15
        minutos. En iBendouma, puedes comprar Kamas Dofus a precios bajos para
        beneficiarte de muchos ventajas y mejorar su experiencia de juego.
        Tenemos existencias de kamas en todos los servidores de Dofus y
        trabajamos con proveedores fiables para garantizar la correcto proceso
        de entrega. Garantizamos un servicio de EXCELENTE calidad, 24/7, rápido
        y seguro. Ahorre tiempo y disfrute plenamente de su juego con iBendouma.
        Mejor precio en el mercado Si encuentras algo mejor en otra tienda
        online, contacta nosotros y haremos todo lo posible para vencerlo. Cómo
        recibir tus Kamas en Dofus? Después de realizar el pedido, nuestro
        agente se pondrá en contacto contigo para darte la información de pago e
        informarle del punto de encuentro (en el juego mapa) para entregar su
        Kama. Asegúrate de que puedes recibir mensajes privados en el juego,
        luego ve al punto de encuentro. El 99% de los pedidos se entregan dentro
        de 3-15 minutos. NB: Por favor revise sus correos electrónicos o póngase
        en contacto con nuestro servicio al cliente en livechat si no recibe los
        kamas dentro del próximos 15 minutos
      </p>
    </div>
  ) : (
    <div className="productdescription">
      <p className="productdescription-desc">{item?.description}</p>
    </div>
  );
};

export default ProductDescription;
