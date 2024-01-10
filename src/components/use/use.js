import React  from 'react';
import './use.css';

import { useEffect } from 'react';

const Use = () => {
    const searchDictionary = () => {
        const wordInput = document.getElementById('wordInput');
        const word = wordInput.value.trim();
        const output = document.getElementById('output');
        if (word === '') {
            alert('Please enter a word.');
            return;
        }
        output.innerHTML = 'Loading...';
        const apiKey = '331a9f1b-7a19-4e6f-8899-588a0282f47c';
        fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    if (data.length === 0) {
                        output.innerHTML = 'Word not found.';
                    } else {
                        output.innerHTML = `<strong>${word}:</strong> ${data[0].shortdef.join(', ')}`;
                    }
                } else {
                    output.innerHTML = 'An error occurred.';
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                output.innerHTML = 'Failed to load data.';
            });
      }; 
      const chatGPT = () => {
        const userInput = document.getElementById("wordInput").value;
        const output = document.getElementById("output");
        output.innerHTML = "Thinking...";
    
        const apiKey = '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';
        const apiUrl = 'https://api.openai.com/v1/engines/text-curie-001/completions';
    
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                prompt: userInput + "  describe it shortly",
                max_tokens: 100,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            const generatedText = data.choices[0].text.trim();
            output.innerHTML = generatedText;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            output.innerHTML = 'Failed to generate a response.';
        });
      };
      const summarizeVideo = () => {
        const userInput = document.getElementById("wordInput").value;
    
        const url = `https://www.youtube.com/results?search_query=${userInput}`
    
    
        window.open(url, 'YouTube Video', 'width=600,height=400');
      }; 
      const displayDateTime = () => {
        const currentDateTime = new Date();
                const dateTimeElement = document.getElementById('datetime');
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                const dateString = currentDateTime.toLocaleDateString('en-US', options);
                const timeString = currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                dateTimeElement.textContent = `${dateString} ${timeString}`
      };


      const convertToSpeech = ()=>  {

        const textToSpeak = document.getElementById('wordInput').value

        const options = {
            method: 'POST',
            headers: {
              'xi-api-key': 'bab799af35d585573d6b3ae61cd319bd',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: textToSpeak,
                voice_settings: {
                  stability: 1,
                  similarity_boost: 1
                }
              })
          };
          
          fetch('https://api.elevenlabs.io/v1/text-to-speech/cdSGYkXm2dzmhlb7F0sH/stream', options)
            .then(response => response.blob())
            .then(blob => {
                const audioUrl = URL.createObjectURL(blob); 
                const audio = new Audio(audioUrl); 
                audio.play(); 
              })
            .catch(err => console.error(err));
        
  
    }
     
     
      useEffect(()=>{displayDateTime()},[])
      
    
      return (        
         <>
          <div className="background"></div>
          <div className="container">
           <div id="datetime"></div>
            <h2>HEY WHAT YOU WANT ?</h2>
            <input type="text" id="wordInput" placeholder="Enter a word" />
            <button onClick={searchDictionary}>Dictionary</button>
            <button onClick={chatGPT}>ChatGPT</button>
            <button onClick={summarizeVideo}>Video Search</button>
            <button onClick={convertToSpeech}>Convert to Speech</button>
            <div id="output"></div>
          </div>
        </>
      );
    
    
};
  

 

export default Use;
