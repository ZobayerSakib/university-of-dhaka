import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
firebaseAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                console.log(user)

            })
    }


    return {
        signInWithGoogle,
    }
}


export default useFirebase;
