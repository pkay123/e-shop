import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CatItems from "./CatItems";
import { mobile } from "./mobile";

const Container = styled.div`
  max-width: 67rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1.3rem;
  gap: 0.5rem;
  margin-top: 2rem;

  @media ${mobile.md} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mobile.sm} {
    grid-template-columns: 1fr 1fr;
  }
`;

function Categories() {
  return (
    <Container>
      {categories.map((items) => (
        <CatItems items={items} key={items.id} />
      ))}
    </Container>
  );
}

export default Categories;
