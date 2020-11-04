import React, {useState, useEffect} from 'react'
import Post from './tbody/Post'
import './body.css'
import { db } from '../../../production/firebase.js'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import Bbody from './bbody/Bbody'
import Cload from '../../../reuseable/loading/Load'
import Error from '../../../reuseable/error/Error'


function Body() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        db.collection('posts').orderBy("views", "desc").limit(6).onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                userid: doc.id,
                ...doc.data()
                }
            )));
            setLoading(false)
        });
    },[posts])
    
    

    if(loading) return (
        <Cload/>
    )
    else if(!loading && Object.keys(posts).length===0) return (
        <Error/>
    )
    else return (
        <div>
            <Header/>
            <div className='body'>  
        
        {
          
                posts.map((post,index) => (
                    <Post className={index} key={post.userid} userName={post.userName} slugUrl={post.slugUrl} imgUrl={post.imgUrl} title={post.title} description={post.description} />
                ))
            
        }

        </div>
        <div className='body'>
            <Bbody/>
        </div>
        <Footer/>
        </div>
    )
}

export default Body
