import React from 'react'
import './post.css'
import Profile from './profile/Profile'

function Post({userName, imgUrl, title, description, className }) {
    return (
        <div className={'post '+className}>
            <div className='img_hover'>
            <img className='post_img' alt={title} src={imgUrl} ></img>
            </div>
            <div className='post_author'>
            <Profile userName={userName}/>
            </div>
            <h2 className='post_title'>{title}</h2>
            <p className='post_description'>{description}</p>
        </div>
    )
}

export default Post
