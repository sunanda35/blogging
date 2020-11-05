import React from 'react'
import { Link } from 'react-router-dom'
import './tag.css'


export default function Tag({tags}) {
    return (
        <div style={{display: 'flex'}}>
            {
                tags.map((element, index)=><li key={index} className='tagss'><Link className='li' to={'/tags/'+element}>{'#'+element}</Link></li>)
            }
        </div>
    )
}

