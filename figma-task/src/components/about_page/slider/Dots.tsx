interface DotsProps {
  dotColor: number;
}

const Dots = ({dotColor}: DotsProps) => {
  return (
    <div className="dots">
      <div className={dotColor === 0 ? "dot-active" : "dot"} id="dot-first"></div>
      <div className={dotColor === 1 ? "dot-active" : "dot"} id="dot-second"></div>
      <div className={dotColor === 2 ? "dot-active" : "dot"} id="dot-third"></div>
    </div>
  );
};

export default Dots;
