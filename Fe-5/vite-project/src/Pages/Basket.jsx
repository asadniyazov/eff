import React, { useContext } from 'react'
import { Maincontext } from '../context/MainProvider'
import "./Home.scss"
function Basket() {
    const {Basket,RemoveBasket,IncreaseBasket,DecreaseBasket,GetTotal} = useContext(Maincontext)
  return (
  <>
    <div className='Card_container'>
    <div>Total:{GetTotal()}</div>
                        {Basket.map((x) => <>
                            <div className='fiveth_card' key={x._id}>
                                <img className='fiveth_card_img' src={x.img} />
                                <h4>{x.name}</h4>
                                <p>{x.price}</p>
                                <p>Count:{x.count}</p>
                                <button onClick={()=>RemoveBasket(x)}>Remove Basket</button>
                                <button onClick={()=>IncreaseBasket(x)}>Increase</button>
                                <button onClick={()=>DecreaseBasket(x)}>Decrease</button>
                            </div>
                        </>)}
                     </div>
  </>
  )
}

export default Basket