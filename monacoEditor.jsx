import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function App() {
  const [code, setCode] = useState('// Start writing your JavaScript code here\nfunction hello() {\n  alert("Hello world!");\n}');

  function handleEditorChange(value, event) {
    // value is the current content of the editor
    setCode(value);
    console.log('Editor content changed:', value);
  }

  // Configuration options for the editor
  const options = {
    selectOnLineNumbers: true,
    minimap: {
      enabled: false, // Disable the minimap
    },
    fontSize: 14,
    // Add more options as needed (see IEditorConstructionOptions documentation)
  };

  return (
    <div>
      <h3>Monaco Editor React Example</h3>
      <Editor
        height="400px" // Set the height of the editor
        language="javascript" // Set the programming language
        theme="vs-dark" // Set the theme (available options: "vs-dark", "light")
        value={code} // The value of the editor
        options={options} // Pass the options object
        onChange={handleEditorChange} // Register the change handler
      />
      <div style={{ marginTop: '20px' }}>
        <h4>Current Code Value:</h4>
        <pre>{code}</pre>
      </div>
    </div>
  );
}

export default App;
