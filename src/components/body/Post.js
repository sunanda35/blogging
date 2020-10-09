import React from 'react'
import './post.css'
import Avatar from '@material-ui/core/Avatar'

function Post({userName, userAvatar, imgUrl, title, description, className }) {
    return (
        <div className={'post '+className}>
            <div className='img_hover'>
            <img className='post_img' src={imgUrl} ></img>
            </div>
            <div className='post_author'>
            <Avatar  className='post_author_avatar' alt={userName} src={userAvatar} />
            <h6 className='post_author_name'>{userName}</h6>
            </div>
            <h2 className='post_title'>{title}</h2>
            <p className='post_description'>{description}</p>
            
        </div>
    )
}

export default Post
