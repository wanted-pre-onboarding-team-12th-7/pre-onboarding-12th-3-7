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
  changeIndexByKeyDown: {
    (e: React.KeyboardEvent): void
    setIndex(idx: number): void
  }
  isOpen: boolean
}
