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
  const [darkenPos, setDarkenPos] = useState(false);

  const handleDotColorChange = (dotColor: number) => {
    setArrNum(dotColor);
  };

  const handleOverlayClick = (index: number, photo: string) => {
    setShowOverlay(true);
    setCardOpen({ index, photo });
  };

  const handleClosure = () => {
    setShowOverlay(false);
  };

  const handleDarken = (linesClicked: boolean) => {
    setDarkenPos(linesClicked);
  }

  return (
    <div className="about-container">
      {showOverlay && <OpenCard data={cardOpen} onCrossClick={handleClosure} />}
      {darkenPos && <div className="darken-open"/>}
      <Header handleDarken={handleDarken} />
      <NavLine />
      <ContentContainer />
      <SliderContainer onDotColorChange={handleDotColorChange} overlayClick={handleOverlayClick} ></SliderContainer>
    </div>
  );
};

export default About;
