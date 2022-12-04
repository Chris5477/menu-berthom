import "../slideOne.css"
import beer from "../assets/pictures/beer.png"

const SliderOne = () => {
  return (
    <div className='a bg'>
      <div className='empty'></div>
      <div className='empty'></div>
      <div className='empty'></div>
      <div className='empty'></div>
      <div className='aa'>
        <p className='letter'>HAPPY</p>
      </div>
      <div className='aa'>
        <p className='letter'>HOUR</p>
      </div>
      <p className='txt-hour'>DE 19 H À 21 H</p>
      <img className='beer' src={beer} alt='beer' width='160' height='180' />
    </div>
  );
};

export default SliderOne;
