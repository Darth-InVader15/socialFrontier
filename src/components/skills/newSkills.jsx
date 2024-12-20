import React, { useState, useEffect } from 'react';
import Tom from '/tom.gif';

function NewSkills() {
  const [quote, setQuote] = useState('loading...');

  useEffect(() => {
    fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then(data => setQuote(data.quote))
      .catch(error => console.error('Error fetching the quote:', error));
  }, []);

  return (
    <div>
      <h2>Duh, as if anyone's interested in that</h2>
      <img src="/tom.gif" alt="Tom" style={{ width:"50%", height: "auto" }}></img>
      <h3 style={{
        marginTop: '5%',
      }}>Maybe I should add a NGL link</h3>
      <p style={{
        marginTop: '20px',
      }}>Btw, here's a quote from Kanye:</p>
      <blockquote style={
        {
            marginTop: '10px',
            marginRight: '10%',
            color: 'orange',
        }
      }>"{quote}"</blockquote>
    </div>
  );
}

export default NewSkills;