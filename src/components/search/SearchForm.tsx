import { SearchFormType } from './type'

function SearchForm({ getInput, keyword }: SearchFormType) {
  return (
    <form>
      <input type="text" value={keyword} onChange={(e) => getInput(e.target.value)} />
      <button type="button">검색하기</button>
    </form>
  )
}
export default SearchForm
