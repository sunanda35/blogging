import React, {useState, useEffect} from 'react'
import './topstory.css'
import Post from '../../reuseable/posts/Posts'
import {db} from '../../production/firebase'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {title} from '../../production/Strings'

function TopStory() {

    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        db.collection('posts').orderBy("views", "desc").where("views", ">=", "5").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                userid: doc.id,
                ...doc.data()
                }
            )));
        });
    },[posts])

    return (
        <div>
            <Header/>
            <div className='top_posts_h'>
                <p>Top Stories of {title} </p>
                <h5>We choose specially {posts.length} top stories for you! </h5>
            </div>
            <div className='top_posts'>
            {
                posts.map((post,index) => (
                    <Post className={index} key={post.userid} userName={post.userName} imgUrl={post.imgUrl} title={post.title} description={post.description} slugUrl={post.slugUrl} />
                ))
            }
        </div>
        <Footer/>
        </div>
    )
}

export default TopStory
