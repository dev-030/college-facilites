import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from "./Firebase.config";

 


export const authContext = createContext(null); 

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const userRegister = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}
const userLogin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}
const googleLogin = () => {
    return signInWithPopup(auth,googleProvider);
}
const userLogout = () => {
    return signOut(auth);
}


export const baseUrl = 'https://frantic-tunic-fawn.cyclic.app';


export default function AuthProvider({children}) {



    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (user) => {
            setUser(user)
            setLoading(false)
        })

        return() => {unsubscribe()}

    },[])




    const data = {
        user,
        loading,
        userRegister,
        userLogin,
        googleLogin,
        userLogout,
    }



    return(
        <authContext.Provider value={data}>
            {children}
        </authContext.Provider>
    )
}