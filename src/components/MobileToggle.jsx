import { Close, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "./mobile";
import NavLinks from "./NavLinks";

const Container = styled.div`
  @media ${mobile.mm} {
    display: none;
  }

  ul {
    display: block;
    position: absolute;
    padding: 0.7rem;
    top: 4rem;
    right: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background: #222;
  }

  a {
    display: block;
    text-align: left;
    color: #fff;
  }

  .icon {
    position: absolute;
    top: 57%;
    right: 2%;
  }
`;

function MobileToggle() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobile = () => setClick(false);

  return (
    <Container className="mobile-nav" onClick={handleClick}>
      {click ? <Close className="icon" /> : <Menu className="icon" />}
      {click && <NavLinks isMobile={true} closeMobileMenu={closeMobile} />}
    </Container>
  );
}

export default MobileToggle;
