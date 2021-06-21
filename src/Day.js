import React from 'react'

function Day({ pair }) {
  return (
    <div className="line">
      <tr><td>{pair[0]}</td></tr>
      <tr><td>{pair[1]}°C</td></tr>
    </div>
  )
}
export default Day
