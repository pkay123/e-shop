import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { slideItems } from "../data";
import { mobile } from "./mobile";

const Container = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: auto;
  z-index: 2;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

  @media ${mobile.lg} {
    padding: 3.5rem;
  }
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 550px;
  align-items: center;

  @media ${mobile.lg} {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media ${mobile.md} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mobile.sm} {
    grid-template-columns: 1fr;
  }
`;

const ImgContainer = styled.div`
  max-height: 100%;
  height: auto;
  flex: 0.5;
`;

const Image = styled.img`
  @media ${mobile.lg} {
    max-width: 100%;
    width: 70%;
  }

  @media ${mobile.md} {
    max-width: 100%;
    width: 70%;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 8rem;

  @media ${mobile.lg} {
    padding: 0;
  }

  @media ${mobile.md} {
    padding: 0;
  }

  @media ${mobile.sm} {
    display: none;
  }
`;

const Title = styled.h1`
  line-height: 2.3rem;
  margin-bottom: 1rem;

  @media ${mobile.lg} {
    font-size: 2.2rem;
  }

  @media ${mobile.md} {
    font-size: 1.3rem;
  }
`;

const Desc = styled.p`
  margin-bottom: 1rem;
  line-height: 1.5rem;

  @media ${mobile.md} {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 0.3rem 0.5rem;
  background-color: #444;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #fff;
  margin-bottom: 1rem;

  @media (hover: hover) {
    &:hover {
      font-weight: 500;
    }
  }
`;

function Slides() {
  const [slideIndex, setSlideIndex] = useState(0);

  const click = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => click("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((items) => (
          <Slide key={items.id}>
            <InfoContainer>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Button>{items.btn}</Button>
            </InfoContainer>

            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => click("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slides;
