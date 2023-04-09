import { AppBar,Box,Toolbar,Typography,Button, IconButton,ButtonGroup } from "@mui/material";
import React, { useState } from 'react';
import { usestyle } from "./style";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import EmojiNatureOutlinedIcon from '@mui/icons-material/EmojiNatureOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Backdrop,Paper} from "@mui/material";
import { useDispatch } from "react-redux";
import { reducerserver } from "../redux";
import { useHistory } from "react-router-dom";
import { bye } from "../redux";
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
function Navbar(props) {
  const loc=useLocation().pathname
  
  let hei;
  if(loc!=="/"){
    hei=true
  }
  else{
    hei=false
  }
  const dispatch=useDispatch()

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      dispatch(bye.setheight(150-position))

  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [])
  let displ;
 
    if(scrollPosition>50||!hei){
      displ=0
    }
    else displ=10
  let islogin
  const logindatas=useSelector((state)=>state.Server.logindatas)
  const shopingqty=useSelector((state)=>state.byeitems.totalqty)
  const[open,setopen]=useState(false)
const history=useHistory()
 
  const openBackdrop=()=>{
    setopen(true)
    dispatch(reducerserver.infodisp())
  }
  const closeBackdrop=()=>{
setopen(false)
  }
  if(logindatas===null){
islogin=false
  }
  else{
    if(logindatas.user||logindatas.isadmin){
      islogin=true
    }
    else{
      islogin=false
    }
  }
  const height=useSelector((state)=>state.byeitems.heightitems)
 
  let scale;
  if(height>0&&hei){

scale=150/(height+80)
  }
  else {
    
   scale=1.5
  }
 


  const classes=usestyle()
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed"  sx={{backgroundColor:"rgb(167, 147, 190)", marginTop:{md:displ,sm:displ, xs:0}
      
      }}>
          <Toolbar>
            <Link to="/" className="link"><EmojiNatureOutlinedIcon fontSize="large"/></Link>
          
            <Typography variant="h6" component="div" sx={{
                 flexGrow: 1, marginLeft:2 }}>
                  <Button sx={{scale:`${scale}`,}}>
                    <Link to="/webshop/Kupke"  className={classes.buttonshop}> Web SHOP</Link>
                    </Button>
            
            </Typography>
            <IconButton sx={{marginTop:{md:1,xs:0.7}}}><Link to='/webshop/shoppingcard' style={{color:"white"}}>
            <ShoppingCartOutlinedIcon sx={{fontSize:{md:"x-large",xs:"large"},marginRight:{md:0,xs:-4}}} />
            </Link>
              
              <Typography sx={{fontSize:"small", marginTop:-1.5,marginRight:{md:0,xs:1}}}>{shopingqty}</Typography>
              </IconButton>
              {logindatas.isadmin&&<Link to="/adminform" className={classes.button}>UBACI STAVKU</Link>
}
            {!islogin&&<ButtonGroup>

            <Link to="/signin" className={classes.button}>Sign in</Link>
            <Link to="/login" className={classes.button}>Login</Link>
            </ButtonGroup>}
            {islogin&&
           
              <Button onClick={openBackdrop}
              sx={{color:"white", marginLeft:2, 
              fontSize:{md:"large",xs:"x-small"}}} className={classes.button} >Log out</Button>
             }
            <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={closeBackdrop}
><Box>
<Paper sx={{display:"flex",

textAlign:"center",
flexDirection:"column" ,padding:{md:"30px",sm:"20px",xs:"10px"}, 
}}>
  <Typography>Sigurni ste da zelite da se odjavite?</Typography>
 <Button onClick={()=>{dispatch(reducerserver.logout()); history.push("/webshop/Kupke")}} >OK</Button> 
 
 
  </Paper> 

</Box>

</Backdrop>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Navbar;