import { getAllPrices } from "../utils/functions";

const Food = ({ food }) => {
  const { name, prices, weight } = food;
  return (
    <article className='item pad-small'>
      <h2 className='name-food'>
        {name.toUpperCase()}
      </h2>
      <div>{weight} g . {getAllPrices(prices)} € </div> 
    </article>
  );
};

export default Food;
