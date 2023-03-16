import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Container,Grid,Button,CardActionArea,CardActions,Autocomplete,TextField} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "./basket.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePrice } from "../slice";

const Basket = () => {
  const state = useSelector(({ products }) => products);
  console.log("state", state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToDetails = () => {
    navigate("/details");
  };

  return (
    <Container className="basket-container">
      <div className="heading">
        <h2>My Smart Basket</h2>
      </div>

      <Grid container className="card-container">
        {state.products.map((value, index) => {
          const update = (event, id) => {
            var newIndex = value.weightPakages.findIndex(
              (value) => value === event.target.innerText
            );
            dispatch(updatePrice({ indexNo: newIndex, id }));
          };

          return (
            <Grid item xs={2.4} className="cards" key={index}>
              <Card className="card">
                <CardActionArea>
                  <CardMedia onClick={() => goToDetails()} component="img" image={value.imageUrl} height="200" alt={value.productName}/>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">{value.brandName}</Typography>
                    <Typography onClick={() => goToDetails()} gutterBottom variant="body2">{value.productName}</Typography>
                  </CardContent>
                </CardActionArea>
                <div className="card-details">
                 
                  {
                    value.weightPakages.length ? 
                      <Autocomplete options={value.weightPakages} value={value.weight} onChange={(event) => update(event, value.id)} sx={{ width: 200 }} renderInput={(params) => <TextField {...params} />}/>

                      :

                      <Typography gutterBottom variant="body2">{value.weight}</Typography>
                  }
                  
                  <div className="card-actions">
                    <CardActions>
                      <span>
                        MRP:<strike>Rs {value.price}</strike>
                      </span>
                      <Typography gutterBottom variant="body2">
                        Rs {value.discountedPrice}
                      </Typography>
                    </CardActions>
                    <div className="card-content">
                      <div className="card-info">
                        <LocalShippingIcon />
                      </div>
                      <div className="card-info">
                        <p>
                          <span>Standard Delivery:</span> 11 Mar, 7:30AM -
                          10:30AM
                        </p>
                      </div>
                    </div>
                    <div className="card-button">
                      <Button className="decrement-button">Qty</Button>
                      <input type={"text"} value={1} onChange={() => {}}></input>
                      <Button className="increment-button" variant="outlined">
                        Add <i className="bi bi-basket-fill"></i>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="card-offer">
                  <div className="offer">
                    <span>GET {value.offer}% OFF</span>
                    <i className="fa fa-certificate"></i>
                  </div>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Basket;
