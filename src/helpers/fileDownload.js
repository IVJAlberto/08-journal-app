import { useSelector } from "react-redux";

import { getDownloadURL, getStorage, ref,  } from "firebase/storage"
import { FirebaseApp } from "../firebase/config";

const FirebaseStorage = getStorage(FirebaseApp);

export const fileDownload = async ( image ) => {

    // console.log(image);
    // getDownloadURL(ref(FirebaseStorage,image))
    //     .then((u) =>{
    //         console.log(u);
    //         return u;
    //     }).catch((error) =>{
    //         console.error();
    //     })
    
    // const { active:note } = useSelector( state => state.journal);

    // const newphotosURL = [];
    // for (const image of note.imageUrls) {
        // console.log( note );
        // getDownloadURL(ref(FirebaseStorage,image))
        // .then((u) =>{
        //     console.log(image);
        //     console.log(u);
        //     newphotosURL.push(u);
        //     // const xhr = new XMLHttpRequest();
        //     // xhr.responseType = 'blob';
        //     // xhr.onload = (event) =>{
        //     //     const blob = xhr.response;
        //     // };
        //     // xhr.open('GET',url);
        //     // xhr.send();
        // }).catch((error) =>{
        //     console.error();
        // })
    // }
    // return newphotosURL;

}