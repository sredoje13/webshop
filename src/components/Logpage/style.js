import { makeStyles } from "@material-ui/core";
 export const usestyle=makeStyles((theme)=>({
divform:{
    display:"flex",
   
    
    flexDirection:"column",
    alignItems:"center",
    width:"50%",
    height:"100vh",
    [theme.breakpoints.down('sm')]:{
        width:"70%",
      },
      [theme.breakpoints.down('xs')]:{
        width:"100%",
        marginTop:"-100px",
      }
},

form:{
    display:"flex",
    
    flexDirection:"column",
    alignItems:"center",
    width:"60%",
    [theme.breakpoints.down('sm')]:{
        width:"70%",
      },
      [theme.breakpoints.down('xs')]:{
        width:"80%",
       
      }
    
},
title:{
    marginTop:"10px"
},
input:{
   
width:"100%",
"& label.Mui-focused": {
    color:"purple",
    border:"purple",
  },
 
},
button:{
    "&:hover": {
        
        opacity:0.7,
        color:"purple",
       border:"1px solid purple"
       
      },
      [theme.breakpoints.down('md')]:{
        fontSize:"x-small"
      }
},

commentformdiv:{
 display:"flex", flexDirection:"column", width:"100%",

},
commentform:{
    display:"flex",
     justifyContent:"center",
      alignItems:"center", flexDirection:"column", width:"100%",
      textAlign:"center",
     
},
divv:{
  maxHeight:"500px",
  overflowY:"scroll"
},
divlist:{
  width:"100%",
  display:"flex",
  justifyContent:"center"

}

 }))