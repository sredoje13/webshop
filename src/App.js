import './App.css';
import Navbar from './components/Navpage/Navbar';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Firstpage from './components/Firstpage/Firstpage';
import LoginPage from './components/Logpage/LoginPage';
import { Toaster } from 'react-hot-toast';
import Adminform from './components/Logpage/Adminform';
import Webshop from './components/Products/Webshop';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { reducerserver } from './components/redux';
import Layout from './components/Navpage/Layout';
import { useLocation } from 'react-router-dom';
function App() {

const loc=useLocation().pathname
const dispatch=useDispatch()
const allitem=useSelector((state)=>state.Server.items)
  const filteringclose=allitem.find((item)=>item.isexpanded)
  const filteringcloseheader=allitem.find((item)=>item.isheaderexpanded)
const closecart=()=>{
  if(filteringclose!==undefined){
   dispatch(reducerserver.closeclick(filteringclose))}
   if(filteringcloseheader!==undefined){
  dispatch(reducerserver.isclickheader(filteringcloseheader)) }
}
  return (

    <div 
    onClick={closecart}
    style={{
      display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", 
    width:"100%",
    overflowY:"hidden"
    }}
    
    >
   {!(loc==="/")&&<Layout/>}
<Navbar/>
<Toaster position="bottom-center"
  reverseOrder={false}/>
<Switch>
<Route path="/" exact>
<Firstpage/>
</Route>
<Route path="/signin" exact>
<LoginPage/>
</Route>
<Route path="/login" exact>
<LoginPage/>
</Route>

<Route path="/webshop"  >
  <Webshop/>
  <Redirect to="/webshop/Kupke"/>
</Route>
<Route path="/adminform" exact>
  <Adminform/>
</Route>
</Switch>

    </div>
  );
}

export default App;
