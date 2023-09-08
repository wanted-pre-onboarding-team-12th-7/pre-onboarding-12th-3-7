import { useState } from 'react'

import SearchForm from '../components/search/SearchForm'
import SearchSuggestion from '../components/search/SearchSuggestion'
import useDebounce from '../hooks/useDebounce'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'
import useSuggestions from '../hooks/useSuggestions'

import * as S from '../components/search/Search.styled'
import SearchSvgImages from '../components/search/SearchSvgImages'

const DEBOUNCE_DELAY = 500

export default function MainPage() {
  const [keyword, setKeyword] = useState<string>('')
  const debouncedValue = useDebounce(keyword, DEBOUNCE_DELAY)
  const { suggestions, loading, error } = useSuggestions(debouncedValue)
  const { currentIndex, changeIndexByKeyDown } = useKeyboardNavigation(suggestions)
  const isOpen = currentIndex > -1

  const getInput = (value: string): void => {
    setKeyword(value)
  }
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.TitleText>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </S.TitleText>
        <S.SearchBox onKeyDown={changeIndexByKeyDown}>
          <SearchForm
            changeIndexByKeyDown={changeIndexByKeyDown}
            getInput={getInput}
            isOpen={isOpen}
            keyword={keyword}
          />
          {isOpen && (
            <SearchSuggestion
              error={error}
              keyword={keyword}
              loading={loading}
              selectIndex={currentIndex}
              suggestions={suggestions}
            />
          )}
        </S.SearchBox>

        <SearchSvgImages />
      </S.SearchWrapper>
    </S.Wrapper>
  )
}
