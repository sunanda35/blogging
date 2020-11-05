import React, {useState, useEffect} from 'react'
import './blog.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Text from './body_text/Text'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tags from './body_tag/Tag'
import { title } from '../../production/Strings'
import { useParams } from 'react-router-dom'
import { db, auth } from '../../production/firebase'
import BProfile from './body_profile/Profile'
import RelatedPost from './related/RelatedPost'
import TextSpeech from './speech/Speech'
import Cload from '../../reuseable/loading/Load'
import Error from '../../reuseable/error/Error'
import TopStory from '../../pages/top_story/TopStory'
import Social from './body_social/Social'
import {Helmet} from "react-helmet";

function Blog() {
    const blog_data = useParams();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [curr, setcurr] = useState(null)
    const [view, setView] = useState(true)

    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            setcurr(user)
        })
    })
    
    useEffect(()=>{
        db.collection("posts").where("slugUrl", "==", blog_data.slug).get().then(response=>{
            response.docs.map(doc=>{
                return setData({
                    userID: doc.id,
                    title: doc.data().title,
                    description: doc.data().description,
                    imgUrl: doc.data().imgUrl,
                    blog: doc.data().blog,
                    userName: doc.data().userName,
                    tag: doc.data().tags,
                    views: doc.data().views,
                    love: doc.data().love,
                    hate: doc.data().hate
                })
            })
            setLoading(false)
        }).catch(err =>{
            setLoading(false)
            alert(err.message)
        })
    },[data,blog_data.slug])

    useEffect(()=>{
        if(view){
            if(data.views){
                db.collection("posts").doc(data.userID).set({
                    'views': data.views?data.views+1:1,
                },{merge: true}).then(()=>{
                    setView(false)
                }).catch(err=>alert(err.message))
            }
        }
    },[data.userID])

    const datalove=(use)=>{
        if(curr && data.userID){
            use==='love' && db.collection("posts").doc(data.userID).set({
                'love': data.love?data.love+1:1,
            },{merge: true}).catch(err=>alert(err.message))
            use==='hate' && db.collection("posts").doc(data.userID).set({
                'hate': data.hate?data.hate+1:1,
            },{merge: true}).catch(err=>alert(err.message))
        }
    }


    if(loading) return (
        <Cload/>
    )
    else if(blog_data.slug==='top-story') return (
        <TopStory/>
    )
    else if (!loading && Object.keys(data).length===0) return (
        <Error/>
    )
    else return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.title}</title>
                <link rel="canonical" href={window.location.href} />
                <meta name="title" content={data.title}/>
                <meta name="description" content={data.description}/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="Blogging"/>
                <meta property="og:url" content={window.location.href}/>
                <meta property="og:title" content={data.title}/>
                <meta property="og:description" content={data.description}/>
                <meta property="og:image" content={data.imgUrl}/>

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={window.location.href}/>
                <meta property="twitter:title" content={data.title}/>
                <meta property="twitter:description" content={data.description}/>
                <meta property="twitter:image" content={data.imgUrl}/>


            </Helmet>

            
            <Header/>
            <div className='blog'>
                <h1 className='b_title'>{data.title}</h1>
                <p className='b_desc'>{data.description}</p>
                <div className='b_speech'>
                    <TextSpeech text={'Hi, how are you? '+ data.title +', '+ data.blog} title={data.title}/>
                    <img className='b_img' src={data.imgUrl} alt={data.title}/>
                </div>
                <div className='b_body'>
                    <div className='b_body_story'>
                        <div className='b_icn' >
                            <Social views={data.views} love={data.love} hate={data.hate} />
                            </div>
                        <div className='b_txt' >
                        <Text blog={data.blog}/>
                        </div>
                    </div>
                    <div className='b_auth_tag'>
                    <div className='tags'>
                        <p>Tags: </p>
                        <Tags tags={data.tag}/>
                    </div>
                    </div>
                    <div className='story_action'>
                    <div className='b_body_imp'>
                        <div className='ic'>
                            <FavoriteIcon onClick={()=>{if(curr){
                                datalove('love')
                            }else{
                                alert('Sorry, You have to login to do this')
                                window.open('/login')
                            }}} className='imp_ficon' fontSize='large' />
                            <p>{data.love?data.love:'0'}</p>
                        </div>
                        <div className='ic'>
                            <ThumbDownIcon onClick={()=>{if(curr){
                                datalove('hate')
                            }else{
                                alert('Sorry, You have to login to do this')
                                window.open('/login')
                            }}} className='imp_ticon' fontSize='large' />
                            <p>{data.hate?data.hate:'0'}</p>
                        </div>
                        <div className='ic'>
                            <VisibilityIcon className='imp_bicon' fontSize='large' />           
                            <p>{data.views?data.views:'0'}</p>
                        </div>
                            
                    </div>
                    <div className='b_body_share'>
                        <h4>Share this story </h4>
                        <TwitterIcon onClick={()=>window.open('http://twitter.com/share?text='+data.title+'&url='+window.location.href+'&hashtags='+data.tag[0]+','+data.tag[1]+','+data.tag[2]+','+data.tag[3]+','+data.tag[4]+','+data.tag[5])} className='s_ticon' fontSize='large' />
                        <LinkedInIcon onClick={()=>window.open('https://www.linkedin.com/sharing/share-offsite/?url='+window.location.href)} className='s_licon' fontSize='large' />
                        <FacebookIcon onClick={()=>window.open('https://www.facebook.com/sharer/sharer.php?u='+window.location.href)} className='s_ficon' fontSize='large' />
                        {
                            window.innerWidth<700?<WhatsAppIcon onClick={()=>window.open('https://wa.me/?text='+data.title+' '+window.location.href)} className='s_wicon' fontSize='large' />:<PinterestIcon onClick={()=>window.open('http://pinterest.com/pin/create/link/?url='+data.title+' '+window.location.href)} className='s_picon' fontSize='large' />
                        }
                    </div>
                    </div>
                </div>
                <BProfile user={data.userName}/>
                <div className='b_related'>
                    <div className='b_relate_left'></div>
                    <div className='b_relate_middle'>
                        <h2 id='more'><strong>More from {title}</strong></h2>
                    </div>
                    <div className='b_relate_right'></div>
                </div>
                <div className='b_related'>
                    <RelatedPost title={data.title} tags={data.tag}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Blog
