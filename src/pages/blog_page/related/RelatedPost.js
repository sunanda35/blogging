import React, {useState, useEffect} from 'react'
import './relatedpost.css'
import {db} from '../../../production/firebase'
import { Link } from 'react-router-dom'


function RelatedPost({title,tags}) {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        if(tags)db.collection("posts").where("tags", "array-contains-any", [tags[0],tags[1],tags[2]]).orderBy("views", "desc").limit(6).onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                userid: doc.id,
                ...doc.data()
                }
            )));
        })
    },[tags])

    return (
        <div className='related'>
            {
                posts.map((post, index)=>(
                    <Link key={index} to={'/'+post.title.replace(/\s+/g, '-').toLowerCase()}>
                        <div className='rp_post'>
                <div className='img_hover'>
                    <img className='rp_img' alt={post.title} src={post.imgUrl} ></img>
                </div>
                    <h2 className='rp_title'>{post.title}</h2>
                    <p className='rp_description'>{post.description}</p>
            
                </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default RelatedPost
