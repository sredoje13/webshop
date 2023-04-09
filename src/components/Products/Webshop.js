import React from 'react';
import {NavLink,  Switch} from 'react-router-dom'
import { Route } from 'react-router-dom';
import Sapuni from './Sapuni';
import Aromaticnaulja from './Aromaticnaulja';
import Aromaticnaso from './Aromaticnaso';
import Kupke from './Kupke';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getElement } from '../redux/reduxthunk';
import { useSelector } from 'react-redux';
import { ToggleButtonGroup } from '@mui/material'
import { useState } from 'react';
import {Typography} from '@mui/material';
import {ToggleButton} from '@mui/material';
import { usestyle } from './style';
import Shopingcard from './Shopingcard';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
 function Webshop(props) {

 const isloading=useSelector((state)=>state.Server.isloading)


  const location=useLocation()
  let loc=true;
  if(location.pathname==="/webshop/shoppingcard"){
    loc=false
  }

  const [expanded, setExpanded] = useState(false);
  const logindatas=useSelector((state)=>state.Server.logindatas)
 
    const classes=usestyle()
const dispatch=useDispatch()

const [alignment, setAlignment] =useState('Kupka');


const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

    useEffect(()=>{
        dispatch(getElement())
    },[dispatch])
 const allitems=useSelector((state)=>state.Server.items)    

const kupke=allitems.filter((oneitem)=>oneitem.type==="Kupka")
const sapuni=allitems.filter((oneitem)=>oneitem.type==="Sapun")
const arulja=allitems.filter((oneitem)=>oneitem.type==="Aromaticno ulje")
const arsoli=allitems.filter((oneitem)=>oneitem.type==="Aromaticna so")
const showtitlee=logindatas.user||logindatas.isadmin
    return (
       <div  >

        <div
        className={classes.divic} >
    
     { showtitlee&&<Typography variant="h5"
     sx={{marginTop:{md:5,sm:6,xs:-8},
     color:"rgb(158, 137, 188)",
  textAlign:"center",
     fontFamily:"'Merienda', cursive",
     fontSize:{md:"xx-large",

     sm:"large",xs:"50%"}}}> ZDRAVO {logindatas.data.name.toUpperCase()},
      DOBRODOSLI NA NASU STRANICU!</Typography>}

 
      
  {loc&& <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{position:"relative", backgroundColor:"white",
       display:"flex", justifyContent:"center",
       marginTop:{xs:showtitlee?"20px":"-50px", sm:"50px", md:"0px"}
    }}
    >
      <ToggleButton
       style={{ border:"0px", backgroundColor:"transparent" }} 
      className={classes.toggle} value="Kupka">
        <NavLink className="link" exact activeClassName='activelink' to="/webshop/Kupke">Kupke</NavLink></ToggleButton>
      <ToggleButton  style={{ border:"0px", backgroundColor:"transparent" }}
       className={classes.toggle} value="Aromaticnaso">
        <NavLink  className="link" exact activeClassName='activelink' to="/webshop/Aromaticnesoli">Soli
      </NavLink></ToggleButton>
      <ToggleButton  style={{ border:"0px", backgroundColor:"transparent" }}
      className={classes.toggle}  value="Aromaticnoulje">
        <NavLink className="link" exact activeClassName='activelink' to="/webshop/Aromaticnaulja">Ulja</NavLink></ToggleButton>
      <ToggleButton  style={{ border:"0px", backgroundColor:"transparent" }}
      className={classes.toggle}  value="Sapun">
        <NavLink className="link" exact activeClassName='activelink' to="/webshop/Sapuni">Sapuni</NavLink></ToggleButton>
    </ToggleButtonGroup>}
    </div>
       {!isloading&& <Switch>
    <Route path="/webshop/Kupke" children={<Kupke
    handleExpandClick={()=>setExpanded(!expanded)}
    expanded={expanded}
    items={kupke}/>}>
</Route>
<Route  path="/webshop/Aromaticnesoli" children={<Aromaticnaso 
handleExpandClick={()=>setExpanded(!expanded)}
expanded={expanded}
items={arsoli}/>}>
</Route>
<Route  path="/webshop/Aromaticnaulja" children={<Aromaticnaulja
handleExpandClick={()=>setExpanded(!expanded)}
expanded={expanded}
items={arulja}/>}>
</Route>
<Route  path="/webshop/Sapuni" children={<Sapuni
handleExpandClick={()=>setExpanded(!expanded)}
expanded={expanded}
items={sapuni}/>}>
</Route>
<Route  path="/webshop/shoppingcard" children={<Shopingcard/>}>
</Route>
       </Switch>}
      {!isloading&&loc&&<Footer/>}
     {isloading&&<Stack sx={{ width: '100%', marginTop:"250px", color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="primary" />
      <LinearProgress color="inherit" />
    </Stack>}


        </div> 
        
    );
}

export default Webshop;