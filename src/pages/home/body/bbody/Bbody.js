import React from 'react'
import './bbody.css'
import LbBody from './left_bbody/L_b_body'
import RbBody from './right_bbody/R_b_body'

function Bbody() {
    return (
        <div className='b_b_body'>
            <LbBody/>
            <RbBody/>
        </div>
    )
}

export default Bbody
