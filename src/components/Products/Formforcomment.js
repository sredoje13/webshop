import React from 'react';
import { TextField ,Button} from '@mui/material';
function Formforcomment(props) {
    return (
        <form   className={props.comentform} onSubmit={props.addcomment}>
        <TextField 
        value={props.comment}
        onChange={props.onChange} required></TextField>
        <Button
        onClick={props.addcomment}
        sx={{ color:"white",
        backgroundColor:"purple", marginTop:3, width:"20%"}}
        className={props.classesbutton} type="submit"
        
        >OK</Button>
       
        </form>
    );
}

export default Formforcomment;