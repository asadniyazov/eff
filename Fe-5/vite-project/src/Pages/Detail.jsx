import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function Detail() {
    let { id } = useParams();
    const [Product, setProduct] = useState([])
    useEffect(() => {
      GetProductById()
    }, [])
    async function GetProductById() {
        const res=await fetch("http://localhost:3100/shop/"+id)
        const data=await res.json()
        setProduct(data)
     }
  return (
    <>
        <div>
            <img src={Product.img}/>
            <h4> {Product.name}</h4>
            <h5>{Product.price}</h5>
        </div>
    </>
  )
}

export default Detail