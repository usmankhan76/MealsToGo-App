const { createContext, useState, useEffect } = require("react");
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext=createContext();

export const FavouritesContextProvider=({children})=>{
    const [favouritesList,setFavouritesList]=useState([]);

    const add=(restaurant)=>{
        setFavouritesList([...favouritesList,restaurant])
    }

    const remove=(restaurant)=>{
        const updatedFavouritesList=favouritesList.filter((item)=>item.placeId!==restaurant.placeId);
        setFavouritesList(updatedFavouritesList);
    }

    const saveFavourites=async(value)=>{
        try {
            const jsonValue=JSON.stringify(value)
            await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (err) {
            console.log("save Favourites error",err.message)
        }
    }
    const loadFavourites= async(value)=>{
        try {
            const value = await AsyncStorage.getItem('@storage_Key')
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
        loadFavourites()
    },[])
    useEffect(()=>{
        saveFavourites(favouritesList)
    },[favouritesList])
    return(
        <FavouritesContext.Provider 
            value={{favouritesList,addToFavourite:add,removeFromFavourite:remove}}>
            {children}
        </FavouritesContext.Provider>
    )
}
