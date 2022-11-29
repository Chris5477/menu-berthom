import "../assets/icons/bottle.svg";

const AnchorMenu = ({ colorLiElement, svgColor, content, link, classSvg }) => {
  return (
    <li className='txt-center'>
<a className={colorLiElement} href={link}>
      <svg
        enableBackground='new 0 0 64 64'
        id='Layer_1_1_'
        version='1.1'
        viewBox='0 0 64 64'
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        className={classSvg}
      >
        <g>
          <g>
            <rect fill={svgColor} height='2' width='8' x='28' y='7' />
          </g>
          <g>
            <rect fill={svgColor} height='2' width='20' x='22' y='33' />
          </g>
          <g>
            <rect fill={svgColor} height='2' width='20' x='22' y='53' />
          </g>
          <g>
            <path
              d='M40,63H24c-1.7,0-3-1.3-3-3V30c0-3.2,2.1-6.5,6-6.9V3c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2v20.1    c3.9,0.5,6,3.7,6,6.9v30C43,61.7,41.7,63,40,63z M28,25c-3.4,0-5,2.6-5,5v30c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V30    c0-2.4-1.6-5-5-5h-1V3l-6,0v22H28z'
              fill={svgColor}
            />
          </g>
          <g>
            <path d='M26,40h-2V30c0-2,1.4-4,4-4v2c-1.5,0-2,1.1-2,2V40z' fill={svgColor} />
          </g>
          <g>
            <rect fill={svgColor} height='2' width='2' x='31' y='49' />
          </g>
          <g>
            <rect fill={svgColor} height='2' width='2' x='35' y='49' />
          </g>
          <g>
            <rect fill={svgColor} height='2' width='2' x='27' y='49' />
          </g>
        </g>
      </svg>
        <p>{content}</p>
      </a>
    </li>
  );
};
export default AnchorMenu;
