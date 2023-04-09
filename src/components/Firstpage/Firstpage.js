import React from 'react';
import {  Box,Typography } from '@mui/material';
import Aos from 'aos';
import Img from "./../image.png"
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { usestyle } from '../Navpage/style';
import { Link } from 'react-router-dom';
function Firstpage(props) {
    const classes=usestyle()
useEffect(()=>{
    Aos.init()
    Aos.refresh()
})
const Arr=["Kupke","Sapuni","Aromaticna ulja","Aromaticne soli"]
const offer=Arr.map((item,i)=>
    <div data-aos="zoom-in" data-aos-duration={500}
    key={i}
    data-aos-delay={500*i}
    className={classes.oneaos}
    ><Link  className={classes.oneaos} to={`/webshop/${item.split(" ").join("")}`}><b>{item.toUpperCase()}</b>  </Link>
      
    </div>
)

    return (
        <div style={{overflow:"hidden", backgroundImage:`url(${Img})`,
       backgroundRepeat:"no-repeat", backgroundSize:"cover",
       width:"80%", height:"100vh", justifyContent:"center", alignItems:"center",
       display:"flex", flexDirection:'column'
        
        }}>
            <Box sx={{display:"flex",justifyContent:"center"}}>
         <Typography variant='h2' sx={{
            color:"rgb(167, 147, 190)", 
            textAlign:"center",
            fontSize:{md:"500%", sm:"300%", xs:"200%"},
            fontFamily:"'Merienda', cursive"}}>
            Pogledajte nasu ponudu
            </Typography>   
        </Box>
        <div className={classes.divaos} >
{offer}

        </div>
        </div>
        
    );
}

export default Firstpage;