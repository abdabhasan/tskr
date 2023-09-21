import test4 from "../assets/test4.png";
import test2 from "../assets/test2.png";
import styled from "styled-components";

const Card = () => {
  return (
    <Wrapper className="cardd gap-5 text-start p-5 d-flex align-items-center">
      <div className="img">
        <img src={test4} alt="test" />
      </div>
      <div className="content text-start">
        <p>business</p>
        <h2 className="py-2">Start an online business and work from home</h2>
        <h6 className="py-3">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy.
        </h6>
        <div className="author d-flex gap-3 align-items-center">
          <div className="author-img">
            <img src={test2} alt="" />
          </div>
          <div className="author-title">
            <h5>Leslie Alexander</h5>
            <p>December 2, 2022</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.section`
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
`;
