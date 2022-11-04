import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box'
import React from 'react'
import useFetch from '../../hooks/useFetch';
import { Post } from './Post';


export const Feed = () => {
  const urls = useFetch()
  return urls ?
    <Box
      flex={4}
      p={3}
      mx={{ xs: 0, sm: 1 }}
    >
      {urls.map(post => {
        return <Post post={post} key={post.id} />
      })}
    </Box>
    :
    <Box
      flex={4}
      p={3}
      mx={{ xs: 0, sm: 1 }}
      sx={{
        display: "flex", alignItems: "center", justifyContent: "center"
      }}
    >
      <CircularProgress />
    </Box>


}