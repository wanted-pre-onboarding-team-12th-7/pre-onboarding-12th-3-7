# 프리온보딩 7팀 Search Clinical Trial

![logo](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-3-7/assets/52682692/8c1d916a-2d12-41ee-9f2d-bced871a7d97)

7팀의 협업은 이렇게 진행되고 있어요! [궁금하다면 클릭!](https://www.notion.so/sonicrok/7-5fcce41bb3594680b16862082dd0324d)

## 프로젝트 소개

원티드 프리온보딩 프론트엔드 - 3주차 과제 내용을 구현한 Search Clinical Trial 프로젝트입니다!

[목표] [한국임상정보](https://clinicaltrialskorea.com/) 클론하여 검색 및 캐싱 기능을 구현한 웹 사이트 구축

## 팀원 소개

| <img src="https://avatars.githubusercontent.com/wisdomin121" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/anyl92" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/SeungrokYoon" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/5unk3n" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/salmontaker" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/JangHyunjeong" width="130" height="130"> |
| :------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
|                                       **김민지**                                       |                                 **안유림 (서기)**                                 |                                    **윤승록 (서기)**                                    |                                    **이선근**                                     |                                   **이승원 (팀장)**                                    |                                        **장현정**                                        |
|                     [@wisdomin121](https://github.com/wisdomin121)                     |                       [@anyl92](https://github.com/anyl92)                        |                    [@SeungrokYoon](https://github.com/SeungrokYoon)                     |                       [@5unk3n](https://github.com/5unk3n)                        |                     [@salmontaker](https://github.com/salmontaker)                     |                    [@JangHyunjeong](https://github.com/JangHyunjeong)                    |

## 개발 환경

### Developement

<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=for-the-badge&logo=nodedotjs"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>

### Convention

<img src="https://img.shields.io/badge/husky-brown?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/lint staged-white?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

### Network & Route

<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>

### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

## 프로젝트 실행 방법

다음 명령어를 사용하여 프로젝트를 clone 하시거나 (git이 설치되어 있어야 합니다.)

우측 상단의 `Code` 버튼 -> `Download ZIP` 를 눌러 프로젝트를 다운로드 하실 수 있습니다.

```shell
git clone https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-3-7.git
```

프로젝트 다운로드가 끝났다면, 해당 디렉토리로 이동하여 프로젝트 실행에 필요한 패키지를 설치합니다.

```shell
npm install
```

패키지 설치가 끝났다면, 다음 명령어를 사용하여 프로젝트를 실행하실 수 있습니다!

```shell
npm start
```

## 배포 링크

배포 링크: https://pre-onboarding-12th-3-7.vercel.app/

배포는 `vercel` 서비스를 사용했습니다.

## 아키텍쳐

### 디렉토리 구조

```
📦src
 ┣ 📂apis
 ┣ 📂assets
 ┃ ┗ 📂svg
 ┣ 📂components
 ┃ ┗ 📂Search
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂store
 ┣ 📂styles
 ┃ ┣ 📂base
 ┃ ┗ 📂constants
```

# Best Practice 논의

## 1. 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

### 1-1. API 호출 영역을 custom hook으로 분리하여 추상화

- 추천 검색어를 노출 하는 `SearchSuggestion`컴포넌트에서는 API 호출의 결과 값만 필요하다고 논의되었습니다.
  `suggestions(추천 검색어), loading(로딩 여부), error(에러 여부)` 만 가져올 수 있도록, API를 호출부를 custom hook으로 분리하였습니다.

- 분리된 `useSuggestions` hook은 `keyword`를 주입할 수 있도록 제작했고 `useEffect`를 사용하여 keyword의 상태에 따라 return될 값들의 상태를 변경해 주었습니다.

```ts
const useSuggestions = (keyword: string) => {
  ...
  useEffect(() => {
  ...
  }, [keyword])

  return { suggestions, loading, error }
}
```

### 1-2. useSuggestions 구현 방법

**1). loading**

- `default 값을 false`로 설정하였고, `keyword !== ''`인 경우 `true`, `finally`를 사용하여 API호출 완료시 `false` 값을 return 하였습니다.

**2). error**

- `default 값을 false`로 설정하여 API호출 실패 시, `true` 값을 return 하였습니다.

**3). suggestions**

