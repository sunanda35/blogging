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
import Tags from './body_tag/Tag'
import { title } from '../../production/Strings'

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
                    <div className='b_auth_tag'>
                    <div className='tags'>
                        <p>Tags: </p>
                        <Tags tags='c'/>
                        <Tags tags='tech'/>
                        <Tags tags='business'/>
                        <Tags tags='sex'/>
                        <Tags tags='body'/>
                        <Tags tags='anatomy'/>
                    </div>
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
                <div className='b_author'>
                    <div className='b_author_left'>
                        <div className='auth_img'>
                        <img src='https://miro.medium.com/max/2363/1*NG5eLKQ0HBJJRTztrxptXw.jpeg' alt='name'/>
                        </div>
                    <div className='b_a_l_r'>
                        <h6>@sunanda</h6>
                        <p>Sunanda</p>
                    </div>
                    </div>
                    <div className='b_author_right'>
                    <div className='b_author_header'>
                        <p></p>
                    </div>
                        <p>syo a si fhdkjfd fd fjdh fkjdh fkjdshfkjdh fjksd fjsdkjf kjd fkjsdfjsdfjdsjf dsfdshf</p>
                    </div>

                </div>
                <div className='b_related'>
                    <div className='b_relate_left'></div>
                    <div className='b_relate_middle'>
                        <h2><strong>More from {title}</strong></h2>
                    </div>
                    <div className='b_relate_right'></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog
