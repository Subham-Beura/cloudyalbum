import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { ImagePreview } from './ImagePreview';
import { DialogButtons } from './DialogButtons';



export function UploadDialog(props) {
  const [preview, setPreview] = useState(null);

  return (<Dialog open={props.isOpen} onClose={() => props.setIsOpen(false)} aria-labelledby="upload" fullWidth={true}>
    <DialogTitle id="upload">Upload Image</DialogTitle>

    <ImagePreview preview={preview} setPreview={setPreview}></ImagePreview>

    <DialogButtons setIsOpen={props.setIsOpen} setPreview={setPreview}></DialogButtons>


  </Dialog>);
}
