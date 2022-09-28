import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { ImagePreview } from './ImagePreview';
import { DialogButtons } from './DialogButtons';
import { UploadProgress } from './UploadProgress';



export function UploadDialog(props) {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)

  const selectImg = e => {
    const selected = e.target.files[0]
    setFile(selected)
    console.log(file)
  }

  return (<Dialog open={props.isOpen} onClose={() => {props.setIsOpen(false);}} aria-labelledby="upload" fullWidth={true}>
    <DialogTitle id="upload">Upload Image</DialogTitle>

    <ImagePreview preview={preview} setPreview={setPreview} selectImg={selectImg}></ImagePreview>
    {
      isUploading ?<UploadProgress
          file={file}
          setFile={setFile}
          setIsUploading={setIsUploading}
          setPreview={setPreview}
        />:<DialogButtons
          setIsOpen={props.setIsOpen}
          setPreview={setPreview}
          file={file}
          setFile={setFile}
          isUploading={isUploading}
          setIsUploading={setIsUploading} 
          />
    }


  </Dialog>);
}
