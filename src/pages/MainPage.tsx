import { useEffect, useRef, useState } from 'react'

import SearchForm from '../components/search/SearchForm'
import SearchSuggestion from '../components/search/SearchSuggestion'
import useDebounce from '../hooks/useDebounce'
import useSuggestions from '../hooks/useSuggestions'

const DEBOUNCE_DELAY = 500

export default function MainPage() {
  const [keyword, setKeyword] = useState<string>('')
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false)
  const [selectIndex, setSelectIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const debouncedValue = useDebounce(keyword, DEBOUNCE_DELAY)
  const { suggestions, loading, error } = useSuggestions(debouncedValue)

  const getInput = (value: string): void => {
    setKeyword(value)
  }

  const openSuggestion = () => {
    setIsSuggestionOpen(true)
  }

  const closeSuggestion = () => {
    setIsSuggestionOpen(false)
  }

  const navigateFocus = (e: React.KeyboardEvent) => {
    const startIndex = 0
    const endIndex = suggestions.length - 1

    if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
      e.preventDefault()
      if (selectIndex === startIndex) {
        closeSuggestion()
      } else {
        setSelectIndex((prev) => prev - 1)
      }
    } else if (e.key === 'ArrowDown' || e.key === 'Tab') {
      if (e.key === 'ArrowDown') {
        if (isSuggestionOpen) {
          setSelectIndex((prev) => (prev < endIndex ? prev + 1 : prev))
        } else {
          setSelectIndex(0)
          openSuggestion()
        }
      } else if (e.key === 'Tab') {
        if (isSuggestionOpen) {
          setSelectIndex((prev) => (prev < endIndex ? prev + 1 : prev))
          if (selectIndex !== endIndex) {
            e.preventDefault()
          } else {
            closeSuggestion()
          }
        }
      }
    } else if (e.key === 'Escape') {
      closeSuggestion()
    } else if (e.key === 'Enter') {
      setKeyword(suggestions[selectIndex].sickNm)
    }
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
    openSuggestion()
    setSelectIndex(-1)
  }, [keyword])

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
