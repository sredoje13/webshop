import { makeStyles } from "@material-ui/core";
   

export const usestyle=makeStyles((theme)=>({

   button:{
   color:"white",
   textDecoration:"none",
   marginLeft:25,
   padding:"10px",
   borderRadius:"10px",
   "&:hover":{
    backgroundColor:"rgb(158, 137, 188)",
    opacity:0.8
   
   },
   [theme.breakpoints.down('xs')]:{
    fontSize:"x-small",
    marginLeft:10,
    marginRight:0,
    padding:"0px"
  }
   },
   buttonshop:{
    color:"white",
    textDecoration:"none",
    
    padding:"10px",
    borderRadius:"10px",
    "&:hover":{
     backgroundColor:"rgb(158, 137, 188)",
     opacity:0.8
    
    },
    [theme.breakpoints.down('xs')]:{
      fontSize:"x-small",
      marginLeft:-25,

    padding:"3px",
    }
    },
   divaos:{
display:"flex",
flexDirection:"column", 
justifyContent:"center",
alignItems:"center",
marginTop:100

   },
   oneaos:{
    [theme.breakpoints.up("sm")]: {
        marginTop:15,
      },
      [theme.breakpoints.up("md")]: {
        marginTop:25,
      },
      [theme.breakpoints.up("lg")]: {
        marginTop:30,
      },
      textDecoration:"none",
    color:"purple",
    fontFamily: "'Fraunces', serif",
    fontSize:"xx-large",
    textAlign:"center",
    "&:hover":{scale:1.1, cursor:"pointer"}

   },
   divlay:{
    [theme.breakpoints.down('xl')]:{
      fontSize:"x-large"
    },
    [theme.breakpoints.down('sm')]:{
     fontSize:"large",
    },
    [theme.breakpoints.down('xs')]:{
      fontSize:"x-small"
    }
  },
 navbar:{
    display:"flex",
    justifyContent:"space-between",
    width:"95%",
    alignItems:"center",
  },
   layout:{
   marginTop:"-10px",
    display:"flex",
    justifyContent:"space-between",
    width:"95%",
    alignItems:"center",
    
    
   },
   
   


}))