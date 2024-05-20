import React, { useContext, useEffect, useState } from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import { Maincontext } from '../context/MainProvider'
function Home() {
    const {AddBasket,AddWishlist} = useContext(Maincontext)
    const [Category, setCategory] = useState([])
    useEffect(() => {
        GetProduct()
    }, [])
    async function GetProduct() {
        const res = await fetch("http://localhost:3100/shop")
        const data = await res.json()
        setCategory(data)
    }
    return (
        <>
            <main>

                <section className='Hero'>
                    <div className='Hero_container'>
                        <div className='Hero_container_div'>
                            <div className='Hero_container_div_text'>
                                <div className='Hero_container_div_text1'>Fresh Flowers & GiFt Shop</div>
                                <div className='Hero_container_div_text2'>Making  beatiful flowers a part of your life</div>
                                <button className='Hero_container_div_button'> Shop Now</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='Middlesection'>
                <div className='Middlesection_card_container'>
                    <div className='middlesection_card'>
                            <div>
                                <img src='	https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png'/>
                            </div>
                        <div className='middlesection_card_text'>
                        <div  className='middlesection_card_text1'>
                        100% Freshness
                        </div>
                            <div className='middlesection_card_text2'>
                            Most people are unaware of the less common flower
                            </div>
                        </div>
                    </div>

                    <div className='middlesection_card'>
                            <div>
                                <img src='	https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png'/>
                            </div>
                        <div className='middlesection_card_text'>
                        <div  className='middlesection_card_text1'>
                        Made by artist
                        </div>
                            <div className='middlesection_card_text2'>
                            Most people are unaware of the less common flower
                            </div>
                        </div>
                    </div>

                    <div className='middlesection_card'>
                            <div>
                                <img src='		https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png'/>
                            </div>
                        <div className='middlesection_card_text'>
                        <div  className='middlesection_card_text1'>
                        Own courier
                        </div>
                            <div className='middlesection_card_text2'>
                            Most people are unaware of the less common flower
                            </div>
                        </div>
                    </div>


                    <div className='middlesection_card'>
                            <div>
                                <img src='	https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png'/>
                            </div>
                        <div className='middlesection_card_text'>
                        <div  className='middlesection_card_text1'>
                        100% Freshness
                        </div>
                            <div className='middlesection_card_text2'>
                            Most people are unaware of the less common flower
                            </div>
                        </div>
                    </div>
                </div>
                </section>


                <section className='Thirdsection'>
                    <div className='Thirdsection_container'>
                        <div className='Thirdsection_container_div'>
                           <div className='Thirdsection_container_div_img1'>
                            <div className='Thirdsection_container_div_box'>
                                <div>Fresh Flower</div>
                                <div>( 25 items )</div>
                            </div>
                           </div>
                           <div className='Thirdsection_container_div_img2'>
                            <div className='Thirdsection_container_div_box'>
                                <div>Succulent plants</div>
                                <div>( 162 items )</div>
                            </div>
                           </div>
                           <div className='Thirdsection_container_div_img3'>
                            <div className='Thirdsection_container_div_box'>
                                <div>Cactus plants</div>
                                <div>( 58 items )</div>
                            </div>
                           </div>
                           <div className='Thirdsection_container_div_img4'>
                            <div className='Thirdsection_container_div_box'>
                                <div>Funiture tree</div>
                                <div>( 25 items )</div>
                            </div>
                           </div>
                        </div>
                    </div>
                </section>
                <section className='fiveth'>
                    <div className='fiveth_card_container'>
                     <div className='fiveth_card_container_item1'>Our Flower</div>
                     <div className='fiveth_card_container_item2'>New Arrivals</div>
                     <div className='fiveth_card_container_item3'>
                        <div  className='Divvvv' >All</div>
                        <div className='Divvvv'>Bouquet</div>
                        <div className='Divvvv'>Flower box</div>
                        <div className='Divvvv'>Flower shelf</div>
                        <div className='Divvvv'> Basket of flower</div>
                        <div className='Divvvv'>Gift combos</div>
                     </div>
                     <div className='Card_container'>
                        {Category.map((x) => <>
                            <div className='fiveth_card' key={x._id}>
                            <div onClick={()=>AddWishlist(x)}><i class="fa-regular fa-heart"></i> </div>
                                <img className='fiveth_card_img' src={x.img} />
                                <h4>{x.name}</h4>
                                <p>{x.price}</p>
                                <Link to={"/detail/" + x._id}>Go detail</Link>
                                <button onClick={()=>AddBasket(x)}><i class="fa-solid fa-basket-shopping"></i>Add Basket</button>
                            </div>
                        </>)}
                     </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home