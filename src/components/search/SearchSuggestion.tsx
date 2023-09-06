import { SearchSuggestionProps } from './type'

function SearchSuggestion({ keyword }: SearchSuggestionProps) {
  return (
    <aside>
      <p>{keyword}</p>

      <div>
        <h3>추천 검색어</h3>
        {/* FIXME: CASE1. 검색 결과가 있을때만 노출 */}
        <ul>
          <li>
            <button type="button">기침</button>
          </li>
          <li>
            <button type="button">감기</button>
          </li>
        </ul>

        {/* FIXME: CASE2. 검색 결과가 없을때만 노출 */}
        <div>추천 검색어가 없습니다.</div>
      </div>
    </aside>
  )
}

export default SearchSuggestion
