import React from 'react'
import './social.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import VisibilityIcon from '@material-ui/icons/Visibility';

function Social({views, love, hate}) {
    return (
        <div className='social'>
            <div className='ict'>
                <FavoriteIcon className='imp_ficon' fontSize='large' />
                <p>{love?love:'0'}</p>
            </div>
            <div className='ict'>
                <ThumbDownIcon className='imp_ticon' fontSize='large' />
                <p>{hate?hate:'0'}</p>
            </div>
            <div className='ict'>
                <VisibilityIcon className='imp_bicon' fontSize='large' />
                <p>{views?views:'0'}</p>
            </div>
        </div>
    )
}

export default Social
