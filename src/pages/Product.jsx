import {
  Add,
  Remove,
  ShoppingCartOutlined,
  StarHalfOutlined,
  StarSharp,
} from "@material-ui/icons";
import styled from "styled-components";
import Latest from "../components/Latest";
import Deal from "../components/Deal";
import { images } from "../data";
import { useState } from "react";
import { mobile } from "../components/mobile";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: 6rem;
`;

const GridContainer = styled.div`
  max-width: 67rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  padding: 0 2rem;
  gap: 2rem;
  margin-bottom: 2rem;

  @media ${mobile.sm} {
    grid-template-columns: 1fr;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .bg {
    margin-bottom: 1rem;
    max-width: 100%;
    width: 100%;
    height: 60%;
    object-fit: cover;
  }
`;

const SmImg = styled.div`
  display: grid:
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
  @media ${mobile.sm} {
    grid-template-columns: 1fr; 
  }

  .sm {
    max-width: 100%;
    width: 25%;
    aspect-ratio: 1 / 1;
    padding: .2rem;
    cursor: pointer;
    
    


    &:hover{
      border: 1px solid #a8a8a8;
    }

    @media ${mobile.sm}{
    width: 50%;
  }
   
  }
    
  }
`;
const Image = styled.img`
  max-width: 100%;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

const Info = styled.div`
  @media ${mobile.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;

    hr {
      width: 100%;
    }
  }
`;

const Title = styled.h2`
  font-weight: 500;
  margin-bottom: 1rem;

  @media ${mobile.sm} {
    font-size: 1.3rem;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.div`
  color: #ffd700;
`;

const Rate = styled.p`
  margin: 0 1rem;
`;

const Vote = styled.p`
  color: #a8a8a8;
`;

const Price = styled.p`
  margin-bottom: 1rem;

  span {
    font-size: 3rem;

    @media ${mobile.sm} {
      font-size: 2rem;
    }
  }
`;

const Desc = styled.p`
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

const SelectContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media ${mobile.sm} {
    display: flex;
    justify-content: center;
  }
`;

const Select = styled.div`
  display: flex;
  align-items: center;
`;

const SelectTitle = styled.p``;

const SelectColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.3rem;
  cursor: pointer;
`;

const Qty = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  .icon {
    border: 1px solid #222;
    color: #222;
    margin-right: 1rem;
    cursor: pointer;
  }

  @media ${mobile.sm} {
    justify-content: center;
  }
`;

const Number = styled.p`
  margin-right: 1rem;
`;

const Button = styled.button`
  padding: 0.3rem 0.5rem;
  background-color: #222;
  border: 1px solid #222;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 1rem;

  .icon {
    margin-right: 0.5rem;
    font-size: 1.1rem;
  }

  .link {
    display: flex;
    align-items: center;
  }

  @media (hover: hover) {
    &:hover {
      font-weight: 500;
    }
  }
`;

const Para = styled.p``;

function Product() {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  return (
    <Container>
      <GridContainer>
        <ImgContainer>
          <Image src={selectedImg} className="bg" />

          <SmImg>
            {images.map((img, index) => (
              <Image
                src={img}
                className="sm"
                key={index}
                onClick={() => setSelectedImg(img)}
              />
            ))}
          </SmImg>
        </ImgContainer>

        <Info>
          <Title>Notch Sofa</Title>
          <Rating>
            <Star>
              <StarSharp />
              <StarSharp />
              <StarSharp />
              <StarSharp />
              <StarHalfOutlined />
            </Star>

            <Rate>4.5/5.0</Rate>
            <Vote>18 votes</Vote>
          </Rating>
          <Price>
            <span>&#8373; 2500.00</span>
          </Price>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>

          <hr />
          <SelectContainer>
            <Select>
              <SelectTitle>Color :</SelectTitle>
              <SelectColor color="Grey" />
              <SelectColor color="black" />
              <SelectColor color="brown" />
            </Select>
          </SelectContainer>
          <Qty>
            <Add className="icon" />
            <Number>1</Number>
            <Remove className="icon" />
          </Qty>
          <Button>
            <Link to="/cart" className="link">
              {" "}
              <ShoppingCartOutlined className="icon" />
              ADD TO CART
            </Link>
          </Button>

          <Para>
            Standard delivery in 2-4 days or Premium delivery within 2-4 hours
          </Para>
        </Info>
      </GridContainer>

      <Deal />
      <Latest />
    </Container>
  );
}

export default Product;
