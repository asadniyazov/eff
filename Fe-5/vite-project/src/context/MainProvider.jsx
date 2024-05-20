import React, { useState } from 'react'
import { createContext } from 'react'
import useLocalstorage from '../hooks/useLocalstorage'
 export const Maincontext=createContext()
function MainProvider({children}) {
    const [Basket, setBasket] = useLocalstorage("basket",[])
    const [Wishlist,setWishlist]=useLocalstorage("wishlist",[])
    function AddBasket(item) {
         const index= Basket.findIndex((x)=>x._id===item._id)
         if (index===-1) {
            return setBasket([...Basket,{...item,count:1}])
         }
    }
    function RemoveBasket(item) {
         return setBasket([...Basket.filter((x)=>x._id!==item._id)])
    }
    function IncreaseBasket(item) {
        const index= Basket.findIndex((x)=>x._id===item._id)
        const element =Basket[index]
        if (index!==-1) {
            element.count++
           return setBasket([...Basket])
        }
   }
   function DecreaseBasket(item) {
    const index= Basket.findIndex((x)=>x._id===item._id)
    const element =Basket[index]
    if (element.count>1) {
        element.count--
       return setBasket([...Basket])
    }
}

function GetTotal() {
    return Basket.reduce((prev,initial)=>prev+(initial.count*initial.price),0)
}




function AddWishlist(item) {
    const index= Wishlist.findIndex((x)=>x._id===item._id)
    if (index===-1) {
       return setWishlist([...Wishlist,{...item}])
    }
}
  return (
    <Maincontext.Provider value={{Basket,Wishlist,AddWishlist,AddBasket,RemoveBasket,IncreaseBasket,DecreaseBasket,GetTotal}}>{children}</Maincontext.Provider>  
  )
}

export default MainProvider