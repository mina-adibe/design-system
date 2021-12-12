import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Dropzone from '../Dropzone/Dropzone';
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper';
import PhotoGrid from '../PhotoGrid/PhotoGrid';
import defaultUploadHandler from './defaultUploadHandler';

export interface PhotoUploadProps {
  label: string;
  name: string;
  /**
   * A function that takes a list of files uploaded by the user and returns a list of URLS that
   * point to those files
   */
  // eslint-disable-next-line no-unused-vars
  uploadHandler?: (files: File[]) => Promise<string[]>;
}

interface PhotoUploadControlledProps {
  // eslint-disable-next-line no-unused-vars
  uploadHandler?: (files: File[]) => Promise<string[]>;
  value: string[];
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string[]) => void;
}

/**
 * Allows a user to upload and manage photos
 */
const PhotoUploadControlled = ({
  uploadHandler = defaultUploadHandler,
  value = [],
  onChange,
}: PhotoUploadControlledProps) => {
  const [photos, setPhotos] = React.useState<string[]>(value);

  useEffect(() => {
    onChange(photos);
  }, [photos]);

  // Renders skeleton placeholders when images are in the process of being uploaded
  const [skeletonCount, setSkeletonCount] = React.useState(0);

  const handleUpload = async (files: File[]) => {
    setSkeletonCount((c) => c + files.length);
    const urls = await uploadHandler(files);
    setSkeletonCount((c) => c - files.length);
    setPhotos((p) => [...p, ...urls]);
  };

  return (
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
  );
};

const PhotoUpload = ({ label, name, uploadHandler }: PhotoUploadProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <FormFieldWrapper label={label} errorObject={errors[name]}>
          <PhotoUploadControlled uploadHandler={uploadHandler} value={value} onChange={onChange} />
        </FormFieldWrapper>
      )}
    />
  );
};

export default PhotoUpload;
