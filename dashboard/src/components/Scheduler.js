import { useState } from 'react';
import axios from 'axios';

export function Scheduler() {
  const [name, setName] = useState('');
  const [cronTime, setCronTime] = useState('');
  const [command, setCommand] = useState('');
  const schedule = async () => {
    await axios.post('/api/schedule', { name, cronTime, command });
    alert('Scheduled');
  };
  return (
    <div>
      <h2>Stream Scheduler</h2>
      <input placeholder="Job Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Cron (e.g. 0 8 * * *)" value={cronTime} onChange={e => setCronTime(e.target.value)} />
      <input placeholder="Command" value={command} onChange={e => setCommand(e.target.value)} />
      <button onClick={schedule}>Schedule</button>
    </div>
  );
}
