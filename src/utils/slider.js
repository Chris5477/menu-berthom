export const slider = (index) => {
  if (index === 0) {
    return (
      <>
        <p className='flex-center slider-content'>Bière au fût</p>
        <p className='flex-center slider-content'>Bière en bouteille </p>
        <p className='flex-center slider-content'>Venez découvrir nos selections de bières </p>
      </>
    );
  } else if (index === 1) {
    return (
      <p className='flex-center slider-content'>
        Bière à emporter
        <br />
      </p>
    );
  } else {
    return (
      <p className='flex-center slider-content'>
        HAPPY HOUR <br /> de 19 h à 21 h
      </p>
    );
  }
};
