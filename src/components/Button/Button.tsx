import React from 'react';
import {Button as MuiButton} from '@mui/material'
export interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({text}) => {
    return (
        <MuiButton variant='contained' color='primary'>{text}</MuiButton>
    )
}

export default Button;