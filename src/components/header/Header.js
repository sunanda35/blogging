import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Avatar from '@material-ui/core/Avatar'

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
            <h1 className='header_logo'>Blogger</h1>
            </div>
            <div className='header_right'>
            <SearchIcon className='header_icons'/>
            <NotificationsOutlinedIcon className='header_icons'/>
            <Avatar className='header_icons' alt="Sunanda Samanta" src="https://avatars3.githubusercontent.com/u/46472626?s=460&u=fbdf983ebbbed39b396e12718971d582c123d7f3&v=4"/>
            </div>
        </div>
    )
}

export default Header
