import "../assets/icons/bottle.svg";

const AnchorMenu = ({ colorLiElement, svgColor, content, link, classSvg, food }: any) => {
  let isFood;

  if (food) {
    isFood = (
      <svg className={classSvg} viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <path d='M 11.09375 5.96875 L 10.78125 6.03125 C 4.3125 7.46875 3.03125 13.8125 3.03125 13.8125 L 3 13.90625 L 3 26 L 29 26 L 29 20 L 28 20 C 27.433594 20 27 19.566406 27 19 C 27 18.433594 27.433594 18 28 18 L 29 18 L 29 13.34375 L 28.375 13.0625 L 11.375 6.0625 Z M 10.96875 8.09375 L 13.75 9.25 C 13.308594 9.433594 13 9.691406 13 10 C 13 10.550781 13.894531 11 15 11 C 15.757813 11 16.410156 10.78125 16.75 10.46875 L 22.90625 13 L 5.375 13 C 5.976563 11.519531 7.46875 9 10.96875 8.09375 Z M 5 15 L 8.09375 15 C 8.039063 15.15625 8 15.328125 8 15.5 C 8 16.328125 8.671875 17 9.5 17 C 10.328125 17 11 16.328125 11 15.5 C 11 15.328125 10.960938 15.15625 10.90625 15 L 27 15 L 27 16.40625 C 25.890625 16.847656 25 17.742188 25 19 C 25 20.257813 25.890625 21.152344 27 21.59375 L 27 24 L 14.71875 24 C 14.890625 23.707031 15 23.363281 15 23 C 15 21.894531 14.105469 21 13 21 C 11.894531 21 11 21.894531 11 23 C 11 23.363281 11.109375 23.707031 11.28125 24 L 5 24 Z M 19.5 17 C 18.671875 17 18 17.671875 18 18.5 C 18 19.328125 18.671875 20 19.5 20 C 20.328125 20 21 19.328125 21 18.5 C 21 17.671875 20.328125 17 19.5 17 Z' />
      </svg>
    );
  } else {
    isFood = (
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
    );
  }

  return (
    <li className='pad-small txt-center'>
      <a className={colorLiElement} href={link}>
        {isFood}
        {content}
      </a>
    </li>
  );
};
export default AnchorMenu;
