import React from 'react'
import './footer.css'
import { LinkedIn, Facebook, Twitter, Reddit, Pinterest } from '@material-ui/icons';
import { useHistory } from "react-router-dom";


function Footer() {
    const history = useHistory();
    return (
        <div className='footer'>
            <div className='footer_left'>
                <ul>
                    <li onClick={()=>history.push('/support')} >Help</li>
                    <li>Status</li>
                    <li>Writer</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Cookies</li>
                    <li>Contact us</li>
                    <li>About</li>
                </ul>
            </div>
            <div className='footer_right'>
                <ul>
                    <li><LinkedIn fontSize='medium' className='l_icon ficn'/></li>
                    <li><Facebook fontSize='medium' className='f_icon ficn'/></li>
                    <li><Twitter fontSize='medium' className='t_icon ficn'/></li>
                    <li><Reddit fontSize='medium' className='r_icon ficn'/></li>
                    <li><Pinterest fontSize='medium' className='p_icon ficn'/></li>
                </ul>    
            </div>
        </div>
    )
}

export default Footer
