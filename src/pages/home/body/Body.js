import React, {useState, useEffect} from 'react'
import Post from './posts/Post'
import './body.css'
import { db } from '../../../production/firebase.js'
import Load from '../../../reuseable/loading/Load'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'


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
    
    

    return (
        <div>
            <Header/>
            <div className='body'>  
        
        {
            !loading?
                posts.map((post,index) => (
                    <Post className={index} key={post.userid} userName={post.userName} imgUrl={post.imgUrl} title={post.title} description={post.description} />
                ))
            :
            <Load/>
        }

        </div>
        <Footer/>
        </div>
    )
}

export default Body
