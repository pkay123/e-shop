import {
  ArrowRightAltOutlined,
  Facebook,
  GpsFixedOutlined,
  Instagram,
  Language,
  MailOutlined,
  Phone,
  Pinterest,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "./mobile";

const MainContainer = styled.div`
  background-color: #f1f1f1;
`;

const Container = styled.div`
  max-width: 67rem;
  padding: 2rem;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 160px 1fr 1fr;
  margin-top: 3rem;

  @media ${mobile.md} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mobile.sm} {
    grid-template-columns: 1fr;
  }
`;

const Home = styled.div`
  margin-bottom: 1rem;
`;

const Left = styled.div`
  margin-bottom: 1rem;
`;

const Center = styled.div`
  flex: 0.5;
  margin-bottom: 1rem;

  .icons {
    margin-right: 0.5rem;
    color: #222;
  }
`;

const Right = styled.div``;

const Social = styled.div`
  display: flex;
  align-items: center;
`;

const Icons = styled.div`
  margin-right: 0.5rem;
  color: #222;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #222;

  .icon {
    background: #222;
    color: #fff;
    cursor: pointer;
  }
`;

const Input = styled.input`
  border: none;
  padding: 0.25rem 0.3rem;
  outline: none;
  background-color: transparent;

  &::placeholder {
    font-size: 0.9rem;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  margin-bottom: 1rem;

  @media ${mobile.sm} {
    font-size: 1.3rem;
  }
`;

const Logo = styled.h2`
  font-weight: 600;
  margin-bottom: 1rem;

  @media ${mobile.sm} {
    font-size: 1.3rem;
  }
`;

const Desc = styled.p`
  line-height: 1.5rem;
  margin-bottom: 1rem;
  width: 90%;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  line-height: 2rem;
  cursor: pointer;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <MainContainer>
      <Container>
        <Home>
          <Logo>
            <Link to="/" className="link">
              CodShop
            </Link>
          </Logo>

          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </Desc>

          <Social>
            <Icons>
              <Facebook />
            </Icons>
            <Icons>
              <Twitter />
            </Icons>
            <Icons>
              <Instagram />
            </Icons>
            <Icons>
              <Pinterest />
            </Icons>
            <Icons>
              <YouTube />
            </Icons>
          </Social>
        </Home>
        <Left>
          <Title>People</Title>
          <List>
            <ListItems>My Account</ListItems>
            <ListItems>Check Out</ListItems>
            <ListItems>Help</ListItems>
            <ListItems>Support</ListItems>
            <ListItems>Faq</ListItems>
          </List>
        </Left>
        <Center>
          <Title>Contact Us</Title>
          <List>
            <ListItems>
              <Room className="icons" /> Agona Swedru, Yaabem
            </ListItems>
            <ListItems>
              <GpsFixedOutlined className="icons" /> C0-1000-1000
            </ListItems>
            <ListItems>
              <Phone className="icons" /> +233 234 4567
            </ListItems>
            <ListItems>
              <MailOutlined className="icons" /> info@paa.dev
            </ListItems>
            <ListItems>
              <Language className="icons" /> www.codshop.com
            </ListItems>
          </List>
        </Center>
        <Right>
          <Title>Join For Newsletter</Title>

          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            expedita?
          </Desc>

          <Content>
            <Input type="email" placeholder="Enter email....." />

            <ArrowRightAltOutlined className="icon" />
          </Content>
        </Right>
      </Container>
    </MainContainer>
  );
}

export default Footer;
