import styled from "styled-components";
import Header from "./Header";
import Overlay from "./Overlay";
import Qoute from "./Qoute";
import LogoWhite from "./LogoWhite";
import Skills from "./Skills";
import test3 from "../assets/test3.png";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import calendar from "../assets/calendar.svg";
import fifteen from "../assets/fifteen.svg";
import payday from "../assets/pay-day.svg";
import place from "../assets/place.svg";

const UsThem = () => {
  return (
    <Wrapper>
      <LogoWhite />
      <Overlay>
        <Header title="us & them" />
        <Qoute />
        <Skills />
        <div className="reviews p-5 mt-4">
          <div className="reviews-number mb-4">
            <h5>80 Reviews</h5>
          </div>
          <div className="reviews-container">
            <div className="review">
              <div className="post d-flex flex-column  gap-4 mb-2">
                <div className="content d-flex gap-3">
                  <img src={test3} alt="img" />
                  <div className="header mb-3">
                    <h5>Ali Tufan</h5>
                    <p>Published 2 months ago</p>
                  </div>
                </div>
                <p className="text-start">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <div className="btns d-flex gap-3">
                  <p>
                    <BiSolidLike /> helpful
                  </p>
                  <p className="opacity-50">
                    <BiSolidDislike /> unhelpful
                  </p>
                </div>
              </div>
              <div className="post d-flex flex-column  gap-4 mb-2">
                <div className="content d-flex gap-3">
                  <img src={test3} alt="img" />
                  <div className="header mb-3">
                    <h5>Ali Tufan</h5>
                    <p>Published 2 months ago</p>
                  </div>
                </div>
                <p className="text-start">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <div className="btns d-flex gap-3">
                  <p>
                    <BiSolidLike /> helpful
                  </p>
                  <p className="opacity-50">
                    <BiSolidDislike /> unhelpful
                  </p>
                </div>
              </div>
              <div className="more mb-5 ">
                <button type="button">
                  see more <BsArrowUpRight />{" "}
                </button>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="features p-5 d-flex justify-content-evenly gap-5">
          <div className="feature d-flex gap-3 align-items-center">
            <img src={calendar} alt="calendar " />
            <div className="title">
              <h5>date posted</h5>
              <p>posted 1 days ago</p>
            </div>
          </div>
          <div className="feature d-flex gap-3 align-items-center">
            <img src={place} alt="location " />
            <div className="title">
              <h5>location</h5>
              <p>london, uk</p>
            </div>
          </div>
          <div className="feature d-flex gap-3 align-items-center">
            <img src={fifteen} alt="hours " />
            <div className="title">
              <h5>50h / week</h5>
              <p>posted 1 days ago</p>
            </div>
          </div>
          <div className="feature d-flex gap-3 align-items-center">
            <img src={payday} alt="salary " />
            <div className="title">
              <h5>salary</h5>
              <p>$35 - $45k</p>
            </div>
          </div>
        </div>
      </Overlay>
    </Wrapper>
  );
};

export default UsThem;

const Wrapper = styled.section`
  .logo {
    span {
      color: #fff !important;
    }
  }

  .reviews {
    img {
      width: 60px;
      height: 60px;
    }
    .header {
      h5 {
        font-size: 20px;
        font-weight: 500;
        line-height: 26.04px;
      }
    }
    .more {
      button {
        background-color: #5bbb7b1a;
        color: #5bbb7b;
        width: 200px;
        padding: 0.5rem 1rem;
        border: none;
      }
    }
  }
  .features {
    p {
      margin: 0;
    }
    .feature {
      position: relative;
      &::after {
        position: absolute;
        content: "";
        background-color: #fbf7ed;
        width: 40px;
        height: 40px;
        z-index: -1;
        border-radius: 50%;
        transform: translate(50%, 25%);
      }
    }
  }
`;
