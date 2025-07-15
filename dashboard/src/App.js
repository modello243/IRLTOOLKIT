import React from 'react';
import { OverlayEditor } from './components/OverlayEditor';
import { Scheduler } from './components/Scheduler';

function App() {
  return (
    <div>
      <h1>IRLToolkit Dashboard</h1>
      <OverlayEditor />
      <Scheduler />
    </div>
  );
}

export default App;
