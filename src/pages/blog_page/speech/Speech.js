import React, {useState} from 'react'
import './speech.css'
import PlayCircleOutlineTwoToneIcon from '@material-ui/icons/PlayCircleOutlineTwoTone';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import VolumeUpTwoToneIcon from '@material-ui/icons/VolumeUpTwoTone';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';


function Speech({text, title}) {
    const [volume, setVolume] = useState(0.5)
    const [pauseSpeak, setPauseSpeak] = useState(true)
    const [speak, setSpeak] = useState(false)

    if ('speechSynthesis' in window) {
      var synthesis = window.speechSynthesis;
                                               // Get the first `en` language voice in the list
      var voice = synthesis.getVoices().filter(function(voice) {
        return voice.lang === 'en';
      })[0];
                                                  // Create an utterance object
      var utterance = new SpeechSynthesisUtterance(text);
                                                 // Set utterance properties
      utterance.voice = voice;
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = volume;
    }

    const speech = ()=>{
      if(!speak) {
        synthesis.speak(utterance);
        setSpeak(true)
      }
      else pause()
      }
    const pause = () =>{
      if(pauseSpeak) {
        synthesis.pause();
        setPauseSpeak(false)
      }
      else {
        synthesis.resume()
        setPauseSpeak(true)
      }
    }

    
    return (
        <div className='listin_blog'>
            <button onClick={()=>{
              speech();
            }}>
              {
              pauseSpeak?<PlayCircleOutlineTwoToneIcon fontSize='large' />:
              <PauseCircleOutlineIcon fontSize='large' />
            }
            </button>
            {
              volume!==0?<VolumeUpTwoToneIcon onClick={()=>setVolume(0)} fontSize='large'/>:<VolumeOffIcon onClick={()=>setVolume(100)} fontSize='large'/>
            }
            <div id='progress'>{title}</div>
            
            <progress id='volume' value={volume}  max='100'/>
        </div>
    )
}

export default Speech
