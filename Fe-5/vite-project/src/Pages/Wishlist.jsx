import React, { useContext } from 'react'
import { Maincontext } from '../context/MainProvider'
function Wishlist() {
    const {Wishlist} = useContext(Maincontext)
  return (
    <>
        <div className='Card_container'>

                        {Wishlist.map((x) => <>
                            <div className='fiveth_card' key={x._id}>
                                <img className='fiveth_card_img' src={x.img} />
                                <h4>{x.name}</h4>
                                <p>{x.price}</p>
                            </div>
                        </>)}
                     </div>
    </>
  )
}

export default Wishlist