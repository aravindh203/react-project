import React from "react";
import './details.scss'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Details = () =>{
    return(
        <>
            <div className="details-container">
                <div className="details">
                    <div className="details-image">
                        <img src={require('../Asserts/images/fruit.webp')} alt='no image'/>
                    </div>
                    <div className="details-image-content">
                        <span className="name">Fresho</span>
                        <h3>Fresho Capsicum - Green (Loose), 500 g</h3>
                        <p>MRP:<strike>Rs 37.28</strike></p>
                        <h4>Price: Rs 28.33<span className="price">(Rs.0.06/g)</span></h4>
                        <span className="savings">You Save:24%</span>
                        <p>(Inclusive of all taxes)</p>
                        <div className="details-button">
                            <div>
                                <button className="quantity">1</button>
                            </div>
                            <div>
                                <button className="add">ADD TO BASKET</button>
                            </div>
                            <div>
                                <button className="save">SAVE</button>
                            </div>
                        </div>
                        <p><LocalShippingIcon/>Standard: 14 Mar, 7:30AM - 10:30AM</p>
                        <h5>Pack Sizes</h5>
                        <div className="details-boxes">
                            <div className="details-box">
                                <div>
                                    <span className="weight">500 g</span>
                                </div>
                                <div className="details-box-content">
                                    <p>
                                        <span className="rate">RS28.33</span>
                                        MRP:<strike>Rs 37.28</strike>
                                        <span className="savings">24% off</span>
                                    </p>
                                </div>
                                <div className="details-box-icon">
                                    <i class="bi bi-check2"></i>
                                </div>
                            </div>
                            <div className="details-box">
                                <div>
                                    <span className="weight">500 g</span>
                                </div>
                                <div className="details-box-content">
                                    <p>
                                        <span className="rate">RS28.33</span>
                                        MRP:<strike>Rs 37.28</strike>
                                        <span className="savings">24% off</span>
                                    </p>
                                </div>
                                <div className="details-box-icon">
                                    <i class="bi bi-check2"></i>
                                </div>
                            </div>
                            <div className="details-box">
                                <div>
                                    <span className="weight">500 g</span>
                                </div>
                                <div className="details-box-content">
                                    <p>
                                        <span className="rate">RS28.33</span>
                                        MRP:<strike>Rs 37.28</strike>
                                        <span className="savings">24% off</span>
                                    </p>
                                </div>
                                <div className="details-box-icon">
                                    <i class="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;