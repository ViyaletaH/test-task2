import { MouseEventHandler } from "react";

interface RightArrowProps {
  onClick: MouseEventHandler<HTMLImageElement>;
}

const RightArrow = ({ onClick }: RightArrowProps) => {
  return (
    <div className="arrow">
      <img src="/arrow.png" alt="right arrow" id="right-arrow" className="arrow-img" onClick={onClick} />
    </div>
  );
};

export default RightArrow;
