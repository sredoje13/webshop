import React from 'react';
import { TextField,Box,Typography,Button,Backdrop, Paper } from '@mui/material';
import { purple } from '@mui/material/colors';

function Notewindow(props) 
{
    return (
       <Backdrop 
       open={props.openback}
       sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}

       >
        <Box className={props.box}>
        <Paper className={props.paper}
        sx={{width:"300px",height:"200px"}}

        >
              <Button
    sx={{backgroundColor:"white", color:"purple"}}
    onClick={props.closeback}>X</Button>
        <Typography variant='h7'
        sx={{marginTop:5, marginBottom:3,
        textAlign:"center", color:purple[200]
        }}
        >Ocenite nas proizvod on 1 do 5!</Typography>
    <form onSubmit={props.submit}> 
    <TextField   type="number"
    label="Ocena "
    className={props.input}
  inputProps={{ min:0, max:5, pattern: "[0-9]*" }} 
    onChange={props.onChange} required></TextField>
    <Button 
    sx={{backgroundColor:"white", color:"purple",
    marginTop:"30px",
"&:hover":{color:"white", backgroundColor:"purple"}}}
       
    className={props.buttonclassname} type="submit">OK</Button>
    </form>
        </Paper>
  
        </Box>
       
    
       </Backdrop>
    );
}

export default Notewindow;