import { SearchSuggestionProps } from './type'
import { SickObj } from '../../apis/suggestion'

function SearchSuggestion({
  keyword,
  selectIndex,
  suggestions,
  loading,
  error,
}: SearchSuggestionProps) {
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : error ? (
        <p>ERROR!!!</p>
      ) : (
        <aside>
          <p>{keyword}</p>

          <div>
            <h3>추천 검색어</h3>
            {suggestions.length === 0 ? (
              <div>추천 검색어가 없습니다.</div>
            ) : (
              <ul>
                {suggestions.map((suggestion: SickObj, index) => {
                  return (
                    <li key={suggestion.sickCd}>
                      <button
                        // FIXME: select 테스트를 위한 스타일입니다. 스타일 작업시 제거해주세요.
                        style={selectIndex === index ? { background: 'red' } : {}}
                        type="button"
                      >
                        {suggestion.sickNm}
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </aside>
      )}
    </>
  )
}

export default SearchSuggestion
