import styled from "styled-components";

const Overlay = ({ children }) => {
  return (
    <Wrapper className="overlay">
      <div>{children}</div>
    </Wrapper>
  );
};

export default Overlay;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.7);

  z-index: 10;

  & > div {
    position: fixed;
    width: 60%;
    overflow-y: auto;
    top: 2rem;
    right: 2rem;
    bottom: 2rem;
    background-color: #fff;
    z-index: 10;
    border-radius: 20px;
  }
`;
