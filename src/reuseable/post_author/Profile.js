import React, {useState, useEffect} from 'react'
import './profile.css'
import {db} from '../../production/firebase'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));


function Profile({userName}) {
    const [prof, setProf] = useState({})
    useEffect(()=>{
        db.collection("author").where("userName", "==", userName).get().then(response=>{
            response.docs.map(doc=>{
                return setProf({
                    name: doc.data().name.substr(0,doc.data().name.indexOf(' ')),
                    img: doc.data().img,
                })
            })
        }).catch(err=>{
            alert('some error occured')
        })
        
    },[userName])
    const classes = useStyles();

    return (
        <div className={'post_p '+ classes.root}>
            <Link className='post_p' to={'/author/'+userName}>
            <Avatar className={classes.small} src={prof.img} alt={prof.name} />
            <p>{prof.name}</p>
            </Link>
        </div>
    )
}

export default Profile
