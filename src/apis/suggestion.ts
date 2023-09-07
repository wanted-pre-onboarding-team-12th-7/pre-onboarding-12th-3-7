import { instance } from './instance'
import { CacheRepository } from '../store/CacheRepository'

export interface SickObj {
  sickCd: string
  sickNm: string
}

export type GetSuggestionResponse = SickObj[]

const cacheRepository = new CacheRepository<SickObj>()

const getSuggestion = async (searchTerm: string) => {
  const cache = cacheRepository.get(searchTerm)

  if (cache && cache.expireTime > Date.now()) {
    return cache.data
  } else {
    const { data } = await instance.get<GetSuggestionResponse>('sick', { q: searchTerm })
    cacheRepository.set(searchTerm, data)

    return data
  }
}

export const suggestionAPI = { get: getSuggestion }
