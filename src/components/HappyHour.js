import { createPortal } from "react-dom";

const HappyHour = () => {
  return createPortal(
    <div className='modal flex-center'>
      <div className="container flex-center">
        <p className='hour letter0'>H</p>
        <p className='hour letter1'>A</p>
        <p className='hour letter2'>P</p>
        <p className='hour letter3'>P</p>
        <p className='hour letter4'>Y</p>
      </div>

      <br />
      <div className="container flex-center">
        <p className='hour letter6'>H</p>
        <p className='hour letter7'>O</p>
        <p className='hour letter8'>U</p>
        <p className='hour letter9'>R</p>
      </div>
    </div>,
    document.body
  );
};

export default HappyHour;
