import styled from "styled-components";
import { colors } from "../../global";  

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 45vw;
  position: fixed;
  background-color: ${colors.bgMenu};
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const StyledLink = styled.a`
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  color: ${colors.black};
  text-decoration: none;

  @media (max-width: 400px) {
    font-size: 2rem;
  }

  :hover {
    color: ${colors.brown};
  }
`;
