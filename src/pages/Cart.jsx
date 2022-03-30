import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  ArrowRightAltOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { cart } from "../data";
import CartItems from "./CartItems";
import { mobile } from "../components/mobile";
import { Link } from "react-router-dom";
import Latest from "../components/Latest";
import News from "../components/News";

const Container = styled.div`
  margin-top: 3rem;
  max-width: 67rem;
  margin: auto;
  padding: 2rem;

  @media ${mobile.sm} {
    hr {
      width: 100%;
    }
  }
`;

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 700px 270px;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media ${mobile.lg} {
    grid-template-columns: 1fr;
  }

  @media ${mobile.sm} {
    grid-template-columns: 1fr;
  }
`;

const Inner = styled.div`
  border: 1px solid #222;
  border-radius: 20px;
  margin-top: 2rem;

  @media ${mobile.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 180px 120px;
  padding: 1rem 0px 1rem 0px;
  margin: 0px 0px 0px 1rem;

  @media ${mobile.sm} {
    display: none;
  }
`;

const Title = styled.h2`
  font-weight: 500;
`;

const Head = styled.p`
  letter-spacing: 0.1rem;
`;

const Coupon = styled.div``;

const CouponContainer = styled.div`
  margin-top: 2rem;
`;

const Content = styled.div`
  padding: 2rem;
  border: 1px solid #222;
  border-radius: 20px;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #222;
  padding: 0.2rem 0.3rem;

  .icon {
    background-color: #222;
    border: 1px solid #222;
    color: #fff;
    cursor: pointer;
  }
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

const CouponTitle = styled.p`
  @media ${mobile.sm} {
    font-size: 0.9rem;
  }
`;

const Total = styled.p`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media ${mobile.sm} {
    font-size: 0.9rem;
  }
`;

const Pay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  width: 25%;
  height: 20%;

  @media ${mobile.md} {
    width: 15%;
  }
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${mobile.sm} {
    flex-direction: column;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.3rem 0.5rem;
  background-color: #222;
  border: 1px solid #222;
  cursor: pointer;
  margin: 1rem;
  border-radius: 5px;

  .btn-icon {
    font-size: 0.9rem;
  }

  &:first-child {
    background-color: #222;
    color: #fff;

    &:hover {
      font-weight: 500;
    }
  }

  &:last-child {
    background-color: transparent;

    @media (hover: hover) {
      &:hover {
        font-weight: 500;
      }
    }
  }

  @media ${mobile.sm} {
    margin: 0.3rem;
  }
`;

function Cart() {
  return (
    <Container>
      <Title>Shopping Cart</Title>

      <CartContainer>
        <Inner>
          <InnerContainer>
            <Head>Product</Head>
            <Head>Quantity</Head>
            <Head>Price</Head>
            <Head></Head>
          </InnerContainer>
          {cart.map((items) => (
            <CartItems items={items} key={items.id} />
          ))}

          <hr />

          <Btn>
            <Button>
              <ArrowBackIosOutlined className="btn-icon" />{" "}
              <Link to="/shop" className="link">
                SHOP MORE
              </Link>
            </Button>
            <Button>
              CHECKOUT <ArrowForwardIosOutlined className="btn-icon" />
            </Button>
          </Btn>
        </Inner>
        <Coupon>
          <CouponContainer>
            <Content>
              <CouponTitle>Have Coupon?</CouponTitle>

              <InputContainer>
                <Input type="text" placeholder="Coupon Code" />

                <ArrowRightAltOutlined
                  className="icon"
                  style={{ color: "#fff" }}
                />
              </InputContainer>
            </Content>

            <Content>
              <Total>
                Total Price: <span>&#8373;4450.00</span>
              </Total>
              <Total>
                Discount: <span>&#8373;450.00</span>
              </Total>
              <Total>
                Total: <span>&#8373;4000.00</span>
              </Total>

              <hr />

              <Pay>
                <Image src="assets/pay-1.png" className="payimg" />
                <Image src="assets/pay-2.png" className="payimg" />
                <Image src="assets/pay-3.png" className="payimg" />
                <Image src="assets/pay-1.png" className="payimg" />
              </Pay>
            </Content>
          </CouponContainer>
        </Coupon>
      </CartContainer>

      <Latest />
      <News />
    </Container>
  );
}

export default Cart;