- 저장 된 `cache data`가 있으면 `cache`에 저장된 data를 return 해주었습니다.
- 저장 된 `cache data`가 없으면 `suggestionAPI`로 호출된 data를 return 해주었습니다.

```ts
// src/hooks/useSuggestions.ts

const [loading, setLoading] = useState<boolean>(false)
const [error, setError] = useState<boolean>(false)

useEffect(() => {
  if (keyword !== '') {
  setLoading(true)

  const cache = cacheRepository.get(keyword)

  if (cache && cache.expireTime > Date.now()) {
    setSuggestions(cache.data)
    setLoading(false)
  } else {
    suggestionAPI
      .get(keyword)
      .then((res) => {
        setSuggestions(res.data)
        cacheRepository.set(keyword, res.data)
      })
      .catch(() => setError(true))
      .finally(() => {
        setLoading(false)
      })
    }
  } else {
    setSuggestions([])
  }
}, [keyword])
```

### 1-3. 검색창 컴포넌트 설계

- 앞서 정의된 `useSuggestions` hook을 이용하여 `suggestions, loading, error`세 상태의 결과값을 화면에 출력했습니다.

```
const { suggestions, loading, error } = useSuggestions(debouncedValue)
```

- `loading / error` 여부에 따라 `loading / error message`를 출력해 주었습니다.

- `suggestions.length === 0`의 참/거짓에 따라 `'최근 검색어 + 추천 검색어(default)' / '추천 검색어(suggestions)'`값을 출력해주었습니다.

```tsx
// src/components/search/SearchSuggestion.tsx

{loading ? (
  <S.SearchMainText>검색 중 ...</S.SearchMainText>
) : error ? (
  <S.SearchMainText>검색 에러 발생, 문의 부탁드립니다.</S.SearchMainText>
) : (
  <>
    <S.SearchRecentBox>
      {suggestions.length === 0 ? (
        <>
          <S.SearchMainText>최근 검색어</S.SearchMainText>
          <div>최근 검색어가 없습니다</div>
        </>
        ) : (
          <S.SearchRecentItemList>
          ...
          <S.SearchMainText>추천 검색어</S.SearchMainText>
          {suggestions.map((suggestion: SickObj, index) => {
            return (
              <S.SearchRecentItem
                key={suggestion.sickCd}
                $selectIndex={selectIndex === index + 1}
              >
              ...
              </S.SearchRecentItem>
            )
          })}
          </S.SearchRecentItemList>
        )}
    </S.SearchRecentBox>
      {suggestions.length === 0 && (
        <>
          <S.SearchMainText>추천 검색어로 검색해보세요</S.SearchMainText>
          <S.SearchSuggestionBox>
          <S.SearchSuggestionItem>B형간염</S.SearchSuggestionItem>
            ...
          </S.SearchSuggestionBox>
        </>
      )}
  </>
)}
```

## 2. API 호출 별 로컬 캐싱 구현

### 2-1. 캐시를 어디에 저장해야 하는가?

> 팀원들 모두의 의견이 조금씩 달랐으나, 각 방법의 장단점을 비교해보며 하나의 Best Practice로 통합할 수 있었습니다!
>
> **1) LocalStorage** <br />
> 검색어 기록을 남길 것이라면 localStorage를 사용하는게 맞으나, 검색어의 결과를 브라우저가 닫혀도 저장할 필요는 없다 생각하여 localStorage는 선택지에서 제외하였습니다.
>
> **2) SessionStorage** <br />
> localStorage와 sessionStorage에는 문자열만 저장이 가능하므로, 캐시를 저장하고 불러오는 과정에서 JSON.stringify로 직렬화 하는 비용이 들기 때문에 선택지에서 제외하였습니다.
>
> **3) CacheStorage** <br />
> cacheStorage의 사용을 시도해본 팀원이 있었으나, expireTime 삽입에 이슈가 있었다고 하여 선택지에서 제외하였습니다.
>
> **4) Memory** <br />
> 따라서, 객체 형태로 메모리에 직접 캐시를 저장하기로 결정하였습니다.

