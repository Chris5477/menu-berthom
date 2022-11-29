const Legend = ({ source, txtAlt, content, w, h }) => {
  return (
    <>
      <figure className='txt-center flex-center'>
        <img src={source} alt={txtAlt} width={w} height={h} />
        <legend className='pad-small'>{content}</legend>
      </figure>
    </>
  );
};

export default Legend;
