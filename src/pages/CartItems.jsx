import { Add, FavoriteBorderOutlined, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../components/mobile";

const Container = styled.div`
  margin-top: 1.5rem;
`;

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 180px 120px;
  grid-template-rows: 35px 40px;
  margin: 0px 0px 0px 1rem;
  margin-bottom: 1.1rem;

  @media ${mobile.sm} {
    grid-template-columns: 1fr;
  }
`;

const InfoContainer = styled.div`
  @media ${mobile.sm} {
    display: flex;
    align-items: center;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;

  @media ${mobile.sm} {
    width: 100px;
    height: 120px;
    margin-top: 5rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;


  @media ${mobile.sm}{
    margin-bottom: 0;
`;

const Title = styled.p``;

const Brand = styled.p``;

const Qty = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  .qty-icon {
    color: #444;
    margin-right: 0.3rem;
    cursor: pointer;

    @media ${mobile.sm} {
      font-size: 0.9rem;
    }
  }

  @media ${mobile.sm} {
    margin-top: -1rem;
    margin-left: 6.6rem;
  }
`;

const Number = styled.p`
  margin-right: 0.3rem;
`;

const Price = styled.p`
  margin-top: 2rem;

  @media ${mobile.sm} {
    margin-top: -1rem;
    margin-left: 6.8rem;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;

const Fav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;

  .fav-icon {
    border: 1px solid #a8a8a8;
    border-radius: 5px;
    padding: 0.2rem;
    width: 30px;
    height: 30px;
    margin-right: 0.2rem;
    color: #444;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        background: #444;
        color: #fff;
      }
    }

    @media ${mobile.sm} {
      width: 28px;
      height: 28px;
    }
  }

  @media ${mobile.sm} {
    margin-top: 0;
    margin-left: 6.8rem;
  }
`;
const Tap = styled.p`
  border: 1px solid #a8a8a8;
  border-radius: 5px;
  padding: 0.2rem;
  cursor: pointer;
  background-color: #222;
  color: #fff;

  @media (hover: hover) {
    &:hover {
      font-weight: 500;
    }
  }
`;

function CartItems({ items }) {
  return (
    <Container>
      <CartContainer>
        <InfoContainer>
          <ImgContainer>
            <Image src={items.img} />

            <Info>
              <Title>{items.title}</Title>
              <Brand>Brand: {items.brand}</Brand>
            </Info>
          </ImgContainer>
        </InfoContainer>
        <InfoContainer>
          <Qty>
            <Add className="qty-icon" />
            <Number>{items.qty}</Number>
            <Remove className="qty-icon" />
          </Qty>
        </InfoContainer>
        <InfoContainer>
          <Price>&#8373; {items.price}</Price>
        </InfoContainer>
        <InfoContainer>
          <Fav>
            <FavoriteBorderOutlined className="fav-icon" />

            <Tap>Remove</Tap>
          </Fav>
        </InfoContainer>
      </CartContainer>
    </Container>
  );
}

export default CartItems;
