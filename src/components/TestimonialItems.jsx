import React from "react";
import styled from "styled-components";
import { mobile } from "./mobile";

const Container = styled.div`
  margin-top: 2rem;
  border: 1px solid #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  max-height: 100%;
`;

const Image = styled.img`
  max-width: 100%;
  width: 30%;
  border-radius: 50%;
  margin-top: 2rem;
`;

const Content = styled.div`
  padding: 2rem;
`;

const Desc = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.5rem;

  @media ${mobile.sm} {
    font-size: 0.9rem;
  }
`;

const Name = styled.p`
  text-align: center;
  font-weight: 500;

  @media ${mobile.sm} {
    font-size: 0.9rem;
  }
`;

function TestimonialItems({ items }) {
  return (
    <Container>
      <Image src={items.img} />

      <Content>
        <Desc>{items.desc}</Desc>
        <Name>{items.name}</Name>
      </Content>
    </Container>
  );
}

export default TestimonialItems;
