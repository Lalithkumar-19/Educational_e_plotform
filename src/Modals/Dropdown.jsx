import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handle_Logout = () => {
    localStorage.removeItem("userdata");
    localStorage.removeItem("token");
    window.location.reload();
    setAnchorEl(null);
  }

  return (
    <div >
      <Button

        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ width: "500px", background: "white", }}
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
        <MenuItem onClick={handleClose} sx={{ marginTop: "10px" }}> <Link to={"/profile"}>My Profile</Link></MenuItem>
        <MenuItem onClick={handleClose} sx={{ marginTop: "10px" }}> <Link to={"/myorders"}>Orders</Link></MenuItem>
        <MenuItem onClick={handle_Logout} sx={{ marginTop: "10px" }}>Logout</MenuItem>

      </Menu>
    </div>
  );
}