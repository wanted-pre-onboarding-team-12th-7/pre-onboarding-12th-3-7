import { useRef } from 'react'

import { SearchFormProps } from './type'
import { ReactComponent as ButtonSearchIcon } from '../../styles/svg/buttonSearchIcon.svg'
import { ReactComponent as ClearIcon } from '../../styles/svg/clearIcon.svg'
import { ReactComponent as PlaceholderSearchIcon } from '../../styles/svg/placeholderSearchIcon.svg'

import * as S from './Search.styled'

function SearchForm({ getInput, keyword, changeIndexByKeyDown, isOpen }: SearchFormProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <S.SearchInnerBox isOpen={isOpen} onSubmit={(e) => e.preventDefault()}>
      <S.SearchInputWrapper>
        <S.SearchInputWrapperFlex />
        <S.SearchInputBox
          onClick={() => {
            inputRef.current?.focus()
          }}
        >
          {!isOpen && (
            <S.PlaceholderAbsoluteBox>
              <S.PlaceholderImgBox>
                <PlaceholderSearchIcon />
              </S.PlaceholderImgBox>
              <div>질환명을 입력해 주세요.</div>
            </S.PlaceholderAbsoluteBox>
          )}
          <S.SearchInput
            ref={inputRef}
            autoFocus
            type="text"
            value={keyword}
            onBlur={() => {
              changeIndexByKeyDown.setIndex(-1)
            }}
            onChange={(e) => getInput(e.target.value)}
            onFocus={() => {
              changeIndexByKeyDown.setIndex(0)
            }}
          />
          <S.ClearImgBox
            isOpen={isOpen}
            onClick={() => {
              getInput('')
            }}
          >
            <ClearIcon />
          </S.ClearImgBox>
        </S.SearchInputBox>
      </S.SearchInputWrapper>
      <S.SearchButton type="button">
        <S.SearchButtonImgBox>
          <ButtonSearchIcon />
        </S.SearchButtonImgBox>
      </S.SearchButton>
    </S.SearchInnerBox>
  )
}
export default SearchForm
