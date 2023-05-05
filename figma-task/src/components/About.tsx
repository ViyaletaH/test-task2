import Header from './about_page/header/Header';
import ContentContainer from './about_page/content/ContentContainer';
import SliderContainer from './about_page/slider/SliderContainer';
import NavLine from './NavLine';
import { useState } from 'react';
import OpenCard from './OpenCard';

const About = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [cardOpen, setCardOpen] = useState<{ index: number; photo: string } | null>(null);
  const [arrNum, setArrNum] = useState(1);

  const handleDotColorChange = (dotColor: number) => {
    setArrNum(dotColor);
  };

  const handleOverlayClick = (index: number, photo: string) => {
    setShowOverlay(true);
    setCardOpen({ index, photo });
    console.log('clicked');
  };

  const handleClosure = () => {
    setShowOverlay(false);
  };

  return (
    <div className="about-container">
      {showOverlay && <OpenCard data={cardOpen} onCrossClick={handleClosure} />}
      <Header />
      <NavLine />
      <ContentContainer />
      <SliderContainer onDotColorChange={handleDotColorChange} overlayClick={handleOverlayClick}/>
    </div>
  );
};

export default About;
