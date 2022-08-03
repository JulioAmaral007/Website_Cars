import React, { createContext, useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../Services/FirebaseConfig"
import { Navigate } from "react-router";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({})


function AuthGoogleProvider({children}){

    const auth = getAuth(app);

    const [user, setUser] = useState(null)

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user")

            if(sessionUser && sessionToken){
                setUser(sessionUser);
            }
        }
        loadStoreAuth()
    }, [])
    
    const signInGoogle = () => {

        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setUser(user)
            sessionStorage.setItem("@AuthFirebase: token", token)
            sessionStorage.setItem("@AuthFirebase: token", JSON.stringify(user))
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

        });
    }

    function signOut(){
        sessionStorage.clear()
        setUser(null)
        return <Navigate to="/" />
    }
    
    return(
        <AuthGoogleContext.Provider value={{ signInGoogle, signed: !!user , signOut }}>
            {children}
        </AuthGoogleContext.Provider>
    )
}

export default AuthGoogleProvider