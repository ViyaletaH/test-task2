import Slider from './Slider';
import Dots from './Dots';
import { useState } from 'react';

interface SliderContainerProps {
  onDotColorChange: (dotColor: number) => void;
  overlayClick: (index: number, photo: string) => void;
}

const SliderContainer = ({ onDotColorChange, overlayClick }: SliderContainerProps) => {
  const [dotColor, setDotColor] = useState(1);

  function handleSlideChange(slideNum: number) {
    setDotColor(slideNum);
    onDotColorChange(slideNum);
  }

  return (
    <div className="slider-container">
      <Slider onSlideChange={handleSlideChange} overlayClick={overlayClick} />
      <Dots dotColor={dotColor} />
    </div>
  );
};

export default SliderContainer;
