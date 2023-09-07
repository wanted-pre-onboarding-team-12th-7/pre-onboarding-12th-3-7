import { useEffect, useState } from 'react'

import { SickObj, suggestionAPI } from '../apis/suggestion'

const useSuggestions = (keyword: string) => {
  const [suggestions, setSuggestions] = useState<SickObj[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (keyword !== '') {
      setLoading(true)

      suggestionAPI
        .get(keyword)
        .then((res) => {
          setSuggestions(res.data)
        })
        .catch(() => setError(true))
        .finally(() => {
          setLoading(false)
        })
    } else {
      setSuggestions([])
    }
  }, [keyword])

  return { suggestions, loading, error }
}

export default useSuggestions
