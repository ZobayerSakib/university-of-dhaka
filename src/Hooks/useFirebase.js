import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    useEffect(() => {

    }, [])

    const signInWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                setUser(user);
                console.log(user);

            }).catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)

            }).finally(() => setIsLoading(false));

    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})

            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });

    }, [])

    //Create User with email and password

    const createUserWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)

            });
    }

    // Sign In with Email and password

    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        logOut,
        createUserWithEmail,
        signInWithEmail


    }
}


export default useFirebase;
