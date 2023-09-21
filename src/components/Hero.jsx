import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="content d-flex flex-column justify-content-center align-items-center">
        <h1 className="title mb-5">
          We’re building a better freelancer marketplace.
        </h1>
        <p>
          5% flat fee, improved client/freelancer rating system and human
          mediators. No nonsense.
        </p>
        <h4 className="my-4">Coming Soon.</h4>
        <div className="btns d-flex gap-4">
          <button type="button" className="bg-white py-2 px-4">
            learn more
          </button>
          <button type="button" className="special-btn py-2 px-4">
            pre-register
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.main`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    max-width: 640px;
    .title {
      font-size: 54px;
      line-height: 71.84px;
      font-weight: 700;
      text-transform: none;
    }
    p {
      font-size: 24px;
      line-height: 41.69px;
      font-weight: 400;
    }
    h4 {
      font-size: 24px;
      line-height: 41.69px;
      font-weight: 700;
    }
    .btns {
      button {
        text-decoration: none;
        line-height: 28px;
        font-weight: 700;
        font-size: 15px;
        text-transform: capitalize;
        border: none;
        border-radius: 4px;

        width: 152px;
      }
      .special-btn {
        background-color: #5bbb7b;
        color: #ffffff;
      }
    }
  }
`;
