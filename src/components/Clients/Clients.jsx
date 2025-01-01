import "./clients.css";
import Marquee from "react-fast-marquee";
import aar from "../../assets/image/aar1.png";
import aetna from "../../assets/image/aetna1.png";
import allianz from "../../assets/image/allianz1.png";
import apa from "../../assets/image/apa.png";
import health from "../../assets/image/health.png";

const Clients = () => {
  return (
    <div className="clients">
      <h2>Our Clients</h2>
      <div className="slider">
        <Marquee>
          <img src={aar} alt="" />
          <img src={aetna} alt="" />
          <img src={allianz} alt="" />
          <img src={apa} alt="" />
          <img src={health} alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
