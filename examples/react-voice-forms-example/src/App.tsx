import React, { useEffect, useState } from 'react';
import { useSpeechContext } from '@speechly/react-client';
import { VoiceInput, VoiceSelect, VoiceToggle } from '@speechly/react-voice-forms';
import '@speechly/react-voice-forms/css/theme/capsule.css';
import './App.css';

function App() {
  const { segment } = useSpeechContext();
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (segment) {
      const transcript = segment.words.map((w) => w.value).join(' ');
      console.log('Tentative transcript:', transcript);
      if (segment.isFinal) {
        console.log('Final transcript:', transcript);
      }
    }
  }, [segment]);

  return (
    <div className="App">
      <div className="App-header">
        <VoiceInput label="Phone number" changeOnEntityType="phone_number" value={phone} onChange={setPhone} />
        <VoiceSelect
          label="Phone number"
          changeOnEntityType="phone_number"
          value={phone}
          options={['', '112 ', '911 ']}
          onChange={setPhone}
        />
        <VoiceToggle changeOnEntityType="phone_number" value={phone} options={['112 ', '911 ']} onChange={setPhone} />
      </div>
    </div>
  );
}

export default App;
