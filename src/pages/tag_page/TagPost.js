import React, {useState, useEffect} from 'react'
import './tagpost.css'
import Post from '../../reuseable/posts/Posts'
import {db} from '../../production/firebase'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {useParams} from 'react-router-dom'

function TopStory() {

    const [posts, setPosts] = useState([]);
    const tag = useParams().slug;


    useEffect(()=>{
        db.collection('posts').orderBy("views", "desc").where("tags", "array-contains", tag).onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                userid: doc.id,
                ...doc.data()
                }
            )));
        });
    },[tag])

    return (
        <div>
            <Header/>
            <div className='tag_posts_h'>
                <p>{'Story of: #'+tag} </p>
            </div>
            <div className='tag_posts'>
            {
                posts.map((post,index) => (
                    <Post className={index} key={post.userid} userName={post.userName} imgUrl={post.imgUrl} title={post.title} description={post.description} />
                ))
            }
        </div>
        <Footer/>
        </div>
    )
}

export default TopStory
