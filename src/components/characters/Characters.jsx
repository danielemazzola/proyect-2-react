import { useState } from 'react'
import './characters.css'

const Characters = ({ char }) => {
  const [rotations, setRotations] = useState(false)
  let degInit = 180 // ROTATE VALUE

  return (
    <div id={char.id}>
      <img
        src={char.image}
        onClick={() => {
          setRotations(!rotations)
        }}
        style={{
          transform: rotations && `rotate(${degInit}deg)`
        }}
      />
    </div>
  )
}

export default Characters
