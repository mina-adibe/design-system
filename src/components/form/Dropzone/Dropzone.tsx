import { Button, styled, SvgIcon, Typography } from '@mui/material';
import React, { useState } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export interface DropzoneProps {
  /**
   * The icon to display inside of the dropzone.
   */
  icon?: typeof SvgIcon;
  /**
   * Text to display inside of the dropzone. Defaults to "Drag a file to upload".
   */
  label?: string;
  /**
   * Specify the allowed file types.
   */
  accept?: string;
  /**
   * Allow the user to upload multiple files.
   */
  multiple?: boolean;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onUpload?: (files: File[]) => void;
}

const StyledInput = styled('input')({
  opacity: 0,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  cursor: 'pointer',
});

const Zone = styled(Button)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  border: `1px dashed ${theme.palette.grey['400']}`,
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
}));

/**
 * Basic component for allowing a user to upload files, either by dragging them onto the component,
 * or by clicking the component to bring up a file dialog.
 */
const Dropzone: React.FC<DropzoneProps> = ({
  icon: Icon = FileUploadIcon,
  accept,
  multiple,
  label: prompt = 'Drag a file to upload',
  disabled,
  onUpload,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList) {
      const files: File[] = [];
      for (let i = 0; i < fileList.length; i += 1) {
        const file = fileList?.item(i);
        if (file) {
          files.push(file);
        }
      }

      if (onUpload) {
        onUpload(files);
      }
    }
  };

  return (
    <>
      <Zone
        component='label'
        tabIndex={-1}
        onDragOver={() => setHovered(true)}
        onDragEnter={() => setHovered(true)}
        onDrop={() => setHovered(false)}
        onDragLeave={() => setHovered(false)}
        onDragExit={() => setHovered(false)}
        sx={{ backgroundColor: hovered ? 'grey.100' : '' }}
        disabled={disabled}
      >
        <StyledInput type='file' multiple={multiple} onChange={handleChange} accept={accept} />
        <Icon color={disabled ? 'disabled' : 'primary'} fontSize='large' />
        {prompt}
        <Typography variant='caption'>or click to browse</Typography>
      </Zone>
    </>
  );
};

export default Dropzone;
