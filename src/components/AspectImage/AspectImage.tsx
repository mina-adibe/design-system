import { Skeleton, styled } from '@mui/material';
import React from 'react';

export interface AspectImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: [number, number];
  rounded?: boolean;
}

const Image = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ImageSkeleton = styled(Skeleton)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

/**
 * Displays an image locked to a certain aspect ratio. The aspect ratio can be controlled by the
 * `height` and `width` props. This component also takes all the props of the `<img>` element. The
 * image will fill 100% of its parent container. If no image is provided, a skeleton loading
 * component will be displayed instead.
 */
const AspectImage: React.FC<AspectImageProps> = ({
  ratio = [16, 9],
  rounded,
  children,
  src,
  ...rest
}) => {
  const AspectContainer = styled('div')(({ theme }) => ({
    width: '100%',
    paddingTop: `${(ratio[1] / ratio[0]) * 100}%`,
    position: 'relative',
    borderRadius: rounded ? theme.shape.borderRadius : 0,
    overflow: 'hidden',
  }));

  return (
    <AspectContainer>
      {src && src !== '' ? <Image src={src} {...rest} /> : <ImageSkeleton variant='rectangular' />}
      {children}
    </AspectContainer>
  );
};

export default AspectImage;
