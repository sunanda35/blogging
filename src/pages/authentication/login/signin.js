import React, {useState} from 'react'
import './signin.css'
import Google from '../../../assets/brand/google.svg'
import Facebook from '../../../assets/brand/facebook.svg'
import Twitter from '../../../assets/brand/twitter.svg'
import Linkdin from '../../../assets/brand/linkedin.svg'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import {auth} from '../../../production/firebase'
import {appsite} from '../../../production/Strings'
import { useHistory } from "react-router-dom";

function Signin() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useHistory()
    
    const signin = ()=>{
        auth.signInWithEmailAndPassword(email, password).then(()=>{
            alert('Successfully Loggedin')
            history.push('/')
        }).catch(err=>alert(err.message))
    }

    return (
        <div>
            <Header/>
            <div className='signin'>
            <p>Log In</p>
                <div className='lgin'>
                    <div className='input'>
                    <input className='comp' type='email' onChange={e=>setEmail(e.target.value)} placeholder='Email' />
                    </div>
                    <div className='input'>
                    <input className='comp' type='password' onChange={e=>setPassword(e.target.value)} placeholder='Password' />
                    </div>
                    <div className='input_f'>
                    <p onClick={()=>alert('Sorry, this feature not available right now')} style={{cursor: 'pointer'}} >Forget password?</p>
                    <p onClick={()=>window.open(appsite+'/signup')} style={{cursor: 'pointer'}} >Sign Up</p>
                    </div>
                </div>
                <div>
                <p className='btnn' onClick={()=>signin()}>Submit</p>
                </div>
                <h4>OR</h4>
                <div className='brand'>
                    <div onClick={()=>alert('Sorry, this feature not available right now')} className='brandin'>
                    <img src={Google} alt='google'/>
                    </div>
                    <div onClick={()=>alert('Sorry, this feature not available right now')} className='brandin'>
                    <img src={Facebook} alt='facebook'/>
                    </div>
                    <div onClick={()=>alert('Sorry, this feature not available right now')} className='brandin'>
                    <img src={Twitter} alt='twitter'/>
                    </div>
                    <div onClick={()=>alert('Sorry, this feature not available right now')} className='brandin'>
                    <img src={Linkdin} alt='linkdin'/>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Signin