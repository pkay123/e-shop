import React from "react";
import styled from "styled-components";
import { mobile } from "./mobile";

const Container = styled.div`
  background-color: #222;
  color: #fff;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;

  @media ${mobile.md} {
    text-align: center;
  }
`;

function Topbar() {
  return (
    <Container>Free Transportation and Returns over &#8373;4000.00</Container>
  );
}

export default Topbar;
