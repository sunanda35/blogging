import React from 'react'
import { Link } from 'react-router-dom'
import './post.css'
import Profile from './profile/Profile'

function Post({userName, imgUrl, title, description, className }) {
    return (
        <div className={'post index'+className} >
            <Link to={'/'+title.toLowerCase().replace(/\s+/g, '-')}>
                <div className='img_hover'>
                    <img className='post_img' alt={title} src={imgUrl} ></img>
                </div>
                <div className='post_author'>
                    <Profile userName={userName}/>
                </div>
                    <h2 className='post_title'>{title}</h2>
                    <p className='post_description'>{description}</p>
            </Link>
        </div>
    )
}

export default Post
