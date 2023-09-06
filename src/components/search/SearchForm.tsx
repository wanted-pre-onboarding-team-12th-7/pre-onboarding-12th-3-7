interface SearchFormType {
  getInput: (vlaue: string) => void
  keyword: string
}

function SearchForm(props: SearchFormType) {
  return (
    <form>
      <input type="text" value={props.keyword} onChange={(e) => props.getInput(e.target.value)} />
      <button type="button">검색하기</button>
    </form>
  )
}
export default SearchForm
