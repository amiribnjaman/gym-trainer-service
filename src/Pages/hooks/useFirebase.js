import auth from '../../firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const useFirebase = () => {
    const [customGoogleErr, setCustomGoogleErr] = useState('')
    const [signInWithGoogle, , , googleError] = useSignInWithGoogle(auth);
    const [user, loading] = useAuthState(auth);

    // Sign with google
    const handleSigninWithGoogle = () => {
        signInWithGoogle()
    }

    useEffect(() => {
        if (googleError) {
            switch (googleError?.code) {
                case "auth/email-already-exists":
                    setCustomGoogleErr('Email already exists.');
                    break;
                default:
                    setCustomGoogleErr('Something wrong. Please try again.')

            }
        }
    }, [googleError])

    return { handleSigninWithGoogle, customGoogleErr, user, loading }

}

export default useFirebase;