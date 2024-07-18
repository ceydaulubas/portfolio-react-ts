import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledTheme } from "../../assets/common/color";

export const StyledSocials = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 300px;
  padding: 4rem 2% 4rem 2%;
  color: ${({ theme }: StyledTheme) => theme.grey};

  @media (max-width: 425px) {
    width: 200px;
  }
`;

export const NavLink = styled(Link)``;
