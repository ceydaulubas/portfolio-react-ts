import React, { FC, ReactElement } from 'react';
import { StyledButton } from './Button.sc';

export type ButtonProps = {
  color: 'softPink' | 'grey';
  text: string;
  link?: string;
  href?: string;
  type?: string;
  onClick?: any;
};

const Button: FC<ButtonProps> = ({ color, text, link, onClick }: ButtonProps): ReactElement => {
  return (
    <StyledButton color={color} href={link} target='_blank' rel='noopener noreferrer' onClick={onClick}>
      {text}
    </StyledButton>
  );
};
export default Button;
