import { SearchSuggestionProps } from './type'
import { SickObj } from '../../apis/suggestion'
import useDebounce from '../../hooks/useDebounce'
import useSuggestions from '../../hooks/useSuggestions'

function SearchSuggestion({ keyword }: SearchSuggestionProps) {
  const DEBOUNCE_DELAY = 500

  const debouncedValue = useDebounce(keyword, DEBOUNCE_DELAY)
  const suggestions = useSuggestions(debouncedValue)

  return (
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
  )
}

export default SearchSuggestion
