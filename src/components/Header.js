import { useEffect, useState } from "react";
import berthomLogo from "../assets/pictures/berthom-logo.png";
import { slider } from "../utils/slider";

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(setSlider, 4000);
  });

  const setSlider = () => {
    index < 3 ? setIndex(index + 1) : setIndex(0);
  };

  const contentSlider = slider(index);

  return (
    <header className='header-app'>
      <div aria-label='bannière de la page web' className='container bg-dark flex-center pad-small'>
        <img src={berthomLogo} alt='Les berthom' width={180} height={60} />
      </div>
      <section className='container slider'>{contentSlider}</section>
    </header>
  );
};

export default Header;
