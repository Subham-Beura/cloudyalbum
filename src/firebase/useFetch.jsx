import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../firebase/config";

async function FetchingData(setLoaded,setDocs) {
    let fetchResult = await getDocs(collection(firestore, 'posts'));
    let refined = []
    if (!fetchResult.empty) {
        fetchResult.forEach(doc => {
            refined.push({ id: doc.id, data: doc.data() })
        })
        setLoaded(true)
    }
    setDocs(refined)
}
const useFetch = () => {
    const [docs, setDocs] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        if(!loaded){
            FetchingData(setLoaded,setDocs);
        }
    }, [loaded])

    return { docs }
}
export default useFetch