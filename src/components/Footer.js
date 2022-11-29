import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import { informations } from "../utils/informations";
import Legend from "./Legend";

const Footer = () => {
  return (
    <footer className='container'>
      <section className='container social-network flex-center'>
        <h2 className='pad-big txt-center'>Nos réseaux</h2>
        <div>
          <a href='https://www.facebook.com/BerThoMNancy/'>
            <img src={facebook} alt='facebook' width={50} height={50} />
          </a>
          <a href='https://twitter.com/lesberthom?lang=fr'>
            <img src={twitter} alt='twitter' width={50} height={50} />
          </a>
          <a href='https://www.instagram.com/lesberthomnancy/'>
            <img src={instagram} alt='instagram' width={50} height={50} />
          </a>
          <a href='https://www.youtube.com/@LesBerThoM  '>
            <img src={youtube} alt='you tube' width={50} height={50} />
          </a>
        </div>
      </section>
      <section className='warning'>
        {informations.map(({ id, source, txtAlt, legend }) => (
          <Legend key={id} source={source} alt={txtAlt} content={legend} w={80} h={80} />
        ))}
      </section>
    </footer>
  );
};

export default Footer;
