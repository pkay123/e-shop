import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "./mobile";

const List = styled.ul`
  display: flex;
`;

const ListItems = styled.li`
  list-style: none;

  .link {
    font-size: 0.9rem;
    padding: 0.5rem;
    cursor: pointer;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background-color: #222;
      height: 2px;
      width: 0;
      left: 0;
      bottom: -10px;
    }

    @media ${mobile.md} {
      &::after {
        position: relative;
      }
    }

    @media (hover: hover) {
      &:hover::after {
        width: 100%;
      }
    }
  }
`;

const ListItemsContainer = styled.div`
  display: flex;

  
    @media ${mobile.mm} {
      display: none;
    }
  }
`;

function NavLinks(props) {
  return (
    <List>
      <ListItems
        className="smallscreen"
        style={{ fontWeight: "300", marginBottom: "1rem" }}
      >
        <ListItemsContainer>
          <Link
            to="/login"
            className="link"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="link"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Register
          </Link>
        </ListItemsContainer>
      </ListItems>
      <ListItems>
        <Link
          to="/"
          className="link"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Home
        </Link>
      </ListItems>
      <ListItems>
        <Link
          to="/shop"
          className="link"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Shop
        </Link>
      </ListItems>
      <ListItems>
        <Link
          to="/"
          className="link"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          About
        </Link>
      </ListItems>
      <ListItems>
        <Link
          to="/"
          className="link"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Blog
        </Link>
      </ListItems>
      <ListItems>
        <Link
          to="/"
          className="link"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Contact
        </Link>
      </ListItems>
    </List>
  );
}

export default NavLinks;
