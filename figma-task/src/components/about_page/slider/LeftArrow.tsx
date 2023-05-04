import { MouseEventHandler } from "react";

interface LeftArrowProps {
  onClick: MouseEventHandler<HTMLImageElement>;
}

const LeftArrow = ({onClick}: LeftArrowProps) => {

  
  return (
    <div className="arrow">
      <img src="/arrow.png" alt="left arrow" id="left-arrow" className="arrow-img" onClick={onClick} />
    </div>
  );
};

export default LeftArrow;
