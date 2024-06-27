import { useEffect, useState } from 'react'
import Characters from './components/characters/Characters'

function App() {
  const [characters, setCharacters] = useState()

  const URI = 'https://rickandmortyapi.com/api'

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch(`${URI}/character`)
      const data = await response.json()
      return data
    }
    getCharacters().then((data) => {
      setCharacters(data)
    })
  }, [])

  return (
    <>
      {characters?.results.map((char, index) => (
        <div key={index}>
          <Characters char={char} />
        </div>
      ))}
    </>
  )
}

export default App