### 2-2. 캐시를 어떻게 저장할 것인가?

```ts
// src/store/CacheRepository.ts

interface LocalCache<T> {
  data: T[]
  expireTime: number
}

const MINUTES_IN_MILLISECONDS = 60000
const EXPIRE_TIME = MINUTES_IN_MILLISECONDS * 1

export class CacheRepository<T> {
  #cache: Record<string, LocalCache<T>> = {}

  set(key: string, value: T[]) {
    this.#cache[key] = {
      data: value,
      expireTime: Date.now() + EXPIRE_TIME,
    }
  }

  get(key: string) {
    return this.#cache[key]
  }
}
```

key: 검색어 <br/>
value: 추천 검색어, 캐시 만료시간 <br/>
다음과 같은 객체 형태로 캐시를 저장하였습니다.

### 2-3. 캐시를 저장하는 주체는 누가 되어야 하는가?

```ts
// src/hooks/useSuggestions.ts

useEffect(() => {
  if (keyword !== '') {
    setLoading(true)

    const cache = cacheRepository.get(keyword)

    if (cache && cache.expireTime > Date.now()) {
      setSuggestions(cache.data)
      setLoading(false)
    } else {
      suggestionAPI
        .get(keyword)
        .then((res) => {
          setSuggestions(res.data)
          cacheRepository.set(keyword, res.data)
        })
        .catch(() => setError(true))
        .finally(() => {
          setLoading(false)
        })
    }
  } else {
    setSuggestions([])
  }
}, [keyword])
```

처음에는 추천 검색어를 가져오는 커스텀 훅인 [useSuggestions 내부에서 캐시의 유효성을 검사하고, 저장](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-3-7/pull/12)하였습니다. <br />
하지만 useSuggestions 의 관심사는 추천목록을 가져오는 것과 로딩과 에러의 판단입니다. <br />
캐시의 유무와 만료확인, 캐시의 저장까지는 [해당 커스텀 훅의 관심사가 아니라고 생각](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-3-7/issues/14)하였습니다. <br />

```ts
// src/apis/suggestion.ts

const cacheRepository = new CacheRepository<SickObj>()

const getSuggestion = async (searchTerm: string) => {
  const cache = cacheRepository.get(searchTerm)

  if (cache && cache.expireTime > Date.now()) {
    return cache.data
  } else {
    const { data } = await instance.get<GetSuggestionResponse>('sick', { q: searchTerm })
    cacheRepository.set(searchTerm, data)

    return data
  }
}
```

따라서, 추천목록을 서버에서 가져오는 함수인 [getSuggestion에서 캐싱 로직을 수행하도록 변경](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-3-7/pull/15) 하였습니다. <br />
getSuggestion에서는, 추천 검색어를 가져오는 함수 호출시 다음의 동작을 수행합니다.

- 해당 검색어에 대한 캐시가 존재하고, expireTime이 지나지 않았으면 캐시에 저장된 값을 반환함
- 해당 검색어에 대한 캐시가 존재하지 않거나, expireTime이 지났으면, 서버에 해당 검색어로 요청을 보낸 후 결과값을 캐시에 저장하고 반환함

## 3. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

### 3-1. useDebounce hook을 통해 매 입력마다 호출 방지

논의에서는 `useDeferredValue`와 `useDebounce` 두 가지 방법에 대한 의견이 나왔습니다.

간단하게 설명해보자면,
useDeferredValue는 `비동기` 작업의 결과를 지연시켜서, 리소스를 효율적으로 활용하고, 화면이 부드럽게 업데이트 될 수 있도록 도와주고,
useDebounce는 사용자의 입력을 확인해 입력이 연속적으로 발생할 때 delay 동안 입력을 `무시`하다가 delay가 지나면 반영시켜줍니다.

useDeferredValue를 사용한다면 UX 측면에서는 좋은 결과를 보였겠지만,
과제에서 제시한 `API 호출 횟수 줄이기`에서는 useDebounce가 더 적절하다고 판단되어 최종적으로 `useDebounce`를 통해 구현했습니다.

