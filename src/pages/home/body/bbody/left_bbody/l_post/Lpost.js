import React from 'react'
import './lpost.css'
import Author from '../../../../../../reuseable/post_author/Profile'
import { Link } from 'react-router-dom'

function Lpost({imgUrl, userName, title,slugUrl, description}) {
    return (
        <div>
            <Link className='l_post' to={'/'+slugUrl}>
            <div className='l_post_left'>
                <Author userName={userName}/>
            <h1 className='l_post_l_title'>{title}</h1>
            <p className='l_post_l_des'>{description}</p>
            </div>
            <div className='l_post_right'>
            <img src={imgUrl} alt='dfd'/>
            </div></Link>
        </div>
    )
}

export default Lpost
