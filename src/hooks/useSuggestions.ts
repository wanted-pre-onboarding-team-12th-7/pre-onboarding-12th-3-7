import { useEffect, useState } from 'react'

import { SickObj, suggestionAPI } from '../apis/suggestion'

const useSuggestions = (debouncedValue: string) => {
  const [suggestions, setSuggestions] = useState<SickObj[]>([])

  useEffect(() => {
    if (debouncedValue !== '') {
      suggestionAPI
        .get(debouncedValue)
        .then((res) => {
          setSuggestions(res.data)
        })
        .catch((err) => console.error(err))
    } else {
      setSuggestions([])
    }
  }, [debouncedValue])

  return suggestions
}

export default useSuggestions
