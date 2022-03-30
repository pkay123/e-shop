import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "./mobile";

const Container = styled.div`
  margin-top: 1rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  aspect-ratio: 1 / 0.8;
  object-fit: cover;

  @media ${mobile.sm} {
    aspect-ratio: 1 / 1;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const Content = styled.div``;

const IconsContainer = styled.div`
  display: flex;
  color: #a8a8a8;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Text = styled.p`
  position: absolute;
  top: 1.3rem;
  bottom: 0;
  opacity: 0;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0.5rem;

  @media (hover: hover) {
    &:hover ${Text} {
      opacity: 2;
    }

    &:hover {
      color: #444;
    }
  }

  .icon {
    font-size: 1.1rem;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  border: 1px solid #a8a8a8;
`;

const Title = styled.p`
  margin-bottom: 0.2rem;
  cursor: pointer;
`;

const Price = styled.p`
  color: #a8a8a8;
`;

function LatestItems({ items }) {
  return (
    <Container>
      <Image src={items.img} />

      <Info>
        <Content>
          <Title>
            <Link to="/product" className="link">
              {items.title}
            </Link>
          </Title>
          <Price>&#8373;{items.price}</Price>
        </Content>

        <IconsContainer>
          <Icons>
            <Link to="/cart" className="link">
              <Circle />

              <ShoppingCartOutlined className="icon" />
            </Link>
            <Text>Cart</Text>
          </Icons>
          <Icons>
            <Link to="/cart" className="link">
              <Circle /> <FavoriteBorderOutlined className="icon" />{" "}
            </Link>
            <Text>Wish</Text>
          </Icons>
        </IconsContainer>
      </Info>
    </Container>
  );
}

export default LatestItems;
