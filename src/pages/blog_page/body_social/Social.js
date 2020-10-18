import React from 'react'
import './social.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import BookmarksIcon from '@material-ui/icons/Bookmarks';

function Social() {
    return (
        <div className='social'>
            <div className='ict'>
                            <FavoriteIcon className='imp_ficon' fontSize='large' />
                            <p>011</p>
                        </div>
                        <div className='ict'>
                            <ThumbDownIcon className='imp_ticon' fontSize='large' />
                            <p>011</p>
                        </div>
                    <div className='ict'>
                            <BookmarksIcon className='imp_bicon' fontSize='large' />
                    </div>
        </div>
    )
}

export default Social
