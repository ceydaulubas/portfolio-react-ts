import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledTheme } from '../../assets/common/color';

export const StyledSocials = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 15rem;
  padding: 4rem 2% 4rem 2%;
  color: ${({ theme }: StyledTheme) => theme.grey};
`;

export const NavLink = styled(Link)``;
