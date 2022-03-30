import styled from "styled-components";
import { news } from "../data";
import { mobile } from "./mobile";
import NewsItems from "./NewsItems";

const Container = styled.div`
  max-width: 67rem;
  margin: auto;
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
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

  @media ${mobile.sm} {
    font-size: 1.3rem;
  }
`;

function News() {
  return (
    <Container>
      <Title>Latest News</Title>

      <GridContainer>
        {news.map((items) => (
          <NewsItems items={items} key={items.id} />
        ))}
      </GridContainer>
    </Container>
  );
}

export default News;
