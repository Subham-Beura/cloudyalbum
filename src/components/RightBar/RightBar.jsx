import React, { useState } from 'react'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { UploadDialog } from '../RightBar/UploadDialog'



export const RightBar = () => {
  const [isOpen, setIsOpen] = useState(false)



  return (
    <Box flex={1} p={3} sx={{ display: { xs: "none", sm: "block" } }} >
      <Box position="fixed">
        <Button variant="text" color="primary" onClick={() => setIsOpen(true)}>
          Upload
        </Button>
        <UploadDialog isOpen={isOpen} setIsOpen={setIsOpen} ></UploadDialog>
      </Box>
    </Box>
  )


}