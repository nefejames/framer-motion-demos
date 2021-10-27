import { useState } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import Burger from "./Burger";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav>
      <Burger open={open} setOpen={setOpen} />
      <NavLinks open={open} setOpen={setOpen} />
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  padding: 0 2rem;
  justify-content: end;
  align-items: center;
  height: 10vh;
  min-height: 100px;
  background-color: #ffb;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;
