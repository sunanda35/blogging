import React,{useState} from 'react'
import {title, err_tag,err_down_tag, appsite} from '../../production/Strings'
import Header from '../../components/header/Header'
import './error.css'
import Footer from '../../components/footer/Footer'
import { useHistory } from "react-router-dom";

function Error() {
    const [find, setFind] = useState()
    const history = useHistory()

    return (
        <div>
            <Header/>
            <div className='err'>
            <h1 className='er404'>404</h1>
            <h1 className='ertag'>{err_tag}</h1>
            <p className='er_down_tag'>{err_down_tag}</p>
            <div className='eritems'>
                <ul>
                    <li  onClick={()=>history.push('/')}>Homepage</li>
                    <li >·</li>
                    <li onClick={()=>window.open(appsite+'/draft')}>Start Writing</li>
                    <li >·</li>
                    <li onClick={()=>history.push('/support')}>Get Support</li>
                </ul>
            </div>
            <div className='ersearch'>
                <input type='text' onChange={e=>setFind(e.target.value)}  placeholder={'Search '+title} />
                <p onClick={()=>history.push(`/search/find=${find}`)} >Search</p>
            </div>
            <p className='btchannel'>Back to the Channel!</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Error
