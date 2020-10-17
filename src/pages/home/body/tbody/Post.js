import React from 'react'
import { Link } from 'react-router-dom'
import './post.css'
import Profile from '../../../../reuseable/post_author/Profile'

function Post({userName, imgUrl, title, description, className }) {
    return (
        <div className={'post index'+className} >
            <Link className={'li li'+className} to={'/'+title.toLowerCase().replace(/\s+/g, '-')}>
                <div className={'img_hover img_hover'+className}>
                    <img className={'post_img '} alt={title} src={imgUrl} ></img>
                </div>
                <div className={'post_author'+className}>
                    <Profile userName={userName}/>
                </div>
                    <h2 className={'post_title post_title'+className}>{title}</h2>
                    <p className={'post_description post_description'+className}>{description}</p>
            </Link>
        </div>
    )
}

export default Post
