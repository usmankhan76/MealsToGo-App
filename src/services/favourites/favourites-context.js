const { createContext, useState, useEffect, useContext } = require("react");
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/authentication-context';

export const FavouritesContext=createContext();

export const FavouritesContextProvider=({children})=>{
    const [favouritesList,setFavouritesList]=useState([]);
    const {user}=useContext(AuthenticationContext)

    const add=(restaurant)=>{
        setFavouritesList([...favouritesList,restaurant])
    }

    const remove=(restaurant)=>{
        const updatedFavouritesList=favouritesList.filter((item)=>item.placeId!==restaurant.placeId);
        setFavouritesList(updatedFavouritesList);
    }
/// to store the favrouites of different users means every user have its own favourites list so we simple add it key uid in setItem useing string literals  
    const saveFavourites=async(value,uid)=>{
        try {
            // console.log("this is id",uid)
            const jsonValue=JSON.stringify(value)
            await AsyncStorage.setItem(`@storage_Key-${uid}`, jsonValue)
        } catch (err) {
            console.log("save Favourites error",err.message)
        }
    }
    const loadFavourites= async(uid)=>{
        try {
            const value = await AsyncStorage.getItem(`@storage_Key-${uid}`)
            if(value !== null) {
            // value previously stored
            setFavouritesList(JSON.parse(value))
            }
  } catch(err) {
    // error reading value
            console.log("save Favourites error",err.message)

  }
    }
    useEffect(()=>{
        if(user && user.uid){
            loadFavourites(user.uid)
        }
    },[user])
    useEffect(()=>{
        if(user && user.uid && favouritesList.length){

            saveFavourites(favouritesList,user.uid)
        }
    },[favouritesList,user])
    return(
        <FavouritesContext.Provider 
            value={{favouritesList,addToFavourite:add,removeFromFavourite:remove}}>
            {children}
        </FavouritesContext.Provider>
    )
}
