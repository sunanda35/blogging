import React from 'react'
import './footer.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <h className='fdata'>Help</h>
                <h className='fdata'>Status</h>
                <h className='fdata'>Start Writing</h>
                <h className='fdata'>Privacy</h>
                <h className='fdata'>Terms</h>
                <h className='fdata'>Cookies</h>
                <h className='fdata'>Contact us</h>
                <h className='fdata'>About</h>
            </div>
            <div className='footer_right'>
                <LinkedInIcon fontSize='large' className='ficon'/>
                <FacebookIcon fontSize='large' className='ficon'/>
                <TwitterIcon fontSize='large' className='ficon'/>
                <RedditIcon fontSize='large' className='ficon'/>
                <PinterestIcon fontSize='large' className='ficon'/>
                <InstagramIcon fontSize='large' className='ficon'/>
            </div>
        </div>
    )
}

export default Footer
