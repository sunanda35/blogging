import React, {useState, useEffect} from 'react'
import './author.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {db} from '../../production/firebase'
import Story from './story/Story'

function Author() {
    const [profile, setProfile] = useState({})                      //for profile
    const [story, setStory] = useState([])                           //for story of him       
        useEffect(()=>{
            db.collection("author").where("userName", "==", "@somu").get().then(response=>{
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
            }).catch(err=>{
                alert('some error occured')
            })
            
        },[profile])
        useEffect(()=>{
            db.collection('posts').orderBy("views", "desc").where("userName", "==", "@somu").onSnapshot(snapshot => {
                setStory(snapshot.docs.map(doc =>({
                    userid: doc.id,
                    ...doc.data()
                })))
                // snapshot.forEach(doc =>{
                //     setStory(
                //         // doc.data,
                //         ...doc.data())
                // }
                // )
            });
        },[story])

    return (
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
                        <a href={'https://twitter.com/'+profile.tw}><TwitterIcon className='twit s_icon'/></a>
                        <a href={profile.ln}><LinkedInIcon className='linkdin s_icon'/></a>
                        <a href={'https://github.com/'+profile.git}><GitHubIcon className='git s_icon'/></a>
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
                    <Story key={data.userid} userName={data.userName} userAvatar={profile.img} imgUrl={data.imgUrl} title={data.title} description={data.description}  />
                ))
            }
            </div>
            <Footer/>
        </div>
    )
}

export default Author
