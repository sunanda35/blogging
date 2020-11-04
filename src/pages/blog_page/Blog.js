import React, {useState, useEffect} from 'react'
import './blog.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Text from './body_text/Text'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Tags from './body_tag/Tag'
import { title } from '../../production/Strings'
import { useParams } from 'react-router-dom'
import { db } from '../../production/firebase'
import BProfile from './body_profile/Profile'
import RelatedPost from './related/RelatedPost'
import TextSpeech from './speech/Speech'
import Cload from '../../reuseable/loading/Load'
import Error from '../../reuseable/error/Error'
import TopStory from '../../pages/top_story/TopStory'
import Social from './body_social/Social'

function Blog() {
    const blog_data = useParams();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        db.collection("posts").where("slugUrl", "==", blog_data.slug).get().then(response=>{
            response.docs.map(doc=>{
                return setData({
                    title: doc.data().title,
                    description: doc.data().description,
                    imgUrl: doc.data().imgUrl,
                    blog: doc.data().blog,
                    userName: doc.data().userName,
                    tag: doc.data().tags
                })
            })
            setLoading(false)
        }).catch(err =>{
            setLoading(false)
            alert('some error occured')
        })
    })



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
            <Header/>

            <div className='blog'>
                <h1 className='b_title'>{data.title}</h1>
                <p className='b_desc'>{data.description}</p>
                <div className='b_speech'>
                    <TextSpeech text={'Hi, how are you? '+ data.title +', '+ data.description+', '+ data.blog} title={data.title}/>
                    <img className='b_img' src={data.imgUrl} alt={data.title}/>
                </div>
                <div className='b_body'>
                    <div className='b_body_story'>
                        <div className='b_icn' >
                            <Social/>
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
                            <FavoriteIcon className='imp_ficon' fontSize='large' />
                            <p>011</p>
                        </div>
                        <div className='ic'>
                            <ThumbDownIcon className='imp_ticon' fontSize='large' />
                            <p>011</p>
                        </div>
                            <BookmarksIcon className='imp_bicon' fontSize='large' />
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
