import React from 'react';
import { Box,Typography,Button,Backdrop, Paper } from '@mui/material';
import { purple } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { byeitem } from '../redux/reduxthunk';
import {bye} from  '../redux/index'
import { reducerserver } from '../redux/index';
function Byeback(props) 
{const dispatch=useDispatch()
    const allitems=useSelector((state)=>state.byeitems.items)
    const users=useSelector((state)=>state.Server.user)
    const info=useSelector((state)=>state.Server.byeinfo)
    const byein=useSelector((state)=>state.Server.infobyee)
    const totalprice=useSelector((state)=>state.byeitems.totalPrice)
const userr={name:users.name, adress:users.adresa,number:users.number}
let item=[]
for(let oneitem in allitems){
    item.push({name:allitems[oneitem].title, number:allitems[oneitem].quantity})
}
const totalitem={price:totalprice, item:item}

const finaly={user:userr,items:totalitem}

let text;
if(info){
text="Uspesno ste obavili kupovinu!"
}
else{
text="Da li zelite da kupite proizvod?"
}
    return (
       <Backdrop 
       open={props.openback}
       sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}

       >
        <Box className={props.box}>
        <Paper 
        sx={{width:"200px",height:"200px", display:"flex",
    flexDirection:"column", justifyContent:"center", alignItems:"center"}}

        >
            <Button
    sx={{backgroundColor:"white", color:"purple"}}
    onClick={props.closeback}>X</Button>
        <Typography 
        sx={{marginTop:5, marginBottom:3,
        textAlign:"center", color:purple[200]
        }}
        >{text}</Typography>
   {!info&&<Button 
    sx={{backgroundColor:"white", color:"purple"}}
    className={props.buttonclassname}
    onClick={()=>dispatch(byeitem(finaly))
        .then(()=>dispatch(bye.deleteitemforbye()))
        
    
    }
    type="submit">OK</Button>}
        </Paper>
        
        </Box>
       
    
       </Backdrop>
    );
}

export default Byeback;