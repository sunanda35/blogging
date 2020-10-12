import React, {useState, useEffect} from 'react'
import Post from './posts/Post'
import './body.css'
import { db } from '../../../production/firebase.js'


function Body() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').orderBy("views", "desc").limit(6).onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                userid: doc.id,
                ...doc.data()
                }
            )));
        });
    },[posts])
    
    

    return (
        <div className='body'>  
        
        {
            posts.map((post,index) => (
                <Post className={"index"+index} key={post.userid} userName={post.userName} imgUrl={post.imgUrl} title={post.title} description={post.description}  />
            ))
        }


        </div>
    )
}

export default Body
