import { IconButton, Avatar, Menu } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface UserMenuProps {
  picture?: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ picture, children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        sx={{ borderRadius: '999px' }}
        size='large'
      >
        <Avatar src={picture} sx={{ width: '28px', height: '28px' }} />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          sx: { width: '200px' },
        }}
        onClick={handleClose}
      >
        {children}
      </Menu>
    </>
  );
};

export default UserMenu;
