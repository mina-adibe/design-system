import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import { Chip, Grid, IconButton, Stack, styled } from '@mui/material';
import React from 'react';
import AspectImage from '../../AspectImage/AspectImage';

export interface PhotoGridProps {
  value: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
  loadingImages?: number;
  readOnly?: boolean;
}

const PhotoActionBar = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.35)',
  color: theme.palette.common.white,
  transition: 'opacity .2s',
}));

const PhotoContainer = styled(Grid)({
  '& #action-bar': {
    opacity: 0,
  },
  '&:hover #action-bar': {
    opacity: 1,
  },
});

const PhotoGrid: React.FC<PhotoGridProps> = ({
  value = [],
  onChange,
  loadingImages = 0,
  readOnly,
}) => {
  const deletePhoto = (index: number) => {
    const newPhotos = [...value];
    newPhotos.splice(index, 1);
    onChange(newPhotos);
  };

  const movePhoto = (index: number, direction: 'up' | 'down') => {
    const newPhotos = [...value];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    const [removed] = newPhotos.splice(index, 1);
    newPhotos.splice(newIndex, 0, removed);
    onChange(newPhotos);
  };

  const OverlayChip = styled(Chip)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
  }));

  return (
    <Grid spacing={2} item container>
      {value.map((p, i) => (
        <PhotoContainer item key={p} xs={12}>
          <AspectImage src={p} srcSet={p} loading='lazy' alt='upload' rounded>
            {i === 0 && <OverlayChip label='Cover Image' color='secondary' size='small' />}
            {!readOnly && (
              <PhotoActionBar id='action-bar' direction='row' justifyContent='flex-end'>
                <IconButton
                  aria-label='move up'
                  color='inherit'
                  disabled={i === 0}
                  onClick={() => movePhoto(i, 'up')}
                >
                  <ArrowUpwardIcon />
                </IconButton>
                <IconButton
                  aria-label='move down'
                  color='inherit'
                  disabled={i === value.length - 1}
                  onClick={() => movePhoto(i, 'down')}
                >
                  <ArrowDownwardIcon />
                </IconButton>
                <IconButton aria-label='delete' color='inherit' onClick={() => deletePhoto(i)}>
                  <DeleteIcon />
                </IconButton>
              </PhotoActionBar>
            )}
          </AspectImage>
        </PhotoContainer>
      ))}
      {loadingImages > 0 &&
        Array.from({ length: loadingImages }).map((v) => (
          <PhotoContainer item key={v as any} xs={12}>
            <AspectImage rounded />
          </PhotoContainer>
        ))}
    </Grid>
  );
};

export default PhotoGrid;
