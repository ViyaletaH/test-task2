import Slider from './Slider';
import Dots from './Dots';
import { useState } from 'react';

const SliderContainer = () => {
  const [dotColor, setDotColor] = useState(1);

  function handleSlideChange(slideNum: number) {
    setDotColor(slideNum);
  }

  return (
    <div className="slider-container">
      <Slider onSlideChange={handleSlideChange} />
      <Dots dotColor={dotColor} />
    </div>
  );
};

export default SliderContainer;
