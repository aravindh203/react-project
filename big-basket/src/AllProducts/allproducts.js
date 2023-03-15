import React from "react";
import './allproducts.scss'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const AllProducts = () =>{
    return(
        <>
            <div className="all-products-container">
                <div className="all-products">
                    <div className="all-products-filter">
                        <div className="product-filter-card">
                            <div className="product-filter">
                                <span>Brand</span>
                            </div>
                            <div className="product-filter-content">
                                <div className="product-search">
                                    <input type={'text'} placeholder='Search by Brand' />
                                    <div>
                                        <i className="bi bi-search"></i>
                                    </div>
                                </div>
                                <div className="product-search-content">
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                    <div>
                                        <input type={'checkbox'}></input>
                                        <lable>Brand name</lable>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-filter-card">
                            <div className="product-filter">
                                <span>Price</span>
                            </div>
                            <div className="product-filter-content">
                                <div>
                                    <input type={'checkbox'}></input>
                                    <lable>Less tha Rs 20()</lable>
                                </div>
                                <div>
                                    <input type={'checkbox'}></input>
                                    <lable>Rs 21 to Rs 50()</lable>
                                </div>
                                <div>
                                    <input type={'checkbox'}></input>
                                    <lable>Rs 51 to Rs 100()</lable>
                                </div>
                                <div>
                                    <input type={'checkbox'}></input>
                                    <lable>Rs 101 to Rs 200()</lable>
                                </div>
                                <div>
                                    <input type={'checkbox'}></input>
                                    <lable>Rs 201 to Rs 500()</lable>
                                </div>
                                <div>
                                    <input type={'checkbox'}></input>
                                    <lable>More tha Rs 501()</lable>
                                </div>
                            </div>
                        </div>
                        <div className="product-filter-card">
                            <div className="product-filter">
                                <span>Discount</span>
                            </div>
                            <div className="product-filter-content">
                                <div>
                                    <input type={'checkbox'}></input>
                                    <lable>Upto 5%()</lable>
                                </div>
                                <div>
                                    <input type={'checkbox'}></input>
                                    <lable>5% - 10%()</lable>
                                </div>
                                <div>
                                    <input type={'checkbox'}></input>
                                    <lable>10% - 15%()</lable>
                                </div>
                                <div>
                                    <input type={'checkbox'}></input>
                                    <lable>15% - 25%()</lable>
                                </div>
                                <div>
                                    <input type={'checkbox'}></input>
                                    <lable>More than 25%()</lable>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="all-products-cards">
                        <div className="all-products-heading">
                            <h2>Organic Fruits & Vegetables (103)</h2>
                            <select name="cars" id="cars">
                                <option value="">Popularity</option>
                                <option value="">Price - Low to High</option>
                                <option value="mercedes">Price - High to Low</option>
                                <option value="audi">Alphabetical</option>
                                <option value="saab">Rupee Saving - High to Low</option>
                                <option value="mercedes">Rupee Saving - Low to High</option>
                                <option value="audi">% Off - High to Low</option>
                            </select>
                        </div>
                        <div className="all-products-icon">
                            <div>
                                <LocalShippingIcon/>
                                <span>ALL PRODUCTS</span>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
}

export default AllProducts;