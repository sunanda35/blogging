import React, {useState} from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search'
import {title} from '../../production/Strings'
import { Link } from 'react-router-dom'
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

function Header() {
    const [value, setValue] = useState()
    const [dropdown, setDropdown] = useState(false)

    return (
        <div>
            <div id="head" className='header'>
            <div className='header_left'>
            <Link className='li' to='/'><h1 className='header_logo'>{title}</h1></Link>
            </div>

            <div className='header_right'>
                <div id='input'>
                    <input placeholder="Search here" onChange={e=>setValue(e.target.value)} type='text'/>
                    <SearchIcon fontSize='medium' onClick={event =>  window.location.href=`/search/find=${value}`} className='header_search'/>
                </div>
                <div className='header_icon_container'>
                    <h4 onClick={'fuck off'} className='header_icons header_write'>Write here</h4>
                </div>
                <MenuOpenIcon id='menu' fontSize='medium' onClick={()=>setDropdown(!dropdown)} />
            </div>
            {
                dropdown?<div className='dropdown'>
                    <div className='input'>
                    <input placeholder="Search here" onChange={e=>setValue(e.target.value)} type='text'/>
                    <p><SearchIcon fontSize='medium' onClick={event =>  window.location.href=`/search/find=${value}`}/></p>
                    </div>
                <p>Write Here</p>
                <p><Link className='header_link' to='/top-story'>Top Stories</Link></p>
                <p>Topics</p>
                <p>Write Here</p>
                <p>About</p>
                </div>:null
            }
        </div>
        <div className='header_b'>
            <div className='h_b_all'>
                <p><Link className='header_link' to='/top-story'>Top Stories</Link></p>
                <p>Topics</p>
                <p>Write Here</p>
                <p>About</p>
            </div>
        </div>
        </div>
    )
}



export default Header
