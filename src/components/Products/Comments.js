import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box,Typography,IconButton , Button} from '@mui/material';
import { purple } from '@mui/material/colors';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';
import { addComment } from '../redux/reduxthunk';
import Formforcomment from './Formforcomment';
import { useDispatch } from 'react-redux';
import { usestyle } from '../Logpage/style';
import AlignItemsList from './commentList'
import { deletecomment } from '../redux/reduxthunk';
function Comments(props) {
    const dispatch=useDispatch()
    
    const classes=usestyle()
    const comments=useSelector((state)=>state.Server.comments)
    const islogin=useSelector((state)=>state.Server.logindatas)
    const productforcom=useSelector((state)=>state.Server.productforcom)
  
 const user=useSelector((state)=>state.Server.user)
   
    const[allforcomment,setallforcomment]=useState({
        comment:"", user:"",image:"",email:"",_id:"",date:""
    })
    let haveuser=true

    const[isableforcomment,setisable]=useState(false)
    let addcomments;
    let finalycomment;
    let arrayofcomments=[]
    let noarrayofcomments=[]
    const deleteitem=(item)=>{
        const itemfordelete={...item,productId:productforcom._id}
dispatch(deletecomment(itemfordelete))
    }

     if(islogin.user){
        const isuserthere=comments.filter((item)=>item.email===user.email)
         
        for (let i=0;i<isuserthere.length;i++){
            arrayofcomments[i]={...isuserthere[i],usercomment:true}
            
        }
       const isnotuserthere=comments.filter((item)=>item.email!==user.email)
        for (let i=0;i<isnotuserthere.length;i++){
            noarrayofcomments[i]={...isnotuserthere[i],usercomment:false}    
            }
        finalycomment=[...arrayofcomments,...noarrayofcomments]
        
        haveuser=true
addcomments=(<IconButton onClick={()=>setisable(true)}>
    <AddCircleOutlineIcon/>
     
     </IconButton>)
     }
    
     else if(!islogin.user){
        finalycomment=comments
        haveuser=false
        addcomments=(<IconButton sx={{width:"100%", "&:hover":{backgroundColor:"transparent"}}}>
            <Link to="/login"><AddCircleOutlineIcon fontSize='large'/></Link>
           
             </IconButton>)
     }
     
let allcomments;
if(comments.length===0){
  allcomments=(<Box>
    <Typography sx={{color:purple[200], fontFamily: "'Merienda', cursive",}} textAlign="center"variant="h4">Nema komentara za ovaj proizvod!</Typography>
   

    </Box>)
}
else{
  allcomments=finalycomment.map((item,i)=>(
    <div key={i} className={classes.divlist}>
        
        <AlignItemsList 
        delete={()=>deleteitem(item)}
        name={item.user} comment={item.comment} imege={item.image}
        isuser={item.usercomment}
        
        /></div>
  ))
}

const addcomment=(e)=>{
    e.preventDefault()
   dispatch(addComment(allforcomment))
   .then(()=>{setallforcomment({...allforcomment,comment:""})})

}
    return (
        <div className={classes.commentformdiv} >
             <Button
        onClick={props.close}
        sx={{ width:"100%",
        color:"purple", marginTop:1}}
       type="submit"
        
        >X</Button>
            <div className={classes.divv}> {allcomments}  </div>
           
       <Typography textAlign="center" width="100%"  sx={{color:purple[200],}} variant="h5">Dodajte komentar</Typography>
   {addcomments}
       {isableforcomment&&haveuser&&
        <Formforcomment
        comentform={classes.commentform}
        comment={allforcomment.comment}
        onChange={(e)=>setallforcomment({user:user.name,
            date:new Date(),
        email:user.email,image:user.image, comment:e.target.value,_id: productforcom._id})}
classesbutton={classes.button}
addcomment={addcomment}

        />
        
        }   

        </div>
    );
}

export default Comments;