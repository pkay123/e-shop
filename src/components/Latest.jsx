import styled from "styled-components";
import { latest } from "../data";
import LatestItems from "./LatestItems";
import { mobile } from "./mobile";

const Container = styled.div`
  max-width: 67rem;
  margin: auto;
  margin-top: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.5rem;

  @media ${mobile.md} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mobile.sm} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 500;
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.3rem 0.5rem;
  background-color: #222;
  color: #fff;
  border: 1px solid #222;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    font-weight: 500;
  }
`;

function Latest() {
  return (
    <Container>
      <Title>Latest Products</Title>
      <GridContainer>
        {latest.map((items) => (
          <LatestItems items={items} key={items.key} />
        ))}
      </GridContainer>

      <Button>LOAD MORE</Button>
    </Container>
  );
}

export default Latest;
