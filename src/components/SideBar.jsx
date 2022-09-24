import React from 'react'
import { ListItemIcon, ListItemText, List, ListItem, ListItemButton,Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export const SideBar = () => {
  return (
    <Box  flex={1} p={3} sx={{ display: { xs: "none", sm: "block" } }} >
      <Box position={"fixed"}>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </List>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItemButton>
          <ListItemIcon>
            <AccountBoxIcon/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </List>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
      </Box>
    </Box>
  )
}