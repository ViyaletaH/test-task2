import NameBar from './NameBar';
import LeftSideContent from './LeftSideContent';
import RightSideContent from './RightSideContent';

const ContentContainer = () => {
  return (
    <div className='content-container'>
      <NameBar />
      <LeftSideContent />
      <RightSideContent />
    </div>
  );
};

export default ContentContainer;
