import packBeer from "../assets/pictures/packagebeer.png";
export const slider = (index) => {
  if (index === 0) {
    return (
      <h2 className='slider-content flex-center'>
        Bière au fût/bouteille <br /> à découvrir
      </h2>
    );
  } else if (index === 1) {
    return <img className="package" src={packBeer} alt='bière à emporter' width={350} height={200} />;
  } else if (index === 2) {
    return (
      <>
        <h2 className='flex-center slider-content'>
          Horaire d'ouverture
          <br />
          Lundi au jeudi : 17h - 01h
          <br />
          Samedi : 17h - 02h    
          <br />
          Dimanche : 17h - 00h
        </h2>
      </>
    );
  } else {
    return (
      <>
        <h2 className='flex-center slider-content'>
          HAPPY HOUR <br /> de 19 h à 21 h
        </h2>
      </>
    );
  }
};
