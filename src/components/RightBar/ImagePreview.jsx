import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';

export function ImagePreview({ preview, setPreview,selectImg }) {

  const createPreview = e => setPreview(URL.createObjectURL(e.target.files[0]))

  return (<DialogContent width="60%">
    {
      preview ?
        <img src={preview} alt=" Goes Here" style={{ height: "100%", width: "100%" }} />
        :
        <Box sx={{
          height: "33vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }} >
          <Button
            variant="outlined"
            sx={{ height: "33vh", width: "100%" }}
            component="label">
            
            Select Image
            <input hidden accept="image/*" multiple type="file" onChange={e =>{ createPreview(e);selectImg(e)}} />
            
          </Button>
        </Box>
    }
  </DialogContent>);
}
