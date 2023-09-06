import { instance } from './instance'

type SickObj = {
  sickCd: string
  sickNm: string
}

export type GetSuggestionResponse = SickObj[]

const getSuggestion = (searchTerm: string) => {
  return instance.get<GetSuggestionResponse>('sick', { q: searchTerm })
}

export const suggestionAPI = { get: getSuggestion }
