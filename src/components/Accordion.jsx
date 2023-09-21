import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  width: 100%;
  border: none;
  border-radius: 4px;
  margin: 16px;
`;

const AccordionHeader = styled.div`
  background-color: #f1fcfa;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  padding: 8px;
  text-align: start;
  background-color: #f1fcfa;

  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const PlusIcon = styled.span`
  font-size: 24px;
  transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
  transition: transform 0.3s ease-in-out;
`;

const Accordion = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        <span>{title}</span>
        <PlusIcon isOpen={isOpen}>+</PlusIcon>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{content}</AccordionContent>
    </AccordionContainer>
  );
};

const AccordionSet = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const accordions = [
    {
      title: "What methods of payments are supported?",
      content: (
        <p>
          Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
          hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
          volutpat nec sit vel donec. Sagittis, id volutpat erat vel.
        </p>
      ),
    },
    {
      title: "Can I cancel at anytime?",
      content: <p>Content for Accordion 2</p>,
    },
    {
      title: "How do I get a receipt for my purchase?",
      content: <p>Content for Accordion 3</p>,
    },
    {
      title: "Which license do I need?",
      content: <p>Content for Accordion 4</p>,
    },
    {
      title: "How do I get access to a theme I purchased?",
      content: <p>Content for Accordion 5</p>,
    },
  ];

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          title={accordion.title}
          content={accordion.content}
          isOpen={index === activeIndex}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default AccordionSet;