### 3-2. useDebounce 구현 방법

- `useDebounce`로 분리
- 파라미터 : value(string), delay(number)

api를 호출해 결과값(=suggestions)을 리턴해주는 `useSuggestions` 커스텀 훅을 제작하였습니다.

```ts
// src/hooks/useSuggestions.ts

const useSuggestions = (keyword: string) => {
  const [suggestions, setSuggestions] = useState<SickObj[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (keyword !== '') {
      setLoading(true)

      suggestionAPI
        .get(keyword)
        .then((res) => {
          setSuggestions(res.data)
        })
        .catch(() => setError(true))
        .finally(() => {
          setLoading(false)
        })
    } else {
      setSuggestions([])
    }
  }, [keyword])

  return { suggestions, loading, error }
}
```

파라미터로 들어온 value를 일정 시간(=delay)이 지나면 다시 리턴시켜주는 `useDebounce` 커스텀 훅을 제작하였습니다.

```ts
// src/hooks/useDebounce.ts

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value])

  return debouncedValue
}
```

결과적으로 useSuggestions 훅에는 useDebounce 훅으로 delay 된 keyword가 들어가게 됩니다.

```ts
// src/pages/MainPage.tsx

const debouncedValue = useDebounce(keyword, DEBOUNCE_DELAY)
const { suggestions, loading, error } = useSuggestions(debouncedValue)
```

## 4. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

### 4-1. focus를 어디에서 관리할 것인가?

- 추천 검색어 요소에 직접 focus를 이동 하는 방법
- focus는 input에 유지한 채 선택 요소에 스타일을 적용해 focus된 것 처럼 보이게 하는 방법

해당 기능 구현에 있어 팀원들과 위의 두 가지 의견으로 논의를 하였습니다. <br />

focus를 직접 이동하는 방법이 웹 접근성 측면에서 좋지만, 추천 검색어를 탐색할 때 동시에 입력값을 수정할 수 없다는 단점이 있었습니다. <br />
따라서, 추천 검색어 탐색 중 끊기지 않고 검색어를 입력할 수 있는 것이 사용자 경험에 더 좋다고 판단해 input에 focus를 유지하는 방법으로 구현했습니다. <br />

### 4-2. useKeyboardFocus 구현 방법

- onKeyDown 이벤트로 인덱스 핸들링 <br />
- 방향키와 Tab키를 사용해 네비게이션 동작 <br />
- 접근성 고려해 ul > li > button 구조로 구현

`KeyboardEvent`가 발생하면 key에 따라 `currentIndex`상태를 조작하는 커스텀 훅을 구현했습니다.

```ts
// src\hooks\useKeyboardFocus.ts

const [currentIndex, setCurrentIndex] = useState(-1)

...

const changeIndexByKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'ArrowUp' || (e.shiftKey && e.key === 'Tab')) {
    moveToPrev(e);
  } else if (e.key === 'ArrowDown' || e.key === 'Tab') {
    moveToNext(e);
  } else if (e.key === 'Escape') {
    closeAndReset();
  }
};
```

map함수의 index와 선택한 currentIndex를 비교해 현재 선택 요소에 스타일을 적용해 사용자에게 알려줍니다.

```ts
// src\components\Search\SearchResult.tsx

suggestions.map((suggestion: SickObj, index) => {
  return (
    <S.SearchRecentItem
      key={suggestion.sickCd}
      $selectIndex={selectIndex === index + 1}
    >
      ...
    </S.SearchRecentItem>
  );
});
```

### 4-3. 사용 방법

> - `↑`, `Shift + Tab`: 추천 검색어의 이전(위) 요소로 이동합니다. 첫 번째 요소에서 입력 시 추천 검색어 목록을 닫습니다.
> - `↓`: 추천 검색어의 다음(아래) 요소로 선택 이동합니다. 마지막 요소에서 입력 시 동작하지 않습니다.
> - `Tab`: 추천 검색어의 다음(아래) 요소로 선택 이동합니다. 마지막 요소에서 입력 시 목록을 닫고 DOM 구조상 다음에 있는 요소를 focus합니다.
> - `esc`: 추천 검색어 목록을 닫습니다.
