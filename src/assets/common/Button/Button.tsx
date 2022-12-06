import React, { FC, ReactElement } from 'react';
import { StyledButton } from './Button.sc';

export type ButtonProps = {
  color: 'softPink' | 'darkPink';
  text: string;
  link: string;
  href?: string;
};

const Button: FC<ButtonProps> = ({ color, text, link }: ButtonProps): ReactElement => {
  return (
    <StyledButton color={color} href={link} target='_blank' rel='noopener noreferrer'>
      {text}
    </StyledButton>
  );
};
export default Button;
