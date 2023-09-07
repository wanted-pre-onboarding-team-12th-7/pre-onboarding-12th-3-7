import { SearchSuggestionProps } from './type'
import { SickObj } from '../../apis/suggestion'
import useDebounce from '../../hooks/useDebounce'
import useSuggestions from '../../hooks/useSuggestions'

const DEBOUNCE_DELAY = 500

function SearchSuggestion({ keyword }: SearchSuggestionProps) {
  const debouncedValue = useDebounce(keyword, DEBOUNCE_DELAY)
  const { suggestions, loading, error } = useSuggestions(debouncedValue)

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
                {suggestions.map((suggestion: SickObj) => {
                  return (
                    <li key={suggestion.sickCd}>
                      <button type="button">{suggestion.sickNm}</button>
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
