import { useState } from 'react'

import SearchForm from '../components/search/SearchForm'
import SearchSuggestion from '../components/search/SearchSuggestion'

export default function MainPage() {
  const [keyword, setKeyword] = useState<string>('')
  const getInput = (value: string): void => {
    setKeyword(value)
  }

  return (
    <section>
      <h2>검색하기</h2>
      <p>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </p>

      <SearchForm getInput={getInput} keyword={keyword} />
      <SearchSuggestion keyword={keyword} />
    </section>
  )
}
