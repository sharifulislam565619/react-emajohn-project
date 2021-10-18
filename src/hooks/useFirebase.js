import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import initialization from '../Firebase/firebase.init';

initialization()

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const auth = getAuth()
    const [user, setUser] = useState({})

    const handleSignInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
        });
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(result => {
                setUser({})
            })
    }

    return {
        user,
        handleSignInWithGoogle,
        logOut,
    }
};

export default useFirebase;