export interface SearchSuggestionType {
  keyword: string
}

export interface SearchFormType {
  getInput: (vlaue: string) => void
  keyword: string
}
