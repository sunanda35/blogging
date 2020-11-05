import React, {useState, useEffect} from 'react'
import './author.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {db} from '../../production/firebase'
import {useParams} from 'react-router-dom'
import Posts from '../../reuseable/posts/Posts'
import Error from '../../reuseable/error/Error'
import Cload from '../../reuseable/loading/Load';

function Author() {
    const auth_data = useParams()
    const [profile, setProfile] = useState({})                      //for profile
    const [story, setStory] = useState([])     
    const [loading, setLoading] = useState(true)                      //for story of him  

        useEffect(()=>{
            db.collection("author").where("userName", "==", auth_data.slugg).get().then(response=>{
                response.docs.map(doc=>{
                    return setProfile({
                        name: doc.data().name,
                        userName: doc.data().userName,
                        img: doc.data().img,
                        ln: doc.data().ln,
                        tw: doc.data().tw,
                        git: doc.data().git,
                        bio: doc.data().bio
                    })
                })
                setLoading(false)
            }).catch(err=>{
                setLoading(false)
                alert('some error occured')
            })
            
        },[auth_data.slugg]);
        
        useEffect(()=>{
            db.collection('posts').orderBy("views", "desc").where("userName", "==", auth_data.slugg).onSnapshot(snapshot => {
                setStory(snapshot.docs.map(doc =>({
                    userid: doc.id,
                    ...doc.data()
                })))
            });
        },[auth_data.slugg])


    if(loading) return <Cload/>
    else if(!loading && Object.keys(profile).length===0) return <Error/>
    else return (
        <div>
            <Header/>
            <div className='author'>
                <div className='auth_prof'>
                    <div className='auth_img'>
                    <img src={profile.img} alt={profile.name}/>
                    </div>
                    <div className='auth_prof_n'>
                        <h1>{profile.name}</h1>
                        <h3>{profile.userName}</h3>
                        {
                            profile.tw? <TwitterIcon onClick={()=>window.open('https://twitter.com/'+profile.tw, '_blank')} className='twit s_icon'/>:null
                        }
                        {
                            profile.ln? <LinkedInIcon onClick={()=>window.open(profile.ln,'_blank')} className='linkdin s_icon'/>: null
                        }
                        {
                            profile.git? <GitHubIcon onClick={()=>window.open('https://github.com/'+profile.git, '_blank')} className='git s_icon'/>: null
                        }
                        
                        
                    </div>
                </div>
                <div className='auth_bio'>
                <p>{profile.bio}</p>
                </div>
            </div>
            <div className='devider'>
                <div className='d_left'></div>
                <h1>Stories</h1>
                <div className='d_right'></div>
            </div>
            <div className='auth_story'></div>
            
            <div className='story'>
            {
                story.map((data) => (
                    <Posts key={data.userid} imgUrl={data.imgUrl} userName={data.userName} title={data.title} description={data.description} slugUrl={data.slugUrl} />
                ))
            }
            </div>
            <Footer/>
        </div>
    )
}

export default Author
