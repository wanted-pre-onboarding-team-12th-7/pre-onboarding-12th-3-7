import styled from 'styled-components'

export const Wrapper = styled.aside`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  margin-top: 7px;
  padding: 30px;
  min-height: 240px;
  max-height: 400px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 5px 0.5px rgba(214, 214, 214, 1);
  -moz-box-shadow: 0px 0px 5px 0.5px rgba(214, 214, 214, 1);
  box-shadow: 0px 0px 5px 0.5px rgba(214, 214, 214, 1);
  text-align: left;
`

export const SearchMainText = styled.div`
  color: ${({ theme }) => theme.color.searchTitleText};
  font-size: ${({ theme }) => theme.fontSize.default};
`

export const SearchRecentBox = styled.div`
  padding: 30px 0;
  color: rgb(173, 180, 187);
  font-size: ${({ theme }) => theme.fontSize.medium};
`

export const DivideLine = styled.div`
  height: 1px;
  background-color: rgb(236, 239, 241);
  color: rgb(248, 249, 250);
  width: calc(100% + 60px);
  margin-left: -30px;
  margin-bottom: 30px;
`

export const SearchSuggestionBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
`

export const SearchSuggestionItem = styled.div`
  color: ${({ theme }) => theme.color.blue};
  background-color: ${({ theme }) => theme.color.skyblue};
  padding: 14px 16px;
  border-radius: 22px;
`
