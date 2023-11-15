import { deleteDoc, doc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const deleteNote = async(uid, idNote) => {
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${idNote}`);
    await deleteDoc(docRef);
    console.log(deleteDoc);
}