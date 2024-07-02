import React, { useState } from 'react';
import Logo from "../assets/icon/NavLogo.jsx";
import Search from "../assets/icon/Search.jsx";
import Shop from "../assets/icon/Shop.jsx";
import ButtonComponent from "../component/ButtonComponent.jsx";
import { useNavigate } from 'react-router-dom';
import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false); // Close drawer when navigating
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={toggleDrawer(false)}>
            <ListItemIcon>
              <CloseIcon />
            </ListItemIcon>
            <ListItemText primary="Close" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem button onClick={() => handleNavigate('/')}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => handleNavigate('/Products')}>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contacts" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon><Search /></ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button onClick={() => handleNavigate('/cart')}>
          <ListItemIcon><Shop /></ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <ButtonComponent customClass="button-filled first-button-background-colour third-text-colour" label='Get started' width={"159px"} height={"50px"} />
        </Box>
      </List>
    </Box>
  );

  return (
    <nav className='nav-section first-background'>
      <div className="container">
        <div className="nav-head">
          <div className="nav-1" onClick={() => handleNavigate('/')} style={{ cursor: 'pointer' }}>
            <Logo />
            <h3 className='first-text-colour'>FashionForAll</h3>
          </div>
          <Button onClick={toggleDrawer(true)} className="menu-icon">
            <MenuIcon />
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
          <div className="nav-menu">
            <div className="nav-head-2">
              <div className="nav-2 second-text-colour">
                <p onClick={() => handleNavigate('/')} style={{ cursor: 'pointer' }}>Home</p>
                <p onClick={() => handleNavigate('/Products')} style={{ cursor: 'pointer' }}>Products</p>
                <p>Contacts</p>
              </div>
              <div className="nav-3">
                <div className="nav-3-sub first-text-colour">
                  <div className="nav-3-sub-1">
                    <span><Search /></span>
                    <p>Search</p>
                  </div>
                  <div onClick={() => handleNavigate('/cart')} className="nav-3-sub-1">
                    <span><Shop /></span>
                    <p>Cart</p>
                  </div>
                </div>
                <ButtonComponent customClass="button-filled first-button-background-colour third-text-colour" label='Get started' width={"159px"} height={"50px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
