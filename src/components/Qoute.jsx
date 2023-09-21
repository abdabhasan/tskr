import styled from "styled-components";

const Qoute = () => {
  return (
    <Wrapper className="qoute-section container p-5">
      <h5>Bringing the culture of sharing to everyone</h5>
      <p>
        Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
        Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
        Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this
        is a text link libero tempus congue.
      </p>
      <p className="my-4">
        Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
        sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
        egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Integer tristique elit lobortis purus bibendum, quis dictum metus
        mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
        massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl
        massa, at interdum mauris sollicitudin et.
      </p>
      <div className="qoute py-4 px-5">
        <p>
          Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
          Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
        </p>
        <h5>Luis Pickford</h5>
      </div>
    </Wrapper>
  );
};

export default Qoute;

const Wrapper = styled.section`
  h5 {
    font-size: 17px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 1rem;
    text-align: left;
  }
  p {
    font-size: 15px;
    line-height: 28px;
    max-width: 924px;
    text-align: left;
  }
  .qoute {
    background-color: #ffede8;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 3px;
      background-color: #222222;
      left: 0;
      top: 0;
    }

    p {
      font-size: 15px;
      font-weight: 500;
      line-height: 28px;
      font-style: italic;
    }
    h5 {
      font-size: 17px;
      font-weight: 500;
      line-height: 28px;

      margin: 0;
    }
  }
`;
