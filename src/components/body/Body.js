import React, {useState, useEffect} from 'react'
import Post from './Post'
import './body.css'
import { db } from '../../production/firebase.js'

function Body() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                // doc.data(),
                userid: doc.id,
                ...doc.data()

                // userName =  doc.userName

                // console.log(doc.data().description)
            }
            )));
        });
    },[posts])

    return (
        <div className='body'>
        {
            posts.map((post) => (
                <Post key={post.userid} userName={post.userName} userAvatar={post.userAvatar} imgUrl={post.imgUrl} title={post.title} description={post.description}  />
            ))
        }


        </div>
    )
}

export default Body
