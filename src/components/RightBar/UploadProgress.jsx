import { Box, Button, LinearProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useFireStore from '../../hooks/useFirestore'
import useStorage from '../../hooks/useStorage'

export const UploadProgress = ({ file, setFile, setIsUploading,setPreview }) => {
    function reUpload() {
        setIsUploading(false); setFile(null); setPreview(null)
    }

    const [uploading, setUploading] = useState(true)
    const upload = useFireStore
    const { progress, url } = useStorage(file)
    if (uploading && url && file) {
        console.log("firestore")
        upload(url, file.name)
        setUploading(false)
    }
    if (uploading) return (
        <Box m={4}>
            <Typography variant="h5" color="primary">Uploading....</Typography>
            <LinearProgress m={4} variant="determinate" value={progress} />

        </Box>
    )
    else {
        return (
            <Box m={2} sx={{ display: "flex", justifyContent: "flex-end" }}>

                <Button m={2} variant="contained" onClick={() => { reUpload() }}>Go Back </Button>
            </Box>
        )
    }

}
