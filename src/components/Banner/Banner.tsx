import { Box, styled, Typography } from '@mui/material';
import React from 'react';

export interface BannerProps {
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  title: string;
  subTitle?: string;
}

const BannerShape = styled(Box)(({ theme }) => ({
  clipPath: 'polygon(100% 0, 92% 50%, 100% 100%, 0 100%, 8% 50%, 0 0)',
  padding: `${theme.spacing(0.5)} ${theme.spacing(6)}`,
  textAlign: 'center',
  transform: 'rotate(-15deg)',
  width: 'min-content',
  margin: `${theme.spacing(4)} 0`,
}));

const Banner: React.FC<BannerProps> = ({ color = 'primary', title, subTitle }) => {
  return (
    <BannerShape sx={{ backgroundColor: `${color}.main` }}>
      <Typography
        variant='h3'
        sx={{ fontWeight: 800, color: `${color}.contrastText`, mb: -0.5, whiteSpace: 'nowrap' }}
      >
        {title}
      </Typography>
      {subTitle && (
        <Typography variant='h5' sx={{ color: `${color}.contrastText` }}>
          {subTitle}
        </Typography>
      )}
    </BannerShape>
  );
};

export default Banner;
