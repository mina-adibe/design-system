import { Button as MuiButton } from '@mui/material';
import { FC } from 'react';

export interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => (
  <MuiButton variant='contained' color='primary'>
    {text}
  </MuiButton>
);

export default Button;
