import { useEffect, useState } from 'react'

const useKeyboardNavigation = <T>(
  resultArray: T[],
  isResultOpen: boolean,
  setIsResultOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [selectIndex, setSelectIndex] = useState(-1)
  const [selectedItem, setSelectedItem] = useState<T | null>(null)

  const startIndex = 0
  const endIndex = resultArray.length - 1
  const isStartIndex = selectIndex === startIndex
  const isEndIndex = selectIndex === endIndex

  const openResult = () => {
    setIsResultOpen(true)
  }

  const closeResult = () => {
    setIsResultOpen(false)
  }

  const moveToPrev = (e: React.KeyboardEvent) => {
    e.preventDefault()
    if (isStartIndex) {
      closeResult()
    } else {
      setSelectIndex((prev) => prev - 1)
    }
  }

  const moveToNext = (e: React.KeyboardEvent) => {
    if (isResultOpen) {
      setSelectIndex((prev) => (prev < endIndex ? prev + 1 : prev))
      if (e.key === 'Tab') {
        if (isEndIndex) {
          closeResult()
        } else {
          e.preventDefault()
        }
      }
    }
    if (!isResultOpen && e.key === 'ArrowDown') {
      setSelectIndex(0)
      openResult()
    }
  }

  const closeAndReset = () => {
    closeResult()
    setSelectIndex(-1)
  }

  const selectCurrent = () => {
    setSelectedItem(resultArray[selectIndex])
  }

  const navigateFocus = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp' || (e.shiftKey && e.key === 'Tab')) {
      moveToPrev(e)
    } else if (e.key === 'ArrowDown' || e.key === 'Tab') {
      moveToNext(e)
    } else if (e.key === 'Escape') {
      closeAndReset()
    } else if (e.key === 'Enter') {
      selectCurrent()
    }
  }

  useEffect(() => {
    openResult()
    setSelectIndex(-1)
  }, [resultArray])

  return { selectIndex, navigateFocus, selectedItem }
}

export default useKeyboardNavigation
