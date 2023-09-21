import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Hero,
  Footer,
  Logo,
  About,
  Contact,
  FAQs,
  Newsroom,
  UsThem,
} from "../components";
import styled from "styled-components";

const links = [
  { id: 1, text: "About Tskr", url: "about" },
  { id: 2, text: "Us & Them", url: "us-and-them" },
  { id: 3, text: "FAQs", url: "faq" },
  { id: 4, text: "Newsroom", url: "newsroom" },
  { id: 5, text: "Contact", url: "contact" },
];

export const Landing = () => {
  const [overlayType, setOverlayType] = useState(null);

  const toggleOverlay = (type) => {
    setOverlayType(type);
  };

  const renderOverlay = () => {
    switch (overlayType) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "faq":
        return <FAQs />;
      case "newsroom":
        return <Newsroom />;
      case "us-and-them":
        return <UsThem />;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <Navbar className="d-flex justify-content-between m-5  ">
        <Logo />
        <div className="nav-links d-flex gap-4 bg-white py-2 px-4 ">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link onClick={() => toggleOverlay(link.url)}>
                  <p>{link.text}</p>
                </Link>
              </li>
            );
          })}
        </div>
      </Navbar>
      <Hero />
      <Footer />

      {renderOverlay()}
    </Wrapper>
  );
};

const Navbar = styled.nav`
  .nav-links {
    background-color: #ffffff;
    border-radius: 15px;
    a {
      text-decoration: none;
      color: #222222;
      p {
        margin: 0;
        font-weight: 700;
        font-size: 24px;
        line-height: 41.69px;
      }
    }
  }
`;

const Wrapper = styled.div``;
