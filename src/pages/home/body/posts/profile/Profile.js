import React, {useState, useEffect} from 'react'
import './profile.css'
import {db} from '../../../../../production/firebase'
import Avatar from '@material-ui/core/Avatar'

function Profile({userName}) {
    const [prof, setProf] = useState({})
    useEffect(()=>{
        db.collection("author").where("userName", "==", userName).get().then(response=>{
            response.docs.map(doc=>{
                return setProf({
                    name: doc.data().name,
                    img: doc.data().img,
                })
            })
        }).catch(err=>{
            alert('some error occured')
        })
        
    },[userName])
    return (
        <div className='post_p'>
            <Avatar src={prof.img} alt={prof.name} />
            <h3>{prof.name}</h3>
        </div>
    )
}

export default Profile
