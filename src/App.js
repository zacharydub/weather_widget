import React from 'react'
import Day from './Day'

function App() {

  const DATA = [['Monday', 20], ['Tuesday', 21], ['Wednesday', 17], ['Thursday', 16], ['Friday', 25], ['Saturday', 24], ['Sunday', 30]];

  return (
    <div className="app">
      <table>
        <thead>
          <tr className="current">37°C </tr>
          <span className="sun"></span>
        </thead>
        <tbody>
          {DATA.map(pair => {
            return (
              <Day pair={pair} />
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
