import React, { useState } from 'react'

// MUI
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Avatar from "@mui/material/Avatar"
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu  from '@mui/material/Menu';
import MenuItem  from '@mui/material/MenuItem';

import { styled } from '@mui/material/styles';

import { SearchBar } from './SearchBar';

const IconsBox = styled(Box)(({ theme }) => ({
  padding: "12px 0px",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}))

export const Header = () => {
  const [open,setOpen]=useState(false)
  return (
    <AppBar position="sticky" sx={{ justifyContent: "center" }}>
    

      <Toolbar sx={{ justifyContent: "space-between", paddingLeft: "2px" }}>

        <Typography variant='h5' sx={{ display: { xs: "none", sm: "block" } }}>
          CloudyAlbum
        </Typography>
        <CameraAltIcon
          sx={{
            display: { xs: "block", sm: "none" },
            width: "10%",
            justifyContent: "center"
          }} />

        <SearchBar/>


        <IconsBox width={{ xs: "28%", sm: "8%" }} >
          <Badge badgeContent={4} color="error"><EmailIcon /></Badge>
          <Badge badgeContent={3} color="error"><NotificationsIcon /></Badge>
          <Badge badgeContent={2} color="error"><Avatar onClick={e=>setOpen(!open)} >SB</Avatar></Badge>
        </IconsBox>

      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar >
  )
}