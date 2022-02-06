import { MenuItem } from '@mui/material';
import styled from '@mui/system/styled';

const UserMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: `${theme.spacing(1.25)} ${theme.spacing(1.5)}`,
  fontWeight: 500,
  fontSize: '0.875rem',
})) as typeof MenuItem;

export default UserMenuItem;
