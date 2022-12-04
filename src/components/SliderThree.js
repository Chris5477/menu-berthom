import "../slideOne.css";
import barrel from "../assets/icons/barrel.svg";
import bottleBeer from "../assets/icons/bottlebier.svg";
const SliderThree = () => {
  return (
    <div className='bg-slider'>
      <p>
        <img src={barrel} alt='fût de bière' width={60} height={60} />
        Bière au fut
      </p>
      <p>
        Bière <br />en bouteille
        <img src={bottleBeer} alt='Bouteille de bière' width={60} height={60} />
      </p>
    </div>
  );
};

export default SliderThree;
