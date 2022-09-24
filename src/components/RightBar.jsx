import React from 'react'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export const RightBar = () => {
  return (
    <Box  flex={1.4} p={3} sx={{ display: { xs: "none", sm: "block" } }} >
      <Box position="fixed">

      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      </Box>
    </Box>
  )
}