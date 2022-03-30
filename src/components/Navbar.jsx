import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import { mobile } from "./mobile";
import MobileToggle from "./MobileToggle";
import Topbar from "./Topbar";

const Container = styled.div`
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Navigation = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media ${mobile.sm} {
    padding: 0;
  }
`;
const Logo = styled.h2`
  font-weight: 600;

  @media ${mobile.sm} {
    font-size: 1.3rem;
    padding: 0.5rem;
  }
`;

const Nav = styled.div``;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;

  .icons {
    color: #222;
    cursor: pointer;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListItems = styled.li`
  list-style: none;

  .link {
    padding: 0.5rem;
  }

  &:nth-child(1) {
    font-size: 0.9rem;
    @media ${mobile.sm} {
      &:nth-child(1) {
        display: none;
      }
    }
  }

  &:nth-child(2) {
    border: 1px solid #222;
    background-color: #222;
    color: #fff;
    font-size: 0.9rem;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;

    @media ${mobile.sm} {
      &:nth-child(2) {
        display: none;
      }
    }
  }

  @media (hover: hover) {
    &:nth-child(2):hover {
      font-weight: 500;
    }
  }

  @media ${mobile.sm} {
    .cart-icon {
      margin-right: 3rem;
    }
  }
`;

function Navbar() {
  return (
    <Container>
      <Topbar />
      <Navigation>
        <Logo>
          <Link to="/" className="link">
            CodShop
          </Link>
        </Logo>

        <Nav>
          <Main />
          <MobileToggle />
        </Nav>

        <Right>
          <RightContainer>
            <List>
              <ListItems>
                <Link to="/login" className="link">
                  Login
                </Link>
              </ListItems>
              <ListItems>
                <Link to="/register" className="link">
                  Register
                </Link>
              </ListItems>
              <ListItems>
                <Link to="/cart" className="link">
                  <ShoppingCartOutlined className="cart-icon" />
                </Link>
              </ListItems>
            </List>
          </RightContainer>
        </Right>
      </Navigation>
    </Container>
  );
}

export default Navbar;
