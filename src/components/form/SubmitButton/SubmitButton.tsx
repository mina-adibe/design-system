import { CircularProgress } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';

export interface SubmitButtonProps extends Omit<ButtonProps, 'type'> {}

const SubmitButton: FC<SubmitButtonProps> = ({ children, onClick, ...rest }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Box component='span' sx={{ position: 'relative' }}>
      <StyledButton
        disabled={isSubmitting}
        onClick={isSubmitting ? undefined : onClick}
        variant='contained'
        type='submit'
        {...rest}
      >
        {children}
      </StyledButton>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    </Box>
  );
};

const StyledButton = styled(Button)(({ disabled }) => ({
  color: disabled ? 'transparent' : undefined,
  '& > *': {
    opacity: 0,
  },
}));

export default SubmitButton;
