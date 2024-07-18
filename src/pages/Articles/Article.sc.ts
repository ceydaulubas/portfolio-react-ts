import styled from 'styled-components';
import { Colors, colorTheme, StyledTheme } from '../../assets/common/color';

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArticleBox = styled.a`
  display: flex;
  align-items: center;
  width: 70%;
  max-width: 800px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${({ theme }: StyledTheme) => theme.styledText};
  border-radius: 5px;
  text-decoration: none;
  /* color: #333; */
  color: ${({ theme }: StyledTheme) => theme.styledText};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color:${({ theme }: StyledTheme) => theme.howerBackgroundColor};
  }
`;

export const ArticleImage = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 10px;
  object-fit: contain;
`;

export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ArticleTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${({ theme }: StyledTheme) => theme.contactTitle};
`;

export const ArticleSubject = styled.p`
  font-size: 14px;
  color: ${({ theme }: StyledTheme) => theme.styledText};
`;