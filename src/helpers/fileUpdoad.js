import { getStorage, ref, uploadBytes,  } from "firebase/storage"
import { FirebaseApp } from "../firebase/config";

const FirebaseStorage = getStorage(FirebaseApp);

export const fileUpload = async ( file ) => {
    if( !file ) throw new Error('No tenemos ningun archgivo a subir');

    const storageRef = ref(FirebaseStorage, `images/${file.name}`);
    
    const url = storageRef.bucket +"/"+storageRef.fullPath;
    const metadata = {
        contentType: 'image/jpeg',
    };
    
    try {
        uploadBytes(storageRef, file, metadata);
    } catch (error) {
        throw new error( 'error' );
    }finally{
        return url;
    }
    
    
    

}