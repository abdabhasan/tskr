import styled from "styled-components";
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <Wrapper className="logo d-flex align-items-center gap-2">
      <img src={logo} alt="logo" />
      <div className="logo-title">
        <h3>
          <span>Tskr</span>.com
        </h3>
      </div>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  z-index: 99999;
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 31.25px;
    text-transform: none;
    color: #5bbb7b;
    span {
      color: #222222;
    }
  }
`;
