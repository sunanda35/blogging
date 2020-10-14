import React from 'react'
import { Link } from 'react-router-dom'
import './tag.css'

function Tag({tags}) {

    if(tags)return tags.map((element, index) => <li className='tagss' key={index}><Link className='li' to={'/tags/'+element}>{'#'+element}</Link></li>);
    else return <p>loading..</p>
}

export default Tag
