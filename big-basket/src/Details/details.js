import React, { useEffect, useState } from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './details.scss'
import { valueToPercent } from "@mui/base";

const Details = () =>{

    const state = useSelector(({ products }) => products);
    const params=useParams();
    console.log('params',params);

    const [detail,changeDetail]=useState(state[params.key][params.index])
    console.log('details',detail);

    useEffect(()=>{
        changeDetail(state[params.key][params.index])
    },[params])

    const update = (index) =>{
        console.log('index',index);
    }


    return(
        <>
            <div className="details-container">
                <div className="details">
                    <div className="details-image">
                        <img src={detail.imageUrl} alt='no image'/>
                    </div>
                    <div className="details-image-content">
                        <span className="name">{detail.brandName}</span>
                        <h3>{detail.productName}, {detail.weight.slice(0,detail.weight.indexOf('-'))}</h3>
                        <p>MRP:<strike>Rs {detail.price}</strike></p>
                        <h4>Price: Rs {detail.discountedPrice}<span className="price">(Rs.0.06/g)</span></h4>
                        <span className="savings">You Save:{detail.offer}%</span>
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
                            {
                                detail.weightPakages.length ? 

                                <>
                                    {
                                        detail.weightPakages.map((value,index)=>{
                                            return(
                                                <div className="details-box" name={index} key={index} onClick={(event)=>update(event.target.__reactProps$pc3r6y9m6k.name)}>
                                                    <div name={index}>
                                                        <span className="weight" name={index}>{value.slice(0,detail.weight.indexOf('-')-1)}</span>
                                                    </div>
                                                    <div className="details-box-content" name={index}>
                                                        <p name={index}>
                                                            <span className="rate" name={index}>RS {detail.dicountedRate[index]}</span>
                                                            MRP:<strike name={index}>Rs {detail.rate[index]}</strike>
                                                            <span className="savings" name={index}>{detail.offer}% off</span>
                                                        </p>
                                                    </div>
                                                    <div className="details-box-icon" name={index}>
                                                        <i className="bi bi-check" name={index}></i>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </>
                                :
                                <p>{detail.weight}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;