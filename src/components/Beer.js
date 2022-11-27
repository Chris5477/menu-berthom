import { getAllPrices } from "../utils/functions";
import lactose from "../assets/icons/milk.png";
import bio from "../assets/icons/bio.png";
import free from "../assets/icons/free.png";
import gluten from "../assets/icons/gluten.png";

const Beer = ({ beer }) => {
  const { name, alt, brewery, from, specificity, characteristic, volume, tags, strength, prices } = beer;

  let information;

  if (characteristic === "Lactose") {
    information = lactose;
  } else if (characteristic === "Sans alcool") {
    information = free;
  } else if (characteristic === "Bio") {
    information = bio;
  } else {
    information = gluten;
  }

  return (
    <article className='bottle-beer pad-big'>
      <h2 className='name-drink'>
        {name.toUpperCase()} . {from} {volume} cl
      </h2>

      <h3 className="specificity">
        {specificity} | {brewery} {strength} %
      </h3>
      <p className="specificity">{alt}</p>
      <p className='tag'>{tags.join(", ")} </p>
      {characteristic && (
        <img className='indicator' src={information} alt="indicateur d'ingrédient" width={60} height={70} />
      )}
      <div className='price'>{getAllPrices(prices) + "€"}</div>
    </article>
  );
};

export default Beer;
