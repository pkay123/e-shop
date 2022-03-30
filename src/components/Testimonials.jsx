import React from "react";
import styled from "styled-components";
import { testimonials } from "../data";
import TestimonialItems from "./TestimonialItems";
import { mobile } from "./mobile";

const Container = styled.div`
  max-width: 67rem;
  margin: auto;
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media ${mobile.sm} {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 500;

  @media ${mobile.sm} {
    font-size: 1.3rem;
  }
`;

function Testimonials() {
  return (
    <Container>
      <Title>Testimonials</Title>
      <GridContainer>
        {testimonials.map((items) => (
          <TestimonialItems items={items} key={items.id} />
        ))}
      </GridContainer>
    </Container>
  );
}

export default Testimonials;
