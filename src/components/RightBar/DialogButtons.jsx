import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';

export function DialogButtons(props) {
  return (
    <DialogActions m={4} sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button variant="outlined" onClick={() => props.setPreview(null)}>Clear</Button>
      <Box
        mx={2}
        sx={{
          width: "30%",
          display: "flex",
          justifyContent: "space-between"
        }}>
        <Button mx={2} variant="contained">Upload</Button>
        <Button onClick={() => props.setIsOpen(false)}>Cancel</Button>
      </Box>

    </DialogActions>);
}
