import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const Slider = () => {
  return (
    <div>
      <LeftArrow />
      <div className="slider"></div>
      <RightArrow/>
    </div>
  );
};

export default Slider;
