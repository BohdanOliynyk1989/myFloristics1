import React, { useState, useRef } from "react";

import Hamburger from "../Hamburger/Hamburger";
import { StyledMenu, StyledLink } from "./Menu.styled";

import { useOnClickOutside } from "../../hooks";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        <StyledLink onClick={() => close()} href="#about">Обо мне</StyledLink>
        <StyledLink onClick={() => close()} href="#progects">Проекты</StyledLink>
        <StyledLink onClick={() => close()} href="#contacts">Контакты</StyledLink>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
