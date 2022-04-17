import auth from '../../firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useFirebase = () => {
    const [customGoogleErr, setCustomGoogleErr] = useState('')
    const [signInWithGoogle, user, , googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

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

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])

    return { handleSigninWithGoogle, customGoogleErr }

}

export default useFirebase;