import React,{useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container,Grid,Button, CardActionArea, CardActions,Autocomplete,TextField } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import './basket.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Basket = () =>{

  const state=useSelector(({products})=>products)

  const navigate=useNavigate()

  const goToDetails = () =>{
    navigate('/details')
  }

  
  
  return (

  <Container className='basket-container'>

    <div className='heading'>
      <h2>My Smart Basket</h2>
    </div>


    <Grid container className='card-container'>
      
      {
        state.products.map((value,index)=>{

          var indx=0;
         

          const changeIndex = (event)=>{
              var newIndex=value.weight.findIndex(value=>value===event.target.innerText)              
              console.log('index',newIndex);
          }

          
          const disCountedRate=Number((value.rate[indx]-((value.offer/100)*value.rate[indx])).toFixed(2));
        
          return(
            <Grid item xs={2.4}  className='cards' key={index}>
              <Card className='card'>
                <CardActionArea>
                    <CardMedia onClick={()=>goToDetails()} component="img" image={value.imageUrl} height="200" alt="green iguana"/>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">fresho</Typography>
                        <Typography onClick={()=>goToDetails()} gutterBottom variant="body2">{value.product_name}</Typography>   
                    </CardContent>
                </CardActionArea>
                
                <div className='card-details'>
                  <Autocomplete options={value.weight} value={value.weight[indx]}  onChange={(event)=>console.log(event)} sx={{ width: 200 }} renderInput={(params) => <TextField {...params} />}/>
                
                <div className='card-actions'>
                  <CardActions>
                    <span>MRP:<strike>Rs {value.rate[indx]}</strike></span><Typography gutterBottom variant="body2">Rs {disCountedRate}</Typography>
                  </CardActions>
                  <div className='card-content'>
                      <div className='card-info'>
                        <LocalShippingIcon/>
                      </div>
                      <div className='card-info'>
                        <p><span>Standard Delivery:</span> 11 Mar, 7:30AM - 10:30AM</p>
                      </div>
                    </div>
                    <div className='card-button'>
                      <Button className='decrement-button' >Qty</Button>
                      <input type={'text'} value={1} onChange={()=>{}}></input>
                      <Button className='increment-button' variant="outlined">Add <i className="bi bi-basket-fill"></i></Button>
                    </div>
                </div>
              </div>
              <div className='card-offer'>
                <div className='offer'>
                  <span>GET {value.offer}% OFF</span><i className="fa fa-certificate"></i>  
                </div>  
              </div>  
            </Card>
          </Grid>
          );
        })
      }
  
    </Grid>
  </Container>



  );
}

export default Basket;