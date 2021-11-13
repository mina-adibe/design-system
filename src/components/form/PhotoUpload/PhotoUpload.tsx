import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import Dropzone from '../Dropzone/Dropzone';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import PhotoGrid from '../PhotoGrid/PhotoGrid';
import defaultUploadHandler from './defaultUploadHandler';

export interface PhotoUploadProps {
  label: string;
  /**
   * A function that takes a list of files uploaded by the user and returns a list of URLS that
   * point to those files
   */
  // eslint-disable-next-line no-unused-vars
  uploadHandler: (files: File[]) => Promise<string[]>;
}

/**
 * Allows a user to upload and manage photos
 */
const PhotoUpload: React.FC<PhotoUploadProps> = ({
  label,
  uploadHandler = defaultUploadHandler,
}) => {
  const [photos, setPhotos] = React.useState<string[]>([
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    'https://images.unsplash.com/photo-1550252225-69800809ba78',
    'https://images.unsplash.com/photo-1615874959474-d609969a20ed',
    'https://images.unsplash.com/photo-1586836930332-6a1e2cb08e78',
  ]);

  // Renders skeleton placeholders when images are in the process of being uploaded
  const [skeletonCount, setSkeletonCount] = React.useState(0);

  const handleUpload = async (files: File[]) => {
    setSkeletonCount((c) => c + files.length);
    const urls = await uploadHandler(files);
    setSkeletonCount((c) => c - files.length);
    setPhotos((p) => [...p, ...urls]);
  };

  return (
    <FormFieldWrapper label={label}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Dropzone
            accept='image/*'
            multiple
            icon={AddPhotoAlternateIcon}
            label='Drag to upload an image'
            onUpload={handleUpload}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5'>Uploaded Photos</Typography>
        </Grid>
        <PhotoGrid value={photos} onChange={setPhotos} loadingImages={skeletonCount} />
      </Grid>
    </FormFieldWrapper>
  );
};

export default PhotoUpload;
