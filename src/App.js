// Import CSS
import "./App.css"
// Import React
import React, { useState } from 'react'
// Import ColorBlock
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App(){
    let [colors, setColors] = useState([
        'violet', 
        'blue',
        'lightblue', 
        'green',
        'greenyellow', 
        'yellow',
        'orange', 
        'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    });

    const addColor = (newColor) => {
      setColors([colors,newColor])
    };

    return (
      <div className="App">
        {colorMap}
        <ColorForm addColor={addColor} />
</div>
    );
}

// Export App
export default App;