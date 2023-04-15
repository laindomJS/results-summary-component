import { useState, useEffect } from 'react'
import { ResultItem } from './ResultItem'

export const ResultsList = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch('./src/data.json')
      .then(res => res.json())
      .then(data => setResults(data))
  }, [])

  return (
    <>
      {results.map(result => (
        <ResultItem key={result.score} {...result} />
      ))}
    </>
  )
}
