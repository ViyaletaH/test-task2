import { MouseEventHandler } from "react";

interface LeftArrowProps {
  onClick: MouseEventHandler<HTMLImageElement>;
  slideNum: number;
}

const LeftArrow = ({onClick, slideNum}: LeftArrowProps) => {

  
  return (
    <div className="arrow">
      <img src="/arrow.png" alt="left arrow" id="left-arrow" className={`${slideNum !== 0 ? "arrow-img" : "disabled-arrow"}`} onClick={onClick} />
    </div>
  );
};

export default LeftArrow;
