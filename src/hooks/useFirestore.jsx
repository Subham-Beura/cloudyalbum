import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase/config";


const useFireStore = async (url, fileName) => {
    try {
        const input = { url, fileName }
        const docRef = await addDoc(collection(firestore, 'posts'), input)
        
        return { docRef }
    } catch (error) {
        console.log(error)
    }
}
export default useFireStore