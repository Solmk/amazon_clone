import React from 'react'
import classes from '../Header/Header.module.css'

import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
// import { BiCartAdd } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
function Header() {
  return (
    <>
        <section>
            <div className= {classes.header_container}>
 
                <div className={classes.logo_container}>
                    <a href="#">
                        <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="amazon logo" />
                    </a>  
                
              
                    <div className = {classes.delivery}>
                    <span>
                        <SlLocationPin />
                    </span> 
                        <div>
                            <p>Deliver to</p>
                            <span>Ethiopia</span>
                        </div>    
                    </div>
                </div>    
                <div className = {classes.search}>
                    {/* {search} */}
                    <select name="" id="">
                        <option value="">All</option>
                    </select>
                    <input type="text" placeholder='search product'/>
                    <BsSearch size={36}/>
                </div>
                <div className ={classes.order_container}>
                    <a href="" className = {classes.language}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/800px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                        <select>
                            <option value="">EN</option>
                        </select>
                    </a>
                    <a href="">
                        <p>Sign In</p>
                        <span>Account & List</span>
                    </a>
               
                    <a href="">
                        <p>returns</p>
                        <span>& Orders</span>
                    </a>              
                    <a href="" className={classes.cart}>
                        <BiCart size={35} />
                        <span>0</span>
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}
export default Header