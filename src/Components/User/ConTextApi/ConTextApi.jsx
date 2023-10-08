import { createContext, useEffect, useState } from "react";
import PropTypes, { number } from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import app from "../Login.config";

export const Context = createContext()
const ConTextApi = ({ children }) => {

    const [user, setUser] = useState()

    const auth = getAuth(app)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const updateInfo = (name,number) => {
        return updateProfile(auth.currentUser,{
            displayName: `${name}`, phoneNumber: `${number}`
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (customer) => {
            setUser(customer)
        })
    }, [])

    const data = {createUser,logOut,updateInfo,signUser, user}
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