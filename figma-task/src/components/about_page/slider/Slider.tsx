import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const Slider = () => {
  return (
    <div className="slider" >
      <LeftArrow />
      <div id="card-holder"></div>
      <RightArrow />
    </div>
  );
};

export default Slider;
