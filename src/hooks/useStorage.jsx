import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import  { useState } from 'react'
import { useEffect } from 'react'
import { storage } from '../firebase/config'
export const useStorage = (file) => {
    const [url, setUrl] = useState(null)
    const [progress, setProgress] = useState(null)

    useEffect(() => {
        if (file) {
            let storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on('state_changed',
                snapshot => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress)
                },
                error => console.log(error),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setUrl(downloadURL)
                    })
                }
            )
        }
    },[file])
    return {progress,url}
}
export default useStorage;