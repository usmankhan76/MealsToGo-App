import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../../firebase';
import { loginRequest } from './authentication-service';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthenticationContext=createContext();

const AuthenticationContextProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null)

    const onLogin=(email,password)=>{
      setIsLoading(true)
      loginRequest(email,password).then(res=>{
        // console.log("res login request",res)
        setIsLoading(false)
        setUser(res)
        // console.log("this is the user",user);
      }).catch((err)=>{
        setIsLoading(false)
        // console.log("login error",err.message)
        setError(err.toString())
      })
    }

    const onRegister=(email,password,repeatPassword)=>{
      setIsLoading(true)
      if(password===null || password!==repeatPassword){
        setIsLoading(false)
        setError("Error: password do not Match")
        return
      }
      createUserWithEmailAndPassword(auth,email,password).then((res)=>{
        setIsLoading(false)
        setUser(res)
      }).catch(err=>{
        setIsLoading(false)
        setError(err.toString())
      })
    }
    const onLogout=()=>{
      setIsLoading(true)
      signOut(auth).then(res=>{
        setIsLoading(false)
        setUser(null);
      }).catch(err=>{
        setIsLoading(false);
        setError(err.toString())
      })
    }
    onAuthStateChanged(auth,(user)=>{
        // console.log("this is the user",user);
      if(user){
        setUser(user)
          
      }
    })

  return (
    
    <AuthenticationContext.Provider value={{
        isAuthenticated:!!user, // the single opertor means that false so double operator means true 
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout
    }}>
        {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider