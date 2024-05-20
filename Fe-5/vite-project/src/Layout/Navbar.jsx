import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import { Maincontext } from '../context/MainProvider'
function Navbar() {
    const {Basket,Wishlist} = useContext(Maincontext)
    return (
        <>
            <header>
                <div className='Navbar'>
                    <div className='Navbar_item1'><img src='https://preview.colorlib.com/theme/florist/img/logo.png
'/></div>
                    
                    <div className='Navbar_item2'>
                        <div className='Navbar_item2_list' >
                            <ul className='Navbar_item2_ul'>
                                <li><Link to={"/"}>Home</Link> </li>
                                <li>About </li>
                                <li> Services</li>
                                <li>Shop </li>
                                <li>Pages </li>
                                <li><Link to={"/admin"}>Admin</Link> </li>
                                <li> <Link to={"/add"}>Add</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='Navbar_item3'>
                        <div className='Navbar_item3_list'>
                            <ul className='Navbar_item3_ul' >
                                <li>
                                    <Link to={'wishlist'}><i class="fa-regular fa-heart"></i>{Wishlist.length}</Link>
                                </li>
                                <li>
                                    <Link to={'basket'}><i class="fa-solid fa-basket-shopping"></i>{Basket.length}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <button className='Hiddenbtn'><i class="fa-solid fa-bars"></i></button>
                  
                </div>
            </header>
        </>
    )
}

export default Navbar