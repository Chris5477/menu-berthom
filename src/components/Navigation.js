import { useEffect, useState } from "react";
import { getAllTagsBeersWithNoDuplicate } from "../utils/functions";
import { beers } from "../utils/menu";
import AnchorMenu from "./AnchorMenu";

const Navigation = ({ setSearchBeer }) => {
  const [tags, setTags] = useState([]);
  const [taste, setTaste] = useState("");
  useEffect(() => {
    setTags(getAllTagsBeersWithNoDuplicate());
    setFlavour();
  }, [taste]);

  const setFlavour = () => {
    const getResult = beers.filter((el) => el.tags.find((tag) => tag === taste));
    setSearchBeer(getResult);
  };

  return (
    <nav className='container bg-dark'>
      <section id='search-beer' className='search-section container flex-center'>
        <h2 aria-hidden='true' className='no-visible'>
          title
        </h2>
        <label htmlFor='beers' id='search-beers' className='color--yellow'>
          Quelle type de bière voulez-vous ?
        </label>
        <input
          className='pad-small'
          onChange={(e) => setTaste(e.target.value)}
          type='text'
          id='beers'
          list='list-beers'
          placeholder='Acidulée, fruits rouges ...'
          defaultValue={taste}
        />
        <datalist id='list-beers'>
          {tags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </datalist>
      </section>
      <menu className='container pad-small'>
        <AnchorMenu
          colorLiElement='color--blue shadow-blue'
          svgColor='rgb(119, 195, 195)'
          link='#draft'
          content='Pressions'
          classSvg='shadow-blue-svg'
        />
        <AnchorMenu
          colorLiElement='color--yellow shadow-yellow'
          svgColor='rgb(245, 245, 95)'
          link='#acidulous'
          content='Acidulées'
          classSvg='shadow-yellow-svg'
        />
        <AnchorMenu
          colorLiElement='color--red shadow-red'
          svgColor='rgb(234, 97, 97)'
          link='#sweet'
          content='Sucrées'
          classSvg='shadow-red-svg'
        />
        <AnchorMenu
          colorLiElement='color--blue shadow-blue'
          svgColor='rgb(119, 195, 195)'
          link='#fresh'
          content='Douces'
          classSvg='shadow-blue-svg'
        />
        <AnchorMenu
          colorLiElement='color--yellow shadow-yellow'
          svgColor='rgb(245, 245, 95)'
          link='#bitter'
          content='Amères'
          classSvg='shadow-yellow-svg'
        />
        <AnchorMenu
          colorLiElement='color--red shadow-red'
          svgColor='rgb(234, 97, 97)'
          link='#alcohol'
          content='Alcools'
          classSvg='shadow-red-svg'
        />
        <AnchorMenu
          colorLiElement='color--blue shadow-blue'
          svgColor='rgb(119, 195, 195)'
          link='#free-alcohol'
          content='Soft'
          classSvg='shadow-blue-svg'
        />
      </menu>
    </nav>
  );
};

export default Navigation;
