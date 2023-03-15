import React from "react";
import './header.scss'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Header = () =>{

    return(
        <>
           <div className="header-container">
                <div className="header">
                    <div className="header-image">   
                        <img src={require('../Asserts/images/bb_logo.png')} alt='ni image'/>
                    </div>
                    <div className="header-content">
                        <div className="header-contact">
                            <div className="header-contact-content">
                                <div className="heaer-contact-icon">
                                    <i className="bi bi-telephone"></i>
                                    <span>1860 123 1000</span>
                                </div>
                                <div className="heaer-contact-icon">
                                    <i className="bi bi-geo-alt"></i>
                                    <span>560004,Bangalore</span>
                                </div>
                                <div className="heaer-contact-icon">
                                    <i className="bi bi-person"></i>
                                    <span>Login/Sign Up</span>
                                </div>
                            </div>
                        </div>
                        <div className="header-search">
                            <div className="header-input">
                                <input type={'text'} placeholder={'Serach for Products...'}/>
                                <button><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                        <div className="header-buy">
                            <div>
                                <i className="bi bi-basket-fill"></i>
                            </div>
                            <div className="header-icon-content">
                                <p>my Basket</p>
                                <p>0 items</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-dropdwon">
                        <p>SHOP BY CATEGORY</p>
                    </div>
                    <div className="header-bottom-offer">
                        <LocalOfferIcon/><p>OFFERS</p>
                    </div>
                </div>
           </div>                 
        </>
    );
}

export default Header;