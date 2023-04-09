import React from 'react';
import { TextField } from '@mui/material';
import {Button, Typography,Autocomplete} from '@mui/material';
import FileBase from 'react-file-base64'
import { usestyle } from './style';
import { useState } from 'react';
import { addPorduct} from '../redux/reduxthunk';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
function Adminform(props) {
    let isvalid=false;
    const dispatch=useDispatch()
    const stafs=["Kupka", "Sapun","Aromaticno ulje","Aromaticna so"]
    const defaultProps = {
        options: stafs,
        getOptionLabel: (option) => option,
      };
    const[userdetails,setuserdetails]=useState({
        title:"",
        description:"",
        price:0,
        type:"",
        sale:0,
        image:"image"
    })



    if(userdetails.price!==0&&userdetails.image!==""){
        isvalid=true
    }
    else{isvalid=false}
    

const handlesubmit=(e)=>{
e.preventDefault()
if(isvalid){
dispatch(addPorduct(userdetails))
}
else {
toast.error("Unesite sva polja!!!")
}
}

    const classes=usestyle()
    return (
        <div className={classes.divform}>
            <Typography variant="h2" sx={{marginTop:{md:20, sm:10, xs:10},
            textAlign:"center",
            fontSize:{md:"500%", sm:"300%", xs:"200%"},
            marginBottom:{md:10, sm:7, xs:5},
             fontFamily:" 'Merienda', cursive", color:"rgb(158, 137, 188)"}}>
                DOBRODOSLI ADMINE
            </Typography>
            <Typography textAlign="center" color="rgb(158, 137, 188)" variant="h4"> Dodajte novi proizvod</Typography>
            <form className={classes.form}  onSubmit={handlesubmit}>
            <TextField value={userdetails.title} label='Naziv' sx={{marginTop:3}} className={classes.input} onChange={(e)=>{setuserdetails({
...userdetails,title:e.target.value
})}} required/>
<TextField type="text" value={userdetails.description} label="Opis"  sx={{marginTop:3}}  className={classes.input} onChange={(e)=>{setuserdetails({
...userdetails,description:e.target.value
})}} required/>
<TextField  
type="number"
value={userdetails.price} label='Cena (RSD)' sx={{marginTop:3}} className={classes.input}  onChange={(e)=>{setuserdetails({
...userdetails,price:e.target.value
})}} required/>
<TextField  
type="number"
value={userdetails.sale} label='Popust (%)' sx={{marginTop:3}} className={classes.input}  onChange={(e)=>{setuserdetails({
...userdetails,sale:e.target.value
})}} required/>
   <Autocomplete
        {...defaultProps}
       sx={{width:"100%"}}
        id="auto-complete"
        autoComplete
        autoHighlight
        onHighlightChange={(e,v)=>setuserdetails({...userdetails,type:v})}
        includeInputInList
        renderInput={(params) => (
        
            <TextField {...params}
            className={classes.input}
            sx={{marginTop:3}}
            inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            label="Vrsta"
            required  />
        
        
        )}
      />
      <div className="inputdiv"> 
      <FileBase 
multiple={false}
type="file"
 onDone={({base64})=>{setuserdetails({...userdetails, image:base64})}} />

      </div>
<Button
sx={{ color:"white",
backgroundColor:"purple", marginTop:3, width:"20%"}}
type="submit" className={classes.button}>OK</Button>
            </form>
        </div>
    );
}

export default Adminform;