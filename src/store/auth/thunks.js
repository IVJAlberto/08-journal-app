import { registerUserWithEmailPassword, signInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import { clearNotesOnLogOut } from "../journal";
import { checkingCredentials, logOut, login } from "./"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();
        if(!result.ok) return dispatch( logOut( result.errorMessage ) )
        
        dispatch( login(result) );
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch( checkingCredentials() );
        const result = await registerUserWithEmailPassword({ email, password, displayName });
        console.log(result);

        if ( !result.ok ) return dispatch( logOut( result ) );
        dispatch( login( result ));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logOut( result ) );
        dispatch( login( result ));

    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();
        dispatch( clearNotesOnLogOut());
        dispatch( logOut() );

    }
}