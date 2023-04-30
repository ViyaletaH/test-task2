const RightSideContent = () => {
  return (
    <div className="right-side">
      <div className="right-side-text">
        <p className="right-upper-p">
          Nunc feugiat imperdiet dolor, sit amet consectetur tortor facilisis ac. Vivamus quam
          neque, euismod porttitor magna et, finibus tincidunt justo. Nullam vehicula velit sed diam
          sagittis, eget pretium nisi mollis. Etiam in risus nibh. Curabitur feugiat pulvinar enim,
          in blandit massa suscipit id. Donec mollis vel lacus sit amet rhoncus.
        </p>
        <label htmlFor="list">
          Pellentesque tempus nunc sit amet erat placerat, eu varius sem sollicitudin:
        </label>
        <ul id="list">
          <li>Nam in massa gravida</li>
          <li>Nam in massa gravida</li>
          <li>Nam in massa gravida</li>
        </ul>
        <p className="right-lower-p">
          Mauris sollicitudin lorem in orci porta, ac tincidunt neque consequat. Sed dictum diam
          vehicula aliquet vehicula. Vivamus ultrices facilisis sollicitudin. Duis vel mi non eros
          porttitor imperdiet. Pellentesque tempor nunc sed mi laoreet venenatis.
        </p>
      </div>
      <div className="right-side-ph"></div>
    </div>
  );
};

export default RightSideContent;
