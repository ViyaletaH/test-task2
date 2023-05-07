import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { useState, useEffect } from 'react';
import { firstSlideCards, secondSlideCards, thirdSlideCards } from '../../data/slides';

interface SliderProps {
  onSlideChange: (slideNum: number) => void;
  overlayClick: (index: number, photo: string) => void;
}

const Slider = ({ onSlideChange, overlayClick }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleClick = (index: number, photo: string) => {
    overlayClick(index, photo);
  };

  function goToRightSlide() {
    if (currentSlide === 2) {
      setCurrentSlide(currentSlide);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function goToLeftSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(currentSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  useEffect(() => {
    onSlideChange(currentSlide);
  }, [currentSlide, onSlideChange]);

  return (
    <div className="slider">
      <LeftArrow onClick={goToLeftSlide} slideNum={currentSlide} />
      <div id="card-holder">
        <div className={`${currentSlide === 0 ? 'current-slide' : 'slide'}`}>
        {firstSlideCards.map((card, index) => (
            <div
            onClick={() => handleClick(index, card.photo)}
            key={card.photo}
              className={`${
                card.cardId === 1 || card.cardId === 5 ? `card-${card.cardId}` : 'card'
              }`
            } 
              style={{
                backgroundImage: card.photo !== '' ? `url( /${card.photo})` : `url(/vite.svg)`,
                backgroundPosition: 'center',
                backgroundSize: card.photo !== '' ? 'cover' : 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundColor: card.photo !== '' ? undefined : 'pink',
              }}
            />
          ))}
        </div>
        <div className={`${currentSlide === 1 ? 'current-slide' : 'slide'}`}>
          {secondSlideCards.map((card, index) => (
            <div
            onClick={() => handleClick(index, card.photo)}
            key={card.photo}
              className={`${
                card.cardId === 1 || card.cardId === 5 ? `card-${card.cardId}` : 'card'
              }`}
              style={{
                backgroundImage: card.photo !== '' ? `url(/${card.photo})` : `url(./logo.png)`,
                backgroundPosition: 'center',
                backgroundSize: card.photo !== '' ? 'cover' : 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundColor: card.photo !== '' ? undefined : 'pink',
              }}
            />
          ))}
        </div>
        <div className={`${currentSlide === 2 ? 'current-slide' : 'slide'}`}>
          {thirdSlideCards.map((card, index) => (
            <div
            onClick={() => handleClick(index, card.photo)}
            key={card.photo}
              className={`${
                card.cardId === 1 || card.cardId === 5 ? `card-${card.cardId}` : 'card'
              }`}
              style={{
                backgroundImage: card.photo !== '' ? `url( /${card.photo})` : `url(./logo.png)`,
                backgroundPosition: 'center',
                backgroundSize: card.photo !== '' ? 'cover' : 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundColor: card.photo !== '' ? undefined : 'pink',
              }}
            />
          ))}
        </div>
      </div>
      <RightArrow onClick={goToRightSlide} slideNum={currentSlide} />
    </div>
  );
};

export default Slider;
