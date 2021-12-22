import React, { useState } from 'react';
import './index.css';
function App() {
  const [colors, setColors] = useState(['red', 'blue', 'yellow', 'black']);

  

  let handleClick = () => {
    let last = colors.pop();
    colors.unshift(last);  
    setColors([ ...colors]);
    return colors;
  };
 
  return (
    <div>
      {
        <div>
          {colors.map((getcolor) => (
            <div className='elements' style={{ background: getcolor }}></div>
          ))}
        </div>
      }
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default App;
