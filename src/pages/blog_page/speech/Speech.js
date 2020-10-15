import React from 'react'
import './speech.css'

function Speech({text}) {
    const speech = ()=>{
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
            utterance.volume = 0.8;
          
            // Speak the utterance
            synthesis.speak(utterance);
          
          }
        }
    
    return (
        <div>
            <button onClick={()=>speech()}>blodu bol be</button>
                    <progress value='80' max='100'/>
        </div>
    )
}

export default Speech
