import { createContext, useEffect, useState } from "react";
import PropTypes, { number } from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Login.config";

export const Context = createContext()
const ConTextApi = ({ children }) => {



    const [user, setUser] = useState()
    const [loading, setloading] = useState(true)

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }
    const updateInfo = (name, number) => {
        setloading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, phoneNumber: number.toString()
        })
    }
    const googlelogin = () => {
        setloading(true)
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (customer) => {
            setUser(customer)
            setloading(false)
        })
    }, [])

    const data = { createUser, logOut, updateInfo, signUser, loading, googlelogin, user }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
};

export default ConTextApi;

ConTextApi.propTypes = {
    children: PropTypes.node
}