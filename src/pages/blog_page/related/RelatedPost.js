import React, {useState, useEffect} from 'react'
import './relatedpost.css'
import {db} from '../../../production/firebase'
import Posts from '../../../reuseable/posts/Posts'


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
                posts.map((data, index)=>(
                    <Posts key={index} imgUrl={data.imgUrl} userName={data.userName} title={data.title} description={data.description}  />
                ))
            }
        </div>
    )
}

export default RelatedPost
