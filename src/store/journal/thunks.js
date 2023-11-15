import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseApp, FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./";
import { loadNotes } from "../../helpers/loadNotes";
import { async } from "@firebase/util";
import { fileUpload } from "../../helpers/fileUpdoad";
import { fileDownload } from "../../helpers/fileDownload";
import { getDownloadURL,ref, getStorage, uploadBytesResumable } from "firebase/storage";

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        dispatch( savingNewNote() );

        const { uid } = getState().auth; 

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`) );
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;
        
        dispatch( addNewEmptyNote( newNote) );
        dispatch( setActiveNote( newNote) );

    }
}


export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        if( !uid ) throw new Error('El UID no existe');

        const notes = await loadNotes( uid );

        dispatch( setNotes( notes ));
    }
}

export const startSaveNote = () => {
    return async( dispatch , getState) => {
        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });
        
        dispatch( updateNote(note) );
    }
}

export const startUploadingFiles = ( files = []) => {
    return async( dispatch) => {
        dispatch( setSaving() );
        const FirebaseStorage = getStorage(FirebaseApp);
        const photosURL = [];
        
        const promises = Array.from(files).map((file)=> {
            const storageRef = ref(FirebaseStorage, `images/${file.name}`);
            return uploadBytesResumable(storageRef, file).then((snapshot)=>{
                return getDownloadURL(snapshot.ref);
            });
        })
        console.log(promises);
        
        Promise.all(promises).then((promesa)=> {
            for(let p of promesa){
                console.log(p);
                photosURL.push(p);
            }
            console.log(photosURL);
            dispatch(setPhotosToActiveNote(photosURL));
        })

    }
}

