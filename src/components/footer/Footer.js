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
                <ul>
                    <li>Help</li>
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
                <LinkedInIcon fontSize='medium' className='ficon'/>
                <FacebookIcon fontSize='medium' className='ficon'/>
                <TwitterIcon fontSize='medium' className='ficon'/>
                <RedditIcon fontSize='medium' className='ficon'/>
                <PinterestIcon fontSize='medium' className='ficon'/>
                <InstagramIcon fontSize='medium' className='ficon'/>
            </div>
        </div>
    )
}

export default Footer
