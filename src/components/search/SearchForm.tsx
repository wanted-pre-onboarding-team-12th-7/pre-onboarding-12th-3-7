import { SearchFormProps } from './type'

function SearchForm({ getInput, keyword, changeIndexByKeyDown }: SearchFormProps) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={keyword}
        onBlur={() => changeIndexByKeyDown.setIndex(-1)}
        onChange={(e) => getInput(e.target.value)}
        onFocus={() => changeIndexByKeyDown.setIndex(0)}
      />
      <button type="button">검색하기</button>
    </form>
  )
}
export default SearchForm
