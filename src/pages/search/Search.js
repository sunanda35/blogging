import React,{useState, useEffect} from 'react'
import './search.css'
import {title} from '../../production/Strings'
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import {db} from '../../production/firebase';
import {useParams} from 'react-router-dom';
import Posts from '../../reuseable/posts/Posts';

function Search() {
    const data = useParams()
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState();
    useEffect(()=>{

        if(value)db.collection("posts").where("title", ">=", value).orderBy("title", "asc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                userid: doc.id,
                ...doc.data()
                }
            )));
        })
        else if(data)db.collection("posts").where("title", ">=", data.fuck).orderBy("title", "asc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                userid: doc.id,
                ...doc.data()
                }
            )));
        })
    },[data, value])


    return (
        <div>
            <Header/>
            <div className='search'>
            <div className='search_block'>
            <div className='search_option'>
                <input style={{backgroundColor: 'transparent'}} type='text' placeholder={
                    !value?'Search ' + title:{value}
                } name='search' onChange={e=>setValue(e.target.value)}/>
                <SearchIcon className='search_option_btn' fontSize='large'/>
            </div>
            <div className='search_count'>
                <p>{posts.length+'+ Stories found'}</p>
            </div>
            </div>
        </div>
        <div className='search_result'>
            {
                posts?posts.map((data, index)=>(
                    <Posts key={index} imgUrl={data.imgUrl} userName={data.userName} title={data.title} description={data.description} slugUrl={data.slugUrl} />
                )):{}
            }
        </div>
        <Footer/>
        </div>
    )
}

export default Search
