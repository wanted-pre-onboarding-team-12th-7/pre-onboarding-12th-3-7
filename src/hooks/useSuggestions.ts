import { useEffect, useState } from 'react'

import { SickObj, suggestionAPI } from '../apis/suggestion'
import { CacheRepository } from '../store/CacheRepository'

const cacheRepository = new CacheRepository<SickObj>()

const useSuggestions = (keyword: string) => {
  const [suggestions, setSuggestions] = useState<SickObj[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (keyword !== '') {
      setLoading(true)

      const cache = cacheRepository.get(keyword)

      if (cache && cache.expireTime > Date.now()) {
        setSuggestions(cache.data)
        setLoading(false)
      } else {
        suggestionAPI
          .get(keyword)
          .then((res) => {
            setSuggestions(res.data)
            cacheRepository.set(keyword, res.data)
          })
          .catch(() => setError(true))
          .finally(() => {
            setLoading(false)
          })
      }
    } else {
      setSuggestions([])
    }
  }, [keyword])

  return { suggestions, loading, error }
}

export default useSuggestions
