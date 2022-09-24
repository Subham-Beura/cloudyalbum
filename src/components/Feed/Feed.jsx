import Box from '@mui/material/Box'
import React from 'react'
import { Post } from './Post';


export const Feed = () => {
  return (
    <Box flex={4} p={3} mx={{ xs: 0, sm: 1 }}  >
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>

  )
}