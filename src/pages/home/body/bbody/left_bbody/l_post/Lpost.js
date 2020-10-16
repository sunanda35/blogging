import React from 'react'
import './lpost.css'
import Author from '../../../../../../reuseable/post_author/Profile'

function Lpost({imgUrl, userName, title, description}) {
    return (
        <div className='l_post'>
            <div className='l_post_left'>
                <Author userName={userName}/>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
            <div className='l_post_right'>
            <img src={imgUrl} alt='dfd'/>
            </div>



            
            
            
        </div>
    )
}

export default Lpost
