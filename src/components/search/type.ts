import { SickObj } from '../../apis/suggestion'

export interface SearchSuggestionProps {
  keyword: string
  selectIndex: number
  suggestions: SickObj[]
  loading: boolean
  error: boolean
}

export interface SearchFormProps {
  getInput: (vlaue: string) => void
  keyword: string
  openSuggestion: () => void
  navigateFocus: (e: React.KeyboardEvent) => void
}
