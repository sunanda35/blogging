import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Avatar from '@material-ui/core/Avatar'

function Header() {
    return (
        <div id="head" className='header'>
            <div className='header_left'>
            <h1 className='header_logo'>Blogger</h1>
            </div>

            <div className='header_right'>
                <div id='input'>
                    <input placeholder="Search here" type='text'/>
                    <SearchIcon fontSize='large' className='header_search'/>
                </div>
                <div className='header_icon_container'>
                    <h4 className='header_icons header_write'>Write here</h4>
                </div>
            </div>
        </div>
    )
}



export default Header
