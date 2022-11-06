import NavBar from './Components/NavBar/NavBar';
import Cards from "./Components/Dashboard/Cards";
import LoginForm from "./Components/Login/LoginForm";
import SignUp from './Components/SignUp/SignUp'
import { Routes , Route, useNavigate } from "react-router-dom";
import Post from './Components/JobPost/Post';
import Addjob from './Components/AddJob/Addjob';
import SearchJobs from './Components/SearchJobs/SearchJobs';
import {useEffect, useState} from "react";
import instance from "./Components/axios";
import Loading from './Components/Loading';
import EditJob from "./Components/EditJob/EditJob";
import Logout from "./Components/Logout";
const axios = instance;

function App() {
  const routerHistory = useNavigate();
    useEffect(()=>{
        async function api(){
            const request2 = await axios.get('csrf/');
        }
        api();
    }, [])
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect((e)=>{
      async function authenticate(){
          setLoading(true);
          const data = await axios.get('auth/');
          setLoading(false);
          if(data.data.loggedIn === true){
            setLoggedIn(true);
          }else{
            routerHistory('/login');

          }
      }
      authenticate();
      
  }, []);
  

  useEffect(()=>{
    if(loggedIn === true && (window.location.pathname == '/' || window.location.pathname == '/login')){
      routerHistory('/dashboard')
    }
  }, [loggedIn])


  if(loading === true){
    return (<>
      <NavBar login_api={false}></NavBar>
      <Loading></Loading>
      </>)
  }
  if(loggedIn === false){

  }
  return (
    <>
      <NavBar login_api={loggedIn} />
      <div className="mt-5 pt-5">
      

        <Routes >
            {loggedIn === false ? <><Route exact path='/' element={<LoginForm setLoggedIn={setLoggedIn}  />} />
            <Route path='/login' element={<LoginForm setLoggedIn={setLoggedIn} />} />
            </>
            :
            <>
            <Route path='/dashboard' element={<Cards  />} />
            <Route path='/dashboard/jobs/*' element={<Post  />} />
            <Route path='/job/add' element={<Addjob  />} />
            <Route path='/job/edit/*' element={<EditJob  />} />
            <Route path='/search' element={<SearchJobs  />} />
            <Route path='/logout' element={<Logout />} />
            </>
          }
        </Routes >


      </div>
    </>
  );
}

export default App;
