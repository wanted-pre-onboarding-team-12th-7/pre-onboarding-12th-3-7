import { useEffect, useRef, useState } from 'react'

import SearchForm from '../components/search/SearchForm'
import SearchSuggestion from '../components/search/SearchSuggestion'
import useDebounce from '../hooks/useDebounce'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'
import useSuggestions from '../hooks/useSuggestions'

const DEBOUNCE_DELAY = 500

export default function MainPage() {
  const [keyword, setKeyword] = useState<string>('')
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const debouncedValue = useDebounce(keyword, DEBOUNCE_DELAY)
  const { suggestions, loading, error } = useSuggestions(debouncedValue)
  const { selectIndex, navigateFocus, selectedItem } = useKeyboardNavigation(
    suggestions,
    isSuggestionOpen,
    setIsSuggestionOpen
  )

  const getInput = (value: string): void => {
    setKeyword(value)
  }

  const openSuggestion = () => {
    setIsSuggestionOpen(true)
  }

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSuggestionOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  useEffect(() => {
    if (selectedItem) {
      setKeyword(selectedItem.sickNm)
    }
  }, [selectedItem])

  return (
    <section ref={searchRef}>
      <h2>검색하기</h2>
      <p>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </p>

      <SearchForm
        getInput={getInput}
        keyword={keyword}
        navigateFocus={navigateFocus}
        openSuggestion={openSuggestion}
      />
      {isSuggestionOpen && (
        <SearchSuggestion
          error={error}
          keyword={keyword}
          loading={loading}
          selectIndex={selectIndex}
          suggestions={suggestions}
        />
      )}
    </section>
  )
}
