import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Meta, Story } from '@storybook/react';
import { Form } from '..';
import defaultUploadHandler from '../PhotoUpload/defaultUploadHandler';
import SubmitButton from '../SubmitButton/SubmitButton';
import FileUpload, { FileUploadProps } from './FileUpload';

export default {
  component: FileUpload,
  title: 'Components/Form/FileUpload',
} as Meta;

interface DropzoneStoryProps extends FileUploadProps<false> {}

const Template: Story<DropzoneStoryProps> = () => (
  <Form>
    <FileUpload onUpload={defaultUploadHandler} name='picture'>
      {({ openFileDialog, isUploading, value, setValue }) => (
        <>
          <Button disabled={isUploading} variant='contained' onClick={openFileDialog}>
            Select File
          </Button>
          {value && <img src={value} alt='upload' width='100px' height='100px' />}
          {value && <Button onClick={() => setValue(undefined)}>Clear</Button>}
        </>
      )}
    </FileUpload>
  </Form>
);

export const ProfileUpload: Story<DropzoneStoryProps> = () => (
  <Form
    onSubmit={(values) =>
      new Promise<void>((res) =>
        setTimeout(() => {
          console.log(values);
          res();
        }, 500)
      )
    }
  >
    <FileUpload onUpload={defaultUploadHandler} name='picture' capture='user' accept='image/*'>
      {({ openFileDialog, isUploading, value }) => (
        <Stack direction='row' alignItems='center' spacing={2}>
          <Avatar src={value} sx={{ width: 64, height: 64 }} />
          <Button disabled={isUploading} variant='contained' onClick={openFileDialog}>
            Upload Photo
          </Button>
        </Stack>
      )}
    </FileUpload>
    <SubmitButton fullWidth>Submit</SubmitButton>
  </Form>
);

export const Default = Template.bind({});
Default.args = {};
