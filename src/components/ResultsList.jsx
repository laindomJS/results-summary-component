import { data as results } from '../data'
import { ResultItem } from './ResultItem'

export const ResultsList = () => {
  return (
    <>
      {results.map(result => (
        <ResultItem key={result.score} {...result} />
      ))}
    </>
  )
}
