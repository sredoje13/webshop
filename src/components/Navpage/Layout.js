import React from 'react';
import { usestyle } from './style';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';
function Layout(props) {

 
    const items=[<InstagramIcon sx={{fontSize:{xs:"small",sm:"large", md:"x-large"}}}/>,<FacebookIcon  sx={{fontSize:{xs:"small", sm:"large",md:"x-large"}}}/>,<LocalPhoneIcon 
     sx={{fontSize:{xs:"small",sm:"large", md:"x-large"}}}/>]
    const listing=items.map((item,i)=>(
        <IconButton >{items[i]}</IconButton>
    ))
    const classes=usestyle()
    return (
        <div 
        style={{height:`100px`}}
         className={classes.layout}>
            <div className={classes.divlay}  style={{
            width:"50%",
            color:"rgb(167, 147, 190)", fontFamily:" 'Merienda', cursive"}}><b>NUDIMO VAM NAJBOLJU PONUDU</b></div>
          <div>{listing}</div>  
        </div>
    );
}

export default Layout;