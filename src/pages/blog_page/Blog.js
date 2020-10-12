import React from 'react'
import './blog.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Text from './body_text/Text'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Blog() {
    return (
        <div>
            <Header/>
            <div className='blog'>
                <h1 className='b_title'>False positives Are Considered Enemies, But Can They Be Your Friends?</h1>
                <p className='b_desc'>Who even has time for a hangover?</p>
                <img className='b_img' src='https://miro.medium.com/max/2363/1*NG5eLKQ0HBJJRTztrxptXw.jpeg' alt='data'/>

                <div className='b_body'>
                    <div className='b_body_story'>
                        <Text/>
                    </div>
                    <div className='story_action'>
                    <div className='b_body_imp'>
                        <div className='ic'>
                            <FavoriteIcon className='imp_ficon' fontSize='large' />
                            <p>011</p>
                        </div>
                        <div className='ic'>
                            <ThumbDownIcon className='imp_ticon' fontSize='large' />
                            <p>011</p>
                        </div>
                            <BookmarksIcon className='imp_bicon' fontSize='large' />
                    </div>
                    <div className='b_body_share'>
                        <h4>Share this story </h4>
                        <TwitterIcon className='s_ticon' fontSize='large' />
                        <LinkedInIcon className='s_licon' fontSize='large' />
                        <FacebookIcon className='s_ficon' fontSize='large' />
                        <MailOutlineIcon className='s_micon' fontSize='large' />
                    </div>
                    </div>
                </div>

                {/* <div className='b_author'>
                    <div className='b_author_left'>
                        <Avatar src='https://miro.medium.com/max/2363/1*NG5eLKQ0HBJJRTztrxptXw.jpeg' alt='author'/>
                    <div className='b_a_l_r'>
                        <p>sunanda</p>
                        <p>Oct 5 . 6</p>
                    </div>
                    </div>
                    <div className='b_author_right'>
                        <h1>social icon</h1>
                    </div>

                </div> */}
            </div>
            <Footer/>
        </div>
    )
}

export default Blog
