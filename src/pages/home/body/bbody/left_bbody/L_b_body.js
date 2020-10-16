import React,{useState, useEffect} from 'react'
import './l_b_body.css'
import {db} from '../../../../../production/firebase'
// import Post from '../../../../../reuseable/posts/Posts'
import Lpost from './l_post/Lpost'

function L_b_body() {
    const [posts, setPosts] = useState([])
    const [more, setMore] = useState(5)
    useEffect(()=>{
        db.collection('posts').orderBy("views", "desc").limit(more).onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                userid: doc.id,
                ...doc.data()
                }
            )));
        });
    },[more])
    

    return (
        <div className='lpost'>
            {
                posts.map((post,index) => (
                    <Lpost key={index} userName={post.userName} imgUrl={post.imgUrl} title={post.title} description={post.description} />
                ))
            }
            <p onClick={()=>setMore(more+2)} >more stories</p>
        </div>
    )
}

export default L_b_body
