import Header from './about_page/header/Header';
import ContentContainer from './about_page/content/ContentContainer';
import SliderContainer from './about_page/slider/SliderContainer';
import NavLine from './NavLine';

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <NavLine />
      <ContentContainer />
      <SliderContainer />
    </div>
  );
};

export default About;
