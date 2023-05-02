import React from 'react';

const LeftSideContent = () => {
  return (
    <div className="left-side">
      <div className="left-side-ph">
        <img src="/left-bottom.png" alt="office" id="left-bottom" />
        <img src="/left-top.png" alt="conversation" id="left-top" />
      </div>
      <div className="left-side-text">
        <div className="introductory-p">
          <div id="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div id="cras">Cras dapibus, mauris efficitur ornare rhoncus, libero ex </div>
          <div id="rutum">rutrum tortor, ut viverra mi odio ac purus. Pellentesque</div>
          <div id="convallis">convallis id lectus auctor efficitur. Donec faucibus,</div>
          <div id="quis">magna quis tristique aliquet</div>
        </div>
        <div className="left-p">
          <div id="left-p-first">
            Fusce ac finibus ipsum, vel mollis lorem. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque suscipit quam non nulla sollicitudin hendrerit.
            Praesent dictum tempus neque. Donec et lacus quis felis ultrices mattis.
          </div>
          <div id="left-p-second">
            Quisque tempor aliquet dui, sed dignissim augue varius vel. Maecenas ut lacinia orci.
            Sed efficitur finibus arcu in porta. Donec sed tempus neque, eu fringilla orci. Sed
            tincidunt nulla quis est fringilla rhoncus. In neque purus, suscipit id hendrerit quis,
            pulvinar faucibus felis.
          </div>
          <div id="left-p-third">
            In semper sapien sit amet dolor lobortis, interdum mollis sapien pretium. Phasellus
            euismod ullamcorper turpis vel pretium. Vivamus id convallis enim. Pellentesque eleifend
            felis sit amet elit faucibus, ac auctor urna feugiat. Sed eu sagittis urna. Pellentesque
            nunc felis, molestie a mauris et, pellentesque ultricies velit. Pellentesque elementum
            eu ante lacinia dapibus. In facilisis dolor ac felis vehicula, vitae tincidunt libero
            hendrerit.
          </div>
          <div id="left-p-fourth">
            Donec ultricies lorem in mi tincidunt ornare. Etiam non turpis lacus. Donec scelerisque
            tellus in turpis tristique, et imperdiet sem mollis. Nam fermentum non sem id viverra.
            Sed quis arcu rutrum, ornare tortor id, lobortis metus. Fusce ornare ligula eu urna
            dignissim, ut condimentum odio tempor. Proin eu est enim. Nam lacus leo, accumsan nec
            quam nec, fermentum molestie orci. Morbi in nisi vitae arcu rutrum ornare eu at nulla.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideContent;
