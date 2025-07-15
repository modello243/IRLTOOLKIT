import { useState } from 'react';
import axios from 'axios';

export function OverlayEditor() {
  const [html, setHtml] = useState('');
  const save = async () => {
    await axios.post('/api/overlay', { html });
    alert('Overlay updated');
  };
  return (
    <div>
      <h2>Overlay Manager</h2>
      <textarea value={html} onChange={e => setHtml(e.target.value)} rows={10} cols={50} />
      <button onClick={save}>Save</button>
    </div>
  );
}
