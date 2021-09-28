import React from 'react'
import './App.css'
import { setGlobal } from 'reactn'

import CanvasSurface from './CanvasSurface'
import TextEditor from './TextEditor'

setGlobal({
  spicker:false
})

function App() {
  return (
    <div className="App">
      <CanvasSurface />
      <TextEditor />
    </div>
  );
}

export default App;
