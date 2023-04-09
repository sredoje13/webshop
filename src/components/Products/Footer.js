import React from 'react';
import { Typography} from '@mui/material';
import { usestyle } from './style';
import {Grid} from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer(props) {

    const classes=usestyle()
const phone=(
    <div>
        <div style={{color:"white"}}>
    061/xxx-xxxx
        </div>
        <div style={{color:"white"}}>
        061/xxx-xxxx

        </div >
        <div style={{color:"white"}}>
        061/xxx-xxxx

        </div>
    </div>
)

const items=["Povracaj novca", "Mogucnnost zamene", "Placanje pouzecem", "Sigurna kupovina"]
const footeritems=items.map((item)=>
    (<div className={classes.footeritems}>
        {item}
    </div>)
)

    return (
        <div  style={{display:"flex", justifyContent:"center",marginTop:"50px"}} >
       

<Grid container sx={{backgroundColor:"rgb(167, 147, 190)"}}
 width="80%"  paddingBottom="30px" paddingTop="20px" 
 
rowSpacing={{ xs: 0, sm: 2, md: 5 }} columnSpacing={3}
> 
<Grid item borderRight="1px solid white"

  xs={12} md={4} >
    <Typography sx={{fontSize:{xs:"xx-small",md:"medium"}}} className={classes.tipo} variant="h6">
  <b>O Nama:</b> 
</Typography>
<Typography sx={{fontSize:{xs:"xx-small",md:"medium"}}} className={classes.tipo} >Od 2009-te godine poslujemo na tržištu sirovina za kozmetičku, farmaceutsku, hemijsku i prehrambenu industriju.</Typography>

  

</Grid>
<Grid item borderRight="1px solid white"  xs={12} md={4}>
<Typography  className={classes.tipo} sx={{fontSize:{xs:"xx-small",md:"medium"}}} variant="h6" >
  <b>Kontakt</b> 
</Typography>
<Typography sx={{fontSize:{xs:"xx-small",md:"medium"}}}>
    {phone}
    
</Typography>
</Grid>
<Grid item xs={12} md={4}>

<Typography sx={{fontSize:{xs:"xx-small",md:"medium"}}}  className={classes.tipo}  variant="h6">
  <b>Adresa:</b> 
  <Typography className={classes.tipo} sx={{fontSize:{xs:"xx-small",md:"medium"}}}>Adresa1</Typography>
  <Typography className={classes.tipo} sx={{fontSize:{xs:"xx-small",md:"medium"}}}>Adresa2</Typography>
</Typography>
</Grid>


<Grid item xs={12} md={12} sx={{display:"flex",
flexDirection:{md:"row", sm:"row", xs:"column"},
alignItems:"center",
 borderTop:"1px solid white", marginTop:"20px",

justifyContent:"space-between"}} className={classes.gridd}>

<div style={{display:"flex",justifyContent:"center"}}>{footeritems}</div>

<Typography marginRight="15%" color="white"
display="flex" alignItems="center"
sx={{fontSize:{md:"medium",

xs:"xx-small"}}}
>2023 J.P.<CopyrightIcon fontSize='x-small' sx={{marginLeft:"10px",
marginTop:"-2px"}}/></Typography>
</Grid>
</Grid>

</div>
     
    );
}

export default Footer;