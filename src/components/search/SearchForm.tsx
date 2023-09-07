import { SearchFormProps } from './type'

function SearchForm({ getInput, keyword, openSuggestion, navigateFocus }: SearchFormProps) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => getInput(e.target.value)}
        onFocus={openSuggestion}
        onKeyDown={navigateFocus}
      />
      <button type="button">검색하기</button>
    </form>
  )
}
export default SearchForm
