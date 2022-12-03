import React, {useEffect, useState} from 'react';
import ButtonSubmit from '../Basics/ButtonSubmit';
import Center from '../Basics/Center'
import instance from "../axios";
import getCookie from "../utils";
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';



const axios = instance;
const LoginForm = ({setLoggedIn}) => {
    
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const login = ()=>{
            async function fetchData(){
                const bodyFormData = new FormData();
                bodyFormData.append('username', username);
                bodyFormData.append('password', password);
                bodyFormData.append('csrfmiddlewaretoken', getCookie('csrftoken'));
                setLoading(true);
                const request = await axios.post('login/', bodyFormData);
                setLoading(false);
                if (request.data.loggedIn === true){
                    navigate('/dashboard');
                    setLoggedIn(true);
                }
                
            }

            if(username !== '' && password !== ''){
                fetchData();
            }

    }
    if(loading === true){
        return (
            <Loading></Loading>
        )
    }
  return (
    <>
        
        <Center border={true}>
            <form method="POST" action="" className='mb-3'>
                <div className="form-group mb-3">
                    <label htmlFor="username">Enter Your Register Number Or Email ID</label>
                    <input  className="form-control" value={username} onChange={e=>{setUsername(e.target.value)}} name="username" placeholder="Enter Your Register Number" />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Enter Your password</label>
                    <input onChange={e=>{setPassword(e.target.value)}} value={password}  className="form-control" type='password'  name='password' placeholder="Enter Your Password"/>
                </div>
                <div className="form-group form-check">
                    {/*<input type="checkbox" className="form-check-input" name='remember' />*/}
                    {/*<label className="form-control form-check-label"  htmlFor="exampleCheck1">Remember Me</label>*/}
                </div>
                <input type={'button'} onClick={login} className="btn btn-primary" value={"Login"} />
            </form>
        </Center>
    </>
  )
}

export default LoginForm
