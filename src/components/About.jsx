import styled from "styled-components";
import Header from "./Header";
import Overlay from "./Overlay";
import Qoute from "./Qoute";
import LogoWhite from "./LogoWhite";
import Skills from "./Skills";
import test3 from "../assets/test3.png";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";

const About = () => {
  return (
    <Wrapper>
      <LogoWhite />
      <Overlay>
        <Header title={"about tskr"} />
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
          <div className="reviews-form">
            <h5>Add a Review</h5>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form action="#" method="post">
              <div className="form-group d-flex flex-column">
                <label for="review">Comment</label>
                <textarea
                  id="review"
                  name="review"
                  rows="8"
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="form-group d-flex flex-column">
                  <label for="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ali Tufan"
                    required
                  />
                </div>
                <div className="form-group d-flex flex-column">
                  <label for="rating">email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <checkbox>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  className=" m-2 mt-4"
                />
                Save my name, email, and website in this browser for the next
                time I comment.
              </checkbox>
              <button type="submit" className="send mt-3">
                send <BsArrowUpRight />
              </button>
            </form>
          </div>
        </div>
      </Overlay>
    </Wrapper>
  );
};

export default About;

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
    .reviews-form {
      h5 {
        font-size: 20px;
        font-weight: 500;
        line-height: 26.04px;
      }
      p {
        font-size: 15px;
        line-height: 28px;
      }
      label {
        font-size: 16px;
        line-height: 28px;
        font-weight: 500;
      }
      input[type="text"],
      input[type="email"],
      textarea {
        border-radius: 6px;
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
      }
      .send {
        background-color: #5bbb7b1a;
        color: #5bbb7b;
        width: 200px;
        padding: 0.5rem 1rem;
        border: none;
      }
    }
  }
`;
