import { useEffect, useState } from 'react'

import { SickObj, suggestionAPI } from '../apis/suggestion'

const useSuggestions = (keyword: string) => {
  const [suggestions, setSuggestions] = useState<SickObj[]>([])

  useEffect(() => {
    if (keyword !== '') {
      suggestionAPI
        .get(keyword)
        .then((res) => {
          setSuggestions(res.data)
        })
        .catch((err) => console.error(err))
    } else {
      setSuggestions([])
    }
  }, [keyword])

  return suggestions
}

export default useSuggestions
