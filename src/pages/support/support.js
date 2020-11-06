import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import {title} from '../../production/Strings'

export default function support() {

    return (
        <div>
            <Header/>
            <div style={{width:'inherit', margin:'auto'}} >
            <h1 style={{
                marginTop: '20px',
                marginBottom: '30px',
                textAlign: 'center'
            }}>Feel free to share any problem regarding this site</h1>
            <iframe title={title+' Support Page'} src="https://docs.google.com/forms/d/e/1FAIpQLSdgfZjzazpO8scCmJLtcX6U2HXBqCKjC-U8q8gvvsxxwQYRQQ/viewform?embedded=true" width="100%" height="1050" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <Footer/>
        </div>
    )
}
