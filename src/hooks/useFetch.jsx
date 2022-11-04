import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../firebase/config";

async function FetchingData(setDocs) {
    let querySnapshot = await getDocs(collection(firestore, 'posts'));
    let result =[];
    querySnapshot.forEach((doc) => {
        result.push({id:doc.id,data:doc.data()})
    });
    setDocs(result)
}
const useFetch = () => {
    const [docs, setDocs] = useState([])
    useEffect(() => {
        FetchingData(setDocs);
    }, [])
    return docs;
}
export default useFetch