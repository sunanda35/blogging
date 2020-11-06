import React, {useState, useEffect} from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search'
import {title,appsite} from '../../production/Strings'
import { Link } from 'react-router-dom'
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Avatar from '@material-ui/core/Avatar';
import { db, auth } from '../../production/firebase'
import { useHistory } from "react-router-dom";

function Header() {
    const [value, setValue] = useState()
    const [dropdown, setDropdown] = useState(false)
    const [currUser, setCurrUser] = useState(null)
    const [img, setImg] = useState('')
    const history = useHistory();

    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            setCurrUser(user)
        })
    })
    useEffect(()=>{
        currUser && db.collection('author').doc(currUser.uid).get().then(response=>{
            setImg(response.data().img)
        }).catch(err=>alert(err.message))
    },[currUser])

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
                    <h4 onClick={()=>window.open(appsite,'_self')} style={{cursor: 'pointer'}} className='header_icons header_write'>Write here</h4>
                </div>
                <div className='header_icon_container'>
                    {
                        currUser===null?<h4 onClick={()=>history.push('/login')} style={{cursor:'pointer'}} className='header_icons header_write'>Sign In</h4>:<Avatar onClick={()=>setDropdown(!dropdown)} alt="Remy Sharp" src={img?img:''} />
                    }
                </div>
                <MenuOpenIcon id='menu' fontSize='medium' onClick={()=>setDropdown(!dropdown)} />
            </div>
            {
                dropdown?<div className='dropdown'>
                    <div className='input'>
                    <input placeholder="Search here" onChange={e=>setValue(e.target.value)} type='text'/>
                    <p><SearchIcon fontSize='medium' onClick={event =>  window.location.href=`/search/find=${value}`}/></p>
                    </div>
                <p onClick={()=>window.open('https://google.com')} style={{cursor:'pointer'}} >Write Here</p>
                <p><Link style={{textDecoration: 'none', color: 'black'}} to='/top-story'>Top Stories</Link></p>
                <p>Topics</p>
                <p>About</p>
                <p onClick={()=>{
                    if(currUser)auth.signOut().catch(err=>alert(err.message))
                }} style={{cursor: 'pointer'}} >Log Out</p>
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
