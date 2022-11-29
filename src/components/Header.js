import { useEffect, useState } from "react";
import berthomLogo from "../assets/pictures/berthom-logo.png";

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {setTimeout(setSlider, 4000)});

  const setSlider = () => {
   index < 2 ? setIndex(index + 1) : setIndex(0)
  }

  let contentSlider;
  if (index === 0) {
    contentSlider = (
      <>
        <p className='slider-content' style={{ color: "yellow" }}>
          Bière au fût
        </p>
        <p className='slider-content' style={{ color: "yellow" }}>
          Bière en bouteille{" "}
        </p>
        <p className='slider-content' style={{ color: "yellow" }}>
          Venez découvrir nos selections de bières{" "}
        </p>
      </>
    )}else if(index === 1){
      contentSlider = <p className='slider-content' style={{ color: "yellow" }}>Bière à emporter</p>
    }else{
      contentSlider = <p className='slider-content' style={{ color: "yellow" }}>HAPPY HOUR <br/> de 19 h à 21 h</p>
    }
  
  return (
    <header className='header-app'>
      <div aria-label='bannière de la page web' className='container bg-dark flex-center pad-small'>
        <img src={berthomLogo} alt='Les berthom' width={180} height={60} />
      </div>
      {contentSlider}
      <p className='pagination'>
        <span style={{ color: "yellow", fontSize: "70px" }} className='page'>
          .
        </span>
        <span style={{ color: "yellow", fontSize: "70px" }} className='page'>
          .
        </span>
        <span style={{ color: "yellow", fontSize: "70px" }} className='page'>
          .
        </span>
      </p>
    </header>
  );
};

export default Header;
