import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {ListItemAvatar} from '@mui/material';
import {Avatar} from '@mui/material';
import { Button, IconButton, Typography } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { usestyle } from '../Logpage/style';
import { Link } from 'react-router-dom';
import { bye } from '../redux';
import { reducerserver } from '../redux';
import { useHistory } from 'react-router-dom';
import Byeback from './Byeback';
function Shopingcard(props) {
  const history=useHistory()
  const[opennotewindow,setopennote]=useState(false)
    const classes=usestyle()
    const allitems=useSelector((state)=>state.byeitems.items)
    const isuser=useSelector((state)=>state.Server.logindatas.user)
    
    const totalprice=useSelector((state)=>state.byeitems.totalPrice)
    const dispatch=useDispatch()
    let items;
    if(allitems.length>0){
     items=allitems.map((item,i)=>(
        <ListItem 
        key={i}
        sx={{display:"flex",
        
       /*  width:{md:"550px", sm:"400px", xs:"260px"}, */
        borderBottom:"1px solid grey",
        justifyContent:"space-around"}}  >
            <ListItemAvatar>
          <Avatar sx={{ bgcolor: "purple", fontSize:"xx-small" ,
          marginRight:{md:2, sm:1, xs:0},
          padding:{md:"10px", sm:"5px",xs:"0px"}, textAlign:"center" }} aria-label="recipe"
          >{item.type}</Avatar>
        </ListItemAvatar>
          <ListItemText
          
          primary={(<Typography
            sx={{maxWidth:"100%",
            fontSize:{xs:"xx-small",sm:"small", md:"medium"},
            wordWrap:"break-word",
            textAlign:"start"}}
          >{item.title.toUpperCase()}</Typography>)}
            
            />

         
          <IconButton onClick={()=>dispatch(bye.canceloneitem(item))} edge="end" aria-label="comments">
                <ArrowLeftOutlinedIcon />
              </IconButton>
          <Typography variant='paragraph' marginLeft={1.5} textAlign="center">{item.quantity}</Typography>
          <IconButton onClick={()=>dispatch(bye.bye(item))} edge="end" aria-label="comments">
                <ArrowRightOutlinedIcon />
              </IconButton>
       
          
          <IconButton onClick={()=>dispatch(bye.deleteonebyeitem(item))} edge="end" aria-label="comments">
                <DeleteTwoToneIcon />
              </IconButton>
      </ListItem>
     )) 

    
    }else{
        items=(<Typography
            sx={{color:"rgb(158, 137, 188)", textAlign:"center",
          fontSize:{xs:"x-small", sm:"large", md:"x-large"}
        }}
            variant="h4">Nemate proizvoda, vratite se na <Link to="/webshop/Kupke">web prodavnicu</Link></Typography>)
    }

    const notepost=()=>{

    }
    return (
        <div style={{width:"100%", display:"flex", justifyContent:"center",
        marginTop:"100px",
        alignItems:"center",
        flexDirection:"column"
        }}>
            <Typography variant="h3" sx={{ color:"purple",
            fontSize:{xs:"xx-large", sm:"300%", md:"500%"},
    fontFamily: "'Merienda', cursive",}}>VASA KOPA</Typography>
              <Box
        sx={{ width: '100%', bgcolor: 'background.paper' }}
      >
        <List
           sx={{ width: '100%',
           height:"auto",
           bgcolor: 'white',
           display:"flex",
           flexDirection:"column",
           justifyContent:"center",
           alignItems:"cemter",
            marginTop:"20px"}}
        >
          {items}
        {allitems.length>0&&<Typography sx={{display:"flex",
         marginTop:"10px",
         justifyContent:"space-between"}}  >
          <Typography sx={{color:"purple",marginLeft:"10px"}} >
            <b>UKUPAN IZNOS</b></Typography>
          <Typography sx={{color:"purple", marginRight:"10px"}} >
            <b>{totalprice} RSD</b>
            </Typography>
  
         </Typography>}
        </List>
      </Box>
      {allitems.length>0&&
     
      <Button 
      onClick={()=>{
        if(isuser){
        setopennote(true)}
        else{
          history.push("/login")
        }
        
     
      }}
      sx={{ color:"white",
      backgroundColor:"purple", marginTop:{md:3,sm:0,xs:0}, width:"20%"}}
      className={classes.button}>KUPI</Button>
     
      }
     {isuser&& <Byeback  
  
    openback={opennotewindow}
    closeback={()=>{setopennote(false); dispatch(reducerserver.infodisp());dispatch(bye.deleteitemforbye())}}
    submit={notepost}
    paper={classes.paper}
    box={classes.box}
   
   />}
        </div>
    );
}

export default Shopingcard;