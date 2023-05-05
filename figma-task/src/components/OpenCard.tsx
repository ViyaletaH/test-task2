import { allCards, Card } from './data/slides';

interface OpenCardProps {
  data: { index: number; photo: string } | null;
  onCrossClick: () => void;
}

const OpenCard = ({ data, onCrossClick }: OpenCardProps) => {
  const handleCrossClick = () => {
    onCrossClick();
  };

  const card = allCards.find((element: Card) => element.photo === data?.photo);

  return (
    <div className="overlay">
      <div className="open-card">
        <div className="cross" onClick={handleCrossClick}>
          <img src="/cross.png" alt="close" className="close-icon" />
        </div>
        <div className="card-data">
          {card && (
            <div className="card-main-data">
              <img
                src={card.photo}
                className="photo-opened"
                style={{
                  backgroundImage: `url( /${card.photo})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: '#fff',
                }}
                alt="city view"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OpenCard;
