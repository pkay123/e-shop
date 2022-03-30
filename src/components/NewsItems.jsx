import styled from "styled-components";
import { mobile } from "./mobile";

const Info = styled.div`
  background-color: #f1f1f1;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Container = styled.div`
  margin-top: 1rem;
  position: relative;
  flex: 1;
  cursor: pointer;

  @media (hover: hover) {
    &:hover ${Info} {
      opacity: 2;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  max-width: 100%;
  aspect-ratio: 1 / 0.8;
  object-fit: cover;

  @media ${mobile.sm} {
    aspect-ratio: 1 / 1;
  }
`;

const Title = styled.h3`
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: center;
  cursor: pointer;
`;

const Author = styled.p`
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  padding: 0.3rem 0.5rem;
  background-color: #222;
  color: #fff;
  border: 1px solid #222;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      font-weight: 500;
    }
  }
`;

function NewsItems({ items }) {
  return (
    <Container>
      <Image src={items.img} />

      <Info>
        <Title>{items.title}</Title>
        <Author>{items.author}</Author>

        <Button>{items.btn}</Button>
      </Info>
    </Container>
  );
}

export default NewsItems;
