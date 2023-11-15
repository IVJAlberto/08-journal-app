import { getStorage, ref, uploadBytes, uploadBytesResumable,  } from "firebase/storage"
import { FirebaseApp } from "../firebase/config";

const FirebaseStorage = getStorage(FirebaseApp);

export const fileUpload = async ( file ) => {
    if( !file ) throw new Error('No tenemos ningun archgivo a subir');

    const storageRef = ref(FirebaseStorage, `images/${file.name}`);
    
    // const url = "gs://" + storageRef.bucket +"/"+storageRef.fullPath;
    const url = `images/${file.name}`;
    
    
    try {
        uploadBytes(storageRef, file);
    } catch (error) {
        throw new error( 'error' );
    }finally{
        return url;
    }

}