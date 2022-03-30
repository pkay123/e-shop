import styled from "styled-components";
import { mobile } from "./mobile";

const Container = styled.div`
  max-width: 63rem;
  margin: auto;
  background-color: #f1f1f1;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  @media ${mobile.sm} {
    flex-direction: column;
    height: fit-content;
  }
`;

const Info = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  margin-left: 3rem;

  @media ${mobile.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    justify-content: center;
  }
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const Price = styled.p``;

const Text = styled.p`
  margin-bottom: 0.5rem;
  width: 70%;

  @media ${mobile.sm} {
    text-align: center;
  }
`;

const ImgContainer = styled.div`
  max-height: 100%;
  flex: 1;

  @media ${mobile.sm} {
    height: fit-content;
    margin-top: 3rem;
  }
`;

const Image = styled.img`
  max-width: 70%;
  width: 70%;

  @media ${mobile.sm} {
    max-width: 100%;
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 0.3rem 0.5rem;
  background-color: #222;
  color: #fff;
  border: 1px solid #222;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: 500;

  @media (hover: hover) {
    &:hover {
      font-weight: 500;
    }
  }
`;

function Discount() {
  return (
    <Container>
      <FlexContainer>
        <Info>
          <Title>Beautiful Sofa</Title>
          <Price>from &#8373;3000</Price>
          <Text>Long Lasting and Comfortable to Use. This is Only For You</Text>

          <Button>SHOP NOW</Button>
        </Info>

        <ImgContainer>
          <Image src="assets/slides-2.png" />
        </ImgContainer>
      </FlexContainer>
    </Container>
  );
}

export default Discount;
