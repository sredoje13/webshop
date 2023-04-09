import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { toast } from 'react-hot-toast';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useDispatch } from 'react-redux';
import { bye} from '../redux';
import { unlike } from '../redux/reduxthunk';
import { like } from '../redux/reduxthunk';
import { reducerserver } from '../redux';
import { addNote } from '../redux/reduxthunk';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { usestyle } from './style';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Button } from '@mui/material';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useRef } from 'react';
import Notewindow from './Notewindow';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Comments from './Comments'
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  export default function Products(props) {
    const history=useHistory()
    const[noteditem,setnoteditem]=React.useState({})
    const[opennotewindow,setopennote]=React.useState(false)
    const ref=useRef()
    const[showcomment,setshowcomment]=React.useState(false)
    const dispatch=useDispatch()
    const classes=usestyle()
 const isuser=useSelector((state)=>state.Server.logindatas)
 const isadmin=useSelector((state)=>state.Server.logindatas.isadmin)

 const {items}=props
     
  const handleExpandClick = (item) => {
    dispatch(reducerserver.isclick(item))

  };
  let allitem=[]
 
  const likeitem=(item)=>{

    const userdatas=isuser.data
   
    dispatch(like({_id:item._id,user:userdatas.name,email:userdatas.email}))
    }
    
    const unliked=(item)=>{
      const userdatas=isuser.data
      dispatch(unlike({_id:item._id,user:userdatas.name,email:userdatas.email}))
      
    }
   
const notepost=(e)=>{
  e.preventDefault()
  const userdatas=isuser.data
  dispatch(addNote({_id:noteditem._id,user:userdatas.name,email:userdatas.email,note:noteditem.note}))
  setopennote(false)
  
}
console.log(noteditem)
const[possible,setpossible]=React.useState(true)

const isnotess=(item)=>{
  const emailfind=item.note.find((itemi)=>itemi.email===isuser.data.email)
let possible;
  if(emailfind){
    possible=false
toast.error("Vec ste ocenili proizvod")}
else possible=true
setpossible(possible)

}
console.log(items)
const notees=(x)=>{
  let notesum;

  const notes=(x.reduce(( sum, card ) => sum + card.noteitem, 0 ))
 console.log(notes)
  let note;
  
if(notes===0){
note=(<Typography sx={{color:purple[200]}}>NEOCENJEN PROIZVOD</Typography>)
}
else{
 
  const notenote=notes/x.length
 
  var result = (notenote - Math.floor(notenote)) === 0; 
  const minus=5-Math.round(notenote)
  if(result){
  const notestar1=[<StarIcon sx={{color:purple[600]}}/>,<StarIcon sx={{color:purple[600]}}/>,<StarIcon sx={{color:purple[600]}}/>,<StarIcon sx={{color:purple[600]}}/>,<StarIcon sx={{color:purple[600]}}/>].slice(0,notenote)
const notestar2=[<StarBorderOutlinedIcon sx={{color:purple[600]}}/>,<StarBorderOutlinedIcon sx={{color:purple[600]}}/>,<StarBorderOutlinedIcon sx={{color:purple[600]}}/>,<StarBorderOutlinedIcon sx={{color:purple[600]}}/>,<StarBorderOutlinedIcon sx={{color:purple[600]}}/>].slice(0,minus)
notesum=[...notestar1,...notestar2]
}
else{
  const notestar1=[<StarIcon sx={{color:purple[600]}}/>,<StarIcon sx={{color:purple[600]}}/>,<StarIcon sx={{color:purple[600]}}/>,<StarIcon sx={{color:purple[600]}}/>,<StarIcon sx={{color:purple[600]}}/>].slice(0,notenote)
  const notestar3=[<StarHalfIcon  sx={{color:purple[600]}}/>]
  const notestar2=[<StarBorderOutlinedIcon sx={{color:purple[600]}}/>,<StarBorderOutlinedIcon sx={{color:purple[600]}}/>,<StarBorderOutlinedIcon sx={{color:purple[600]}}/>,<StarBorderOutlinedIcon sx={{color:purple[600]}}/>,<StarBorderOutlinedIcon sx={{color:purple[600]}}/>].slice(0,minus)
  notesum=[...notestar1,...notestar3,...notestar2]
  
}
note=notesum.map((item,i)=>(
  <div key={i}>
    {item}
  </div>
))



}
return note
}
const issuser=(item)=>{
  let isliked
  const filtering=item.likes.find((item)=>item.email===isuser.data.email)
  if(filtering){
    isliked=true
  }
  else{
    isliked=false
  }
 
  return isliked
}
const unliker=(item)=>{
  let isliked
  const filtering=item.unlikes.find((item)=>item.email===isuser.data.email)
  if(filtering){
    isliked=true
  }
  else{
    isliked=false
  }
  
  return isliked
}




 allitem=items.map((item)=>(
  <div  key={item._id}>
    <Card className={classes.oneitem} 
    sx={{ width:{ md:345, sm:300, xs:230} }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[600], fontSize:"xx-small" ,padding:"10px", textAlign:"center" }} aria-label="recipe">
            {item.type}
          </Avatar>
        }
        action={
          <IconButton onClick={()=>{;
          dispatch(reducerserver.isclickheader(item))
          }} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader="September 14, 2016"
      />
       <Collapse in={item.isheaderexpanded} 
       
       timeout="auto" unmountOnExit>
        <CardContent sx={{display:"flex", justifyContent:"center"}}>
         <Button 
         sx={{color:purple[500],
          scale:{md:1, sx:0.8},
          width:"40%",
          fontSize:{xs:"xx-small",sm:"medium",md:"large"},
          backgroundColor:purple[100]}}
         onClick={()=>{setshowcomment(true);
        dispatch(reducerserver.productforcomment(item));
        dispatch(reducerserver.getcomment(item))
        window.scrollTo({
          behavior: "smooth",
          top: ref.current.offsetTop
        });
      
        }}>Komentari</Button>
   <Button  sx={{color:purple[500],
         marginLeft:"10px",
         width:"40%",
         scale:{md:1, sx:0.8},
           fontSize:{xs:"xx-small",sm:"medium",md:"large"},
          backgroundColor:purple[100]}}
          onClick={()=>{setnoteditem(item); 
   if(isuser.user){ setopennote(true)}
   else {history.push("/login")};
   isnotess(item)
   }}>Ocenite</Button>

       
       { isadmin&&<Button sx={{color:purple[500],
         
          backgroundColor:purple[100]}}>Obrisi stavku</Button>}
        
        </CardContent>
      </Collapse>

      <CardMedia
        component="img"
        height={254}
        
        image={item.image}
        alt="Paella dish"
      />
     
      <CardActions disableSpacing>

      {(isuser.user&&issuser(item))&&<IconButton  onClick={()=>likeitem(item)}><ThumbUpIcon sx={{fontSize:{xs:"medium",sm:"large", md:"x-large"}}}/></IconButton>}
     {(!issuser(item)||!isuser.user)&&<IconButton onClick={()=>likeitem(item)}
    
     disabled={!isuser.user}><ThumbUpOutlinedIcon sx={{fontSize:{xs:"medium",sm:"large", md:"x-large"}}}/></IconButton>}     
        <IconButton disabled={!isuser.user}  onClick={()=>{setnoteditem(item);
   setopennote(true)}}><ChatBubbleOutlineOutlinedIcon sx={{fontSize:{xs:"medium",sm:"large", md:"x-large"}}}/></IconButton>
          {isuser.user&&unliker(item)&&<IconButton onClick={()=>unliked(item)} ><ThumbDownIcon sx={{fontSize:{xs:"medium",sm:"large", md:"x-large"}}}/></IconButton>}
        {(!unliker(item)||!isuser.user)&& <IconButton disabled={!isuser.user} onClick={()=>unliked(item)}><ThumbDownOutlinedIcon sx={{fontSize:{xs:"medium", sm:"large", md:"x-large"}}}/></IconButton>}      
        {!isadmin&&<Button sx={{color:purple[500],
          fontSize:{xs:"xx-small",sm:"small",md:"small"},
          marginLeft:"15px",
          backgroundColor:purple[100]}} onClick={()=>dispatch(bye.bye(item))}>Kupi</Button>}

          <ExpandMore
          expand={item.isexpanded}
          onClick={()=>handleExpandClick(item)}
          aria-expanded={item.isexpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{fontSize:{xs:"medium",sm:"large", md:"x-large"}}}  />
        </ExpandMore>
      </CardActions>
      <Collapse in={item.isexpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph sx={{display:"flex"}}>{notees(item.note)}</Typography>
          <Typography sx={{fontSize:{xs:"x-small",sm:"medium", md:"medium", borderBottom:"1px solid rgb(192,192,192)", paddingBottom:"8px"}}} paragraph>
           {item.description}
          </Typography>
          <Typography paragraph sx={{fontSize:{xs:"x-small",sm:"medium", md:"medium", color:purple[400]}}} >
          <b>{item.price} RSD</b> 
          </Typography>
          <Typography paragraph>
           
            
          </Typography>
        
        </CardContent>
      </Collapse>
    </Card>
    </div>
))

  return (
    <div >
       <div className={classes.divproducts}>  {allitem}

    </div>
    <div ref={ref}> {showcomment&&<Comments close={()=>setshowcomment(false)}/>}</div>
   {isuser.user&&possible&&<Notewindow
    buttonclassname={classes.button}
    openback={opennotewindow}
    input={classes.input}
    closeback={()=>setopennote(false)}
    submit={notepost}
    paper={classes.paper}
    box={classes.box}
    onChange={(e)=>{
      setnoteditem({...noteditem,note:e.target.value})
    }}
    inputvalue={noteditem.note}
    />}
    </div>

  
  );
}