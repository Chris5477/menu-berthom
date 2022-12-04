import { getAllPrices } from "../utils/functions";
import { getIndicator } from "../utils/getIndicator";

const Beer = ({ beer }) => {
  const { name, alt, brewery, from, specificity, characteristic, volume, tags, strength, prices } = beer;

  const information = getIndicator(characteristic)



  return (
    <article className='bottle-beer pad-big'>
      <h2 className='name-drink'>
        {name.toUpperCase()} . {from} {volume} cl
      </h2>

      <h3 className="specificity">
        {specificity} | {brewery} {strength} 
      </h3>
      <p className="specificity">{alt}</p>
      <p className='tag'>{tags.join(", ")} </p>
      {characteristic && (
        <img className='indicator' src={information} alt="indicateur d'ingrédient" width={40} height={50} />
      )}
      <div className='price'>{getAllPrices(prices)}</div>
    </article>
  );
};

export default Beer;
