import { MouseEventHandler } from "react";

interface RightArrowProps {
  onClick: MouseEventHandler<HTMLImageElement>;
  slideNum: number;
}

const RightArrow = ({ onClick, slideNum }: RightArrowProps) => {
  return (
    <div className="arrow">
      <img src="/arrow.png" alt="right arrow" id="right-arrow" className={`${slideNum !== 2 ? "arrow-img" : "disabled-arrow"}`} onClick={onClick} />
    </div>
  );
};

export default RightArrow;
