import React from 'react'
import './story.css'
import Avatar from '@material-ui/core/Avatar'

function Story({userName, userAvatar, imgUrl, title, description }) {
    return (
        <div className='story_post'>
            <div className='img_hover'>
            <img className='story_img' alt={title} src={imgUrl} ></img>
            </div>
            <div className='story_author'>
            <Avatar  className='story_author_avatar' alt={userName} src={userAvatar} />
            <h6 className='story_author_name'>{userName}</h6>
            </div>
            <h2 className='story_title'>{title}</h2>
            <p className='story_description'>{description}</p>
            
        </div>
    )
}

export default Story
