import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({ title }) => {
  return (
    <Wrapper className="header ">
      <div className="close-btn mt-2  ">
        <button onClick={() => (window.location.href = "/")}>
          <AiOutlineClose />
        </button>
      </div>
      <div className="title  ">
        <h1>{title}</h1>
        <p className="mt-4 mb-5">
          Give your visitor a smooth online experience with a solid UX design
        </p>
      </div>
      <hr />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  .close-btn {
    button {
      border: none;
      background-color: transparent;
      font-size: 2rem;
      font-weight: 700;
      color: #222222;

      margin-left: 1.5rem;
    }
  }
  .title {
    h1 {
      font-size: 32px;
      line-height: 41.66px;
      font-weight: 700;
    }
    p {
      font-size: 15px;
      line-height: 28px;
    }
    hr {
      color: #e9e9e9;
      height: 1.65px;
    }
  }
`;
