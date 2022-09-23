import React from 'react'

import { SideBar } from "./components/SideBar"
import { Header, Navbar } from "./components/Header/Header"
import { RightBar } from "./components/RightBar"
import { Feed } from "./components/Feed/Feed"
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { CssBaseline } from '@mui/material'
const App = () => {
  return (
    <Box>
      <CssBaseline/>
      <Header />
      <Stack direction="row" sx={{ justifyContent:"space-between"}}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  )
}
export default App