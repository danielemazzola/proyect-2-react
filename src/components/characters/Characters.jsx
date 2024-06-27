import React, { useState } from 'react'

const Characters = ({ char }) => {
  const [rotations, setRotations] = useState({})

  const handleRotation = (id) => {
    setRotations((initStateRotate) => ({
      ...initStateRotate,
      [id]: (initStateRotate[id] || 0) + 180
    }))
  }
  return (
    <div id={char.id}>
      <img
        src={char.image}
        onClick={() => handleRotation(char.id)}
        style={{
          transform: `rotate(${rotations[char.id] || 0}deg)`,
          transition: 'transform 0.5s'
        }}
      />
    </div>
  )
}

export default Characters
