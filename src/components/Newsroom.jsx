import Header from "./Header";
import Overlay from "./Overlay";
import LogoWhite from "./LogoWhite";
import styled from "styled-components";
import Card from "./Card";

const Newsroom = () => {
  return (
    <Wrapper>
      <LogoWhite />
      <Overlay>
        <Header title={"Newsroom"} /> ;
        <Card />
        <Card />
        <Card />
        <Card />
      </Overlay>
    </Wrapper>
  );
};

export default Newsroom;

const Wrapper = styled.section`
  .logo {
    span {
      color: #fff !important;
    }
  }
  .cardd {
    p {
      margin: 0;
      text-align: start;
      font-size: 14px;
      line-height: 28px;
      color: #6b7177;
    }
    h2 {
      font-size: 28px;
      font-weight: 700;
      line-height: 45px;
    }
    h6 {
      font-size: 15px;
      line-height: 28px;
    }
  }
`;
