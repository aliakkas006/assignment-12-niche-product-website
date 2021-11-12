import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , onAuthStateChanged, signOut  } from "firebase/auth";
import initializeAuthentication from "../Pages/Shared/LogIn/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    // Crete user With Email and Password
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    // Log in user
    const logInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    // Observe user state changed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, []);

    // Log out user
    const logOut = () => {
        signOut(auth)
            .then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
 
    return {
        user,
        registerUser,
        logInUser,
        logOut
    }
}

export default useFirebase;