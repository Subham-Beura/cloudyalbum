import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box'
import React from 'react'
import useFetch from '../../firebase/useFetch';
import { Post } from './Post';


export const Feed = () => {
  const { docs: urls } = useFetch()
  if (urls.length === 0) {
    return (
      <Box flex={4} p={3} mx={{ xs: 0, sm: 1 }} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}  >
        <CircularProgress />
      </Box>
    )

  }
  return (
    <Box flex={4} p={3} mx={{ xs: 0, sm: 1 }}  >
      {urls.map(post => {
        return <Post post={post} key={post.id} />
      })}
    </Box>

  )
}