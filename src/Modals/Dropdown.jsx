import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
      
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{width:"500px",background:"white",}}
      >
        My Self
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
       >
        <MenuItem onClick={handleClose} sx={{marginTop:"10px"}}>My Profile</MenuItem>
        <MenuItem onClick={handleClose} sx={{marginTop:"10px"}}>Orders</MenuItem>
        <MenuItem onClick={handleClose} sx={{marginTop:"10px"}}>Logout</MenuItem>

      </Menu>
    </div>
  );
}