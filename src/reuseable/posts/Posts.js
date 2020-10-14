import React from 'react'
import { Link } from 'react-router-dom'
import './posts.css'
import Author from '../post_author/Profile'

function Posts({imgUrl, userName, title, description }) {
    return (
        <div className='p_post'>
            <Link className='li' to={'/'+title.replace(/\s+/g, '-').toLowerCase()}>
            <div className='p_img_hover'>
            <img className='p_img' alt={title} src={imgUrl} ></img>
            </div>
            <div>
                <Author userName={userName}/>
            </div>
            <h2 className='p_title'>{title}</h2>
            <p className='p_description'>{description}</p>
            
            </Link>
        </div>
    )
}

export default Posts