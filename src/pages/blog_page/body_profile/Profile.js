import React, {useState, useEffect} from 'react'
import {db} from '../../../production/firebase'

function Profile({user}) {
    const [prof, setProf] = useState({})
    useEffect(()=>{
            user? db.collection("author").where("userName", "==", user?user:null).get().then(response=>{
                response.docs.map(doc=>{
                    return setProf({
                        name: doc.data().name,
                        img: doc.data().img,
                        userName: doc.data().userName,
                        bio: doc.data().bio
                    })
                })
            }).catch(err=>{
                alert('some error occured')
            }): setProf({
                name: 'loading..',
                img: 'loading..',
                userName: 'loading..',
                bio: 'loading..'
            })
        
    },[user])
    return (
        <div>
            <div className='b_author'>
                    <div className='b_author_left'>
                        <div className='auth_img'>
                        <img src={prof.img} alt='name'/>
                        </div>
                    <div className='b_a_l_r'>
                        <h6 onClick={()=>window.open('/author/'+prof.userName)} style={{cursor: 'pointer'}} >{prof.userName}</h6>
                        <p>{prof.name}</p>
                    </div>
                    </div>
                    <div className='b_author_right'>
                    <div className='b_author_header'>
                        <p>Bio: </p>
                    </div>
                        <p>{prof.bio}</p>
                    </div>

                </div>
        </div>
    )
}

export default Profile
