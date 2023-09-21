import Header from "./Header";
import Overlay from "./Overlay";
import LogoWhite from "./LogoWhite";
import styled from "styled-components";
import AccordionSet from "./Accordion";

const FAQs = () => {
  return (
    <Wrapper>
      <LogoWhite />
      <Overlay>
        <Header title={"Frequently Asked Questions"} />
        <section className="bar d-flex p-5">
          <div className="btns py-1 px-3 d-flex gap-2 mx-auto">
            <button className="p-2">for everyone</button>
            <button className="p-2 special"> for clients</button>
            <button className="p-2">for freelancers</button>
          </div>
        </section>
        <section className="payments-accordions p-5">
          <h5>payments</h5>
          <AccordionSet />
        </section>
        <section className="payments-accordions p-5">
          <h5>Suggestions</h5>
          <AccordionSet />
        </section>
        <section className="payments-accordions p-5">
          <h5>Suggestions</h5>
          <AccordionSet />
        </section>
      </Overlay>
    </Wrapper>
  );
};

export default FAQs;

const Wrapper = styled.section`
  .logo {
    span {
      color: #fff !important;
    }
  }
  .bar {
    .btns {
      background-color: #ffede8;
      border-radius: 60px;
      button {
        border: none;
        background-color: #ffede8;
        border-radius: 60px;
      }
      .special {
        background-color: #fff !important ;
      }
    }
  }
`;
