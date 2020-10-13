import React from 'react'
import './tag.css'

function Tag({tags}) {
    return (
        <div className='tagss'>
            <p>{'#'+tags}</p>
        </div>
    )
}

export default Tag
