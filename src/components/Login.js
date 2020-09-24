import React ,{ useState } from 'react'
import './styles/login.css'
import amazon from "../amazon.png";
import { auth } from '../Firebase';
import { useHistory } from 'react-router-dom';



const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const signIn =(e) =>{
        e.preventDefault();
        //sing in using firebase
        auth.signInWithEmailAndPassword(email,pwd)
        .then((auth)=>{
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))

    }
    const register =(e) =>{
        e.preventDefault();
        //register using firebase
        auth.createUserWithEmailAndPassword(email,pwd)
        .then((auth)=>{
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <img src={amazon} alt='logo' className='login__logo' />
            <div className='login__container' >
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={pwd} onChange={e => setPwd(e.target.value)} />

                    <button type='submit' className='login__signinbutton'
                     onClick={signIn}>Sign in</button>
                    <p>by signing you agree to abide by the rules and regulations of amazon </p>
                    <button className='login__registerbutton'
                    onClick={register}>Create your amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
