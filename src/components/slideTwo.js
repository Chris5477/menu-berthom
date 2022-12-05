import "../slideOne.css";
import packagebeer from "../assets/pictures/packagebeer.png";

const SlideTwo = () => {
  return (
    <div>
      <div className='area'>
        <div className='txt'>
          <img src={packagebeer} alt='bottle of beer' width='220' height='400' />
          <h1>
            BIÈRES A<br /> EMPORTER
          </h1>
        </div>
        <ul className='circles'>
          {Array.from({ length: 13 }).map((_, index) => (
            <li key={index}>
              <span className='dot'></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SlideTwo;
