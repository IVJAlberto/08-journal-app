import { registerUserWithEmailPassword, signInWithGoogle, loginWithEmailPassword } from "../../firebase/providers";
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
        const result = await registerUserWithEmailPassword({ email, password });
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