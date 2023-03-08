import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase'
export const loginRequest=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}