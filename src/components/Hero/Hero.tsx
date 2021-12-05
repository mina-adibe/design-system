import { styled } from '@mui/material';
import { FC } from 'react';

export interface HeroProps {
  src: string;
}

const Hero: FC<HeroProps> = ({ children, src }) => (
  <Background>
    <BgImage src={src} />
    <Content>{children}</Content>
  </Background>
);

export default Hero;

const Background = styled('div')(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.alt}, ${theme.palette.primary.main})`,
  position: 'relative',
}));

const BgImage = styled('img')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  mixBlendMode: 'luminosity',
  opacity: 0.15,
}));

const Content = styled('div')({
  position: 'relative',
});
