import React from "react";
import styled from "styled-components";
import { mobile } from "./mobile";

const Container = styled.div`
  position: relative;

  @media ${mobile.md} {
    display: grid;
    justify-items: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  aspect-ratio: 1 / 0.8;
  object-fit: cover;

  @media ${mobile.sm} {
    aspect-ratio: 1 / 1;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  text-transform: uppercase;
`;

const Button = styled.button`
  font-size: 0.9rem;
  padding: 0.3rem 0.5rem;
  background-color: #222;
  border: 1px solid #222;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;

  &:hover {
    font-weight: 500;
  }
`;

function CatItems({ items }) {
  return (
    <Container>
      <Image src={items.img} />

      <Content>
        <Title>{items.title}</Title>
        <Button>{items.btn}</Button>
      </Content>
    </Container>
  );
}

export default CatItems;
