# 프리온보딩 7팀 Search Clinical Trial

![logo](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/93248349/7ccac592-cabe-4652-8df8-53ee7b7814b1)

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

## 배포 링크 및 데모 영상

배포 링크: 

배포는 `???` 서비스를 사용했습니다.

## 아키텍쳐

### 디렉토리 구조

```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📂Error
 ┃ ┗ 📂Layout
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂store
 ┣ 📂styles
 ┃ ┣ 📂base
 ┃ ┗ 📂constants
```

### 페이지 구성

## Best Practice 논의

### 1. 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
(검색창 컴포넌트 설계)

### 2. API 호출별로 로컬 캐싱 구현
(API 로컬 캐싱)

### 3. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
(Input의 매 입력마다 API호출을 방지하기)

### 4. 키보드만으로 추천 검색어들로 이동 가능하도록 구현
(키보드로 검색결과 이동)

### 5. HTTP 클라이언트 객체 관리 인스턴스, API함수 작성 & 백엔드 설정


