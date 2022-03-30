import styled from "styled-components";
import { mobile } from "./mobile";
import NavLinks from "./NavLinks";

const Container = styled.div`
  @media ${mobile.sm} {
    display: none;
  }
`;

function Main() {
  return (
    <Container className="main-nav">
      <NavLinks />
    </Container>
  );
}

export default Main;
