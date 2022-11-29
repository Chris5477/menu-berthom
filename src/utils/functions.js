import { beers } from "./menu.js";

export const filterBeer = (type) => {
  return beers.filter((beer) => beer.dominance === type);
};

export const getAllTagsBeersWithNoDuplicate = () => {
  let temp = [];
  for (const beer of beers) {
    temp = [...temp, ...beer.tags];
  }

  const noDuplicate = new Set([...temp]);
  return [...noDuplicate];
};

const roundWithTwoNumberAfterComma = (price) => {
  const isFloatNumber = price.toString().split(".")[1];
  if (Number.isInteger(price)) {
    return price + ".00";
  } else {
    return isFloatNumber.length === 1 ? price + "0" : price;
  }
};

export const getAllPrices = (prices) => {
  if (Array.isArray(prices)) {
     return prices.map((price, index) => <p key={index}>{roundWithTwoNumberAfterComma(price)} €</p>);
  } else {
    return roundWithTwoNumberAfterComma(prices) + "€";
  }
};
