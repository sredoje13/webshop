import { makeStyles } from "@material-ui/core";

export const usestyle=makeStyles((theme)=>({
divproducts:{
    display:"flex",
    justifyContent:"center",
    alignItems:"flex-start",
    flexWrap:"wrap",

},
oneitem:{
margin:"50px",
boxShadow:"0px 0px 15px 5px black",
"&:hover":{scale:"1.05"}
},
toggle:{
    backgroundColor:"white",
    border:"0px",
    fontSize:"xx-large",
    scale:1.2,
    [theme.breakpoints.down('xs')]:{
       scale:0.8,
     
        
      }
},
divic:{
    marginTop:80, display:"flex",flexDirection:"column", justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.down("sm")]:{
        marginTop:62
    }
},
button:{
    
    marginTop:"30px",
    background:"white",

    width:"100%",
    "&:hover": {
        
        
        backgroundColor:"purple",
        color:"white",
       border:"1px solid purple"
       
      },
      [theme.breakpoints.down('md')]:{
        fontSize:"x-small"
      }
},
box:{
 display:"flex", flexDirection:"column",
 alignItems:"center",
 justifyContent:"center"
},
paper:{
    backgroundColor:"white",
    display:"flex", flexDirection:"column",
 alignItems:"center",
 justifyContent:"flex-start"
},
input:{
width:"100%"
},
tipo:{
    color:"white",
   width:"80%",
 

},
footeritems:{
    [theme.breakpoints.down("sm")]:{
        fontSize:"30%",
        textAlign:"start",
        marginRight:"10px",
         
    marginLeft:"0px",
    },
    textAlign:"center",
    color:"white",
    
    marginLeft:"10px",
 "&:hover":{
    cursor:"pointer",
color:"rgb(127, 107, 150)",
borderBottom:"1px solid rgb(127, 107, 150)",
 }
},
footeritemsdiv:{
    display:"flex",
    justifyContent:"flex-start"
},
gridd:{
paddingTop:"50px",
paddingBottom:"50px"
}

}))