import styled from "styled-components";
import tick from "../assets/tick.svg";
import test from "../assets/test.png";
import test2 from "../assets/test2.png";
import SocialMedia from "./SocialMedia";
import { GrPrevious } from "react-icons/gr";

const skills1 = [
  "Become a UI/UX designer",
  "Learn Figma skills",
  "Build a UI project from beginning to end",
  "Work with colors & fonts",
  "Create your own UI Kit",
];
const skills2 = [
  "Build & test a complete mobile app",
  "Learn to design mobile apps & websites",
  "Design 3 different logos",
  "Create low-fidelity wireframe",
  "Downloadable exercise files",
];

const requirments = [
  "We do not require any previous experience or pre-defined skills to take this course.A great orientation would be enough to master UI/UX design.",
  "A computer with a good internet connection.",
  "Adobe Photoshop (OPTIONAL)",
];

const Skills = () => {
  return (
    <Wrapper className="skills p-5">
      <h5>What you'll learn</h5>
      <div className="lists d-flex justify-content-between mb-5">
        <ul>
          {skills1.map((skill, index) => {
            return (
              <li key={index} className="d-flex gap-2 align-items-center">
                <img src={tick} alt="icon" />
                <p>{skill}</p>
              </li>
            );
          })}
        </ul>
        <ul>
          {skills2.map((skill, index) => {
            return (
              <li key={index} className="d-flex gap-2 align-items-center">
                <img src={tick} alt="icon" />
                <p>{skill}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="img ">
        <img src={test} alt="img" />
      </div>
      <div className="requirments mt-5  accordion">
        <h5>requirments</h5>
        <ul>
          {requirments.map((req, index) => {
            return (
              <li key={index}>
                <p>{req}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="share-post  d-flex  align-items-center gap-1">
        <h5 className="my-5">share this post</h5>
        <SocialMedia />
      </div>
      <hr />
      <div className="post d-flex gap-4 mb-4">
        <img src={test2} alt="img" />
        <div className="content">
          <div className="header mb-3">
            <h5>brooklyn simmons</h5>
            <p>medical assistant</p>
          </div>
          <p>
            Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies
            risus, vel rutrum erat commodo ut. Praesent finibus congue euismod.
            Nullam scelerisque massa vel augue placerat, a tempor sem egestas. ,
            Curabitur placerat finibus lacus.
          </p>
        </div>
      </div>
      <hr />
      <div className="prev-and-next d-flex justify-content-between">
        <div className="prev d-flex gap-2 align-items-start">
          <GrPrevious />
          <div type="button">
            <h5>previous post</h5>
            <p>Given Set was without from god divide rule Hath</p>
          </div>
        </div>
        <div className="next d-flex gap-2 align-items-start">
          <div type="button">
            <h5 className="text-end">Next Post</h5>
            <p>Tree earth fowl given moveth deep lesser After</p>
          </div>
          <GrPrevious />
        </div>
      </div>
      <hr />
    </Wrapper>
  );
};

export default Skills;

const Wrapper = styled.section`
  h5 {
    font-size: 17px;
    font-weight: 500;
    line-height: 28px;
  }
  p {
    font-size: 15px;
    line-height: 46px;
    margin: 0;
    text-align: left;
  }
  .img {
    img {
      width: 100%;
    }
  }
  .requirments {
    ul,
    li {
      list-style-type: disc !important;
    }
    h5 {
      font-size: 17px;
      font-weight: 500;
      line-height: 28px;
    }
    p {
      font-size: 15px;
      line-height: 46px;
      margin: 0;
    }
  }
  hr {
    color: #e9e9e9;
    height: 1px;
    width: 100%;
  }
  .post {
    img {
      width: 70px;
      height: 70px;
    }
    .content {
      .header {
        h5 {
          font-size: 17px;
          font-weight: 500;
          line-height: 28px;
        }
        p {
          font-size: 14px;
          line-height: 28px;
        }
      }
      p {
        font-size: 15px;
        line-height: 28px;
      }
    }
  }
  .prev-and-next {
    .prev {
      svg {
        font-size: 0.75rem;
        margin-top: 8px;
      }
    }
    .next {
      svg {
        font-size: 0.75rem;
        margin-top: 8px;
        transform: rotate(180deg);
      }
    }
  }
`;
