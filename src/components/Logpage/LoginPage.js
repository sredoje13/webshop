import React from 'react';
import { TextField,Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useLocation} from 'react-router-dom'
import {loginuser, AddUser} from './../redux/reduxthunk'
import { useDispatch } from 'react-redux';
import { usestyle } from './style';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast'
import { useEffect } from 'react';
import { getUsers } from './../redux/reduxthunk';
import FileBase from 'react-file-base64'
function LoginPage(props) {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])
    const history=useHistory()
    
    const logindatas=useSelector((state)=>state.Server.logindatas)
    const allusers=useSelector((state)=>state.Server.allusers)
   
   

    const classes=usestyle()
const location=useLocation().pathname
let islogin=true;



const[userdetails,setuserdetails]=useState({
    name:"",
    password:"",
    email:"",
    adresa:"",
    image:"",
  
})
let isfounduser;

const isfound=allusers.find((item)=>item.email.trim()===userdetails.email)
if(isfound){
    isfounduser=true
    
}
else{
    isfounduser=false
}
let isuser=false
let isadmin;
let errorpassword=false
const isfoundadmin=allusers.find((item)=>item.email===process.env.EMAIL&&item.password===process.env.PASSWORD)
if(isfoundadmin){
    isadmin=true
}
const isfoundemail=allusers.find((item)=>item.email===userdetails.email&&item.password===userdetails.password)
if(isfoundemail){
    isuser=true
}

const isfoundepassword=allusers.find((item)=>item.email===userdetails.email&&item.password!==userdetails.password)
if(isfoundepassword){
    errorpassword=true
}





console.log (isfounduser) 
let title;
let variant;
if(location==="/login"){
    if(!logindatas.user){
    title="Ulogujte se"
    islogin=true
    variant=(<div style={{display:"flex", alignItems:"center"}} ><p>Ukoliko nemate nalog</p><Link color="purple" style={{marginLeft:5, 
    "&:hover":{opacity:0.5}}} to="/signin">napravite ga</Link></div>)
        }
    else{
        title="Dobrodosli!!!"
        islogin=true
        variant=(<div style={{display:"flex", alignItems:"center"}} >
            <Typography
            sx={{fontSize:"200%",marginTop:"-100px", alignItems:"center"}}>{logindatas.data.name.toUpperCase()}</Typography></div>)
    }
}
else{
    islogin=false
    title="Napravite nalog"
    variant=`Napravite nalog i uzivajte u nasim proizvodima`
}
    const submithandler=(e)=>{
        e.preventDefault()
    if(islogin){
dispatch(loginuser({password:userdetails.password, email:userdetails.email})).then(()=>{
    setuserdetails({name:"",email:"", password:""})})
    
        if(isadmin){
            history.push("/adminform")
        }
        else if(!isfounduser){
            toast.error(" Ne postoji korisnik")
                setuserdetails({name:"",email:"", password:""})}
        
        else if(errorpassword){
             toast.error("Niste dobro ukucali sifru")
                setuserdetails({name:"",email:"", password:""})
        }
        else if(isuser){
            toast.success("Uspesno ste se ulogovali!!!")
        }
    }

    else{

        if(isfounduser){
            toast.error("Korisnik sa ovim e-mailom vec postoji!!!",
            {
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              }
            )
            dispatch(getUsers()) 
                setuserdetails({name:"",email:"", password:"",adresa:"", broj:null})
        }
        else{
            dispatch(AddUser(userdetails))
            toast.success("Uspesno ste postali nas korisnik mozete se ulogovati!!!",
            {
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              }

            )
            setuserdetails({name:"",email:"", password:"",adresa:"", broj:null})
        
                
            
        }
    }

  
    }
    return (
        <div className={classes.divform} >
            <Typography variant="h3" sx={{marginTop:20, marginBottom:{md:10, xs:5},fontSize:{md:"500%", sm:"300%", xs:"200%"},
             fontFamily:" 'Merienda', cursive", color:"rgb(158, 137, 188)",textAlign:"center"}}>{title.toUpperCase()}</Typography>
{!logindatas.user&&<form className={classes.form} onSubmit={submithandler}>
{!islogin&&<TextField value={userdetails.name} label='Name' sx={{marginTop:{md:3,xs:1}}} className={classes.input} onChange={(e)=>{setuserdetails({
...userdetails,name:e.target.value
})}} required/>}
<TextField type="password" value={userdetails.password} label="Password"  sx={{marginTop:{md:3,xs:1}}}  className={classes.input} onChange={(e)=>{setuserdetails({
...userdetails,password:e.target.value
})}} required/>
<TextField  
type="email"
value={userdetails.email} label='E-mail' sx={{marginTop:{md:3,xs:1}}} className={classes.input}  onChange={(e)=>{setuserdetails({
...userdetails,email:e.target.value

})}} required/>
{!islogin&&<TextField  
type="text"
value={userdetails.adresa} label='Adresa' sx={{marginTop:{md:3,xs:1}}} className={classes.input}  onChange={(e)=>{setuserdetails({
...userdetails,adresa:e.target.value

})}} required/>}
{!islogin&&<TextField  
type="number"
value={userdetails.broj} label='Broj telefona' sx={{marginTop:{md:3,xs:1}}} className={classes.input}  onChange={(e)=>{setuserdetails({
...userdetails,broj:e.target.value

})}} required/>}
{ !islogin&&<div className="inputdiv"> 
      <FileBase 
multiple={false}
type="file"
 onDone={({base64})=>{setuserdetails({...userdetails, image:base64})}} />

      </div>}
<Button sx={{ color:"white",
 backgroundColor:"purple", marginTop:{md:3,xs:1}, width:"20%"}}
  className={classes.button} type='submit'>OK</Button>
</form>}
<Typography variant="paragraph" textAlign="center" 
color="rgb(158, 137, 188)"
marginTop={10} display="flex"
> {variant}
  </Typography>
 <Typography><Link to="/">Vratite se na pocetnu stranicu</Link></Typography>
        </div>
     
    );
}

export default LoginPage;