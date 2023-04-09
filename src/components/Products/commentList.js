import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { purple } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
export default function AlignItemsList(props) {
  return (
    <List sx={{ width:{ md:'100%', sm:"90%", xs:"80%"}, maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem sx={{display:"flex",alignItems:"center"}}>
        <ListItemAvatar>
          <Avatar alt="User" sx={{backgroundColor:purple[300]}} src={props.image} />
        </ListItemAvatar>
        <ListItemText
        sx={{fontFamily: "'Secular One', sans-serif",
        fontSize:"large"
      }}
          primary={ <Typography
            sx={{ display: 'inline', color:purple[600],Family: "'Secular One', sans-serif"
          }}
            
            variant="h5"
            color="text.primary"
          >
           {props.name}
          </Typography>}
          secondary={
            <div style={{display:"flex",
             alignItems:"center",
             justifyContent:"space-between",
             borderTop:"1px solid rgb(192,192,192)"
             }}>
              <Typography
                sx={{ display: 'inline',
               width:"70%",
               wordWrap:"break-word",
               fontSize:{md:"large", sm:"medium", xs:"x-small"}
              }}
                component="span"
                variant="body2"
                color="text.primary"

              >
               {props.comment}
              </Typography>
             {props.isuser&&<IconButton
             onClick={props.delete}>
                <DeleteIcon />
              </IconButton>}
              
            </div>
          }
        />
      </ListItem>
      <Divider  component="li"  sx={{width:"100%"}}/>

     
    </List>
  );
}