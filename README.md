# 🌍 SEOUL-CYBER-PUNK

🚀 service-link : [SEOUL-CYBER-PUNK 배포링크](http://35.76.79.228:8300/)

## 🔗 1️⃣ 서비스 소개

시각적으로 있는 그대로의 서울을 느낄 수 있는 아카이빙 사이트 제작

- **프로젝트 방향성**

  ▶️ 서울 관광 이라는 키워드 보다는 **"힙한** **서울 구경"** 이라는 키워드를 가져가기

  ▶️ 텍스트 위주의 정보 제공보다는 **시각적**으로 느낄 수 있도록 하기

  ▶️ 기존의 관광 홍보 사이트와 달리 웹사이트의 전체적인 컨셉을 **뉴트로**를 겨냥한 세기말 감성 -**사이버펑크**-Y2K 로 가져가기

- **기존 웹사이트와의 차별점**

  💬 관광 정보 제공 보다는 서울 여행을 할지 말지 고민하는 사람들에게 시각적으로 홍보한다.

  💬 코로나로 인해 관광이 어려운 상황에서 서울 감성을 느낄 수 있도록 한다.

  💬 장소 명소 별로 정보 제공 보다는 이미지화 시키기 (비주얼, 이미지 아카이빙) + 아주 간단한 정보

## 🔗 2️⃣ 서비스 주요 사항

| 페이지 | 주요 내용                                                                |
| ------ | ------------------------------------------------------------------------ |
| Home   | 사이트의 첫 페이지로 서울의 위치와 주요 도시 소개                        |
| About  | 서울의 day & night 과 old & new 라는 4가지 무드를 표현한 갤러리 아카이빙 |
| Spot   | 서울 명소들을 다양한 카테고리별로 세부적인 위치와 정보 제공              |
| Review | 서울 여행을 다녀온 외국인들의 유투브 및 블로그 후기 정보 제공            |

## 🔗 3️⃣ 기술스택

- Main Language

  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

- FE

  <img src ="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"/> <img src ="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src ="https://img.shields.io/badge/Youtube API-FF0000?style=for-the-badge&logo=Youtube&logoColor=white">

- BE

    <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
  <img src="https://img.shields.io/badge/mongoose-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">  <img src="https://img.shields.io/badge/AmazonS3-569A31?style=for-the-badge&logo=amazonS3&logoColor=white"/>

## 🔗 4️⃣ 팀원소개

| 이름      | 담당업무                    |
| --------- | --------------------------- |
| ✨ 경지윤 | HOME, SPOT (풀스택 개발)    |
| ✨ 김세희 | ABOUT, REVIEW (풀스택 개발) |
| 🙋🏻‍♀️ 이예나 | UX/UI 디자이너              |

## 🔗 5️⃣ 이슈 및 개선사항

- 대용량 이미지 관리 이슈

  - 디자이너 지정한 100장 이상의 고화질 이미지를 가공해서 정보를 제공해야했음
  - 프로젝트 내부에 이미지를 자체적으로 가지고있기에는 다소 무리가 있다고 판단하여 s3를 도입하여 관리자 페이지를 따로 제작하여 이미지 업로드 후 해당 url 주소와 가공할 정보를 함께 DB 저장하였음.

- react-query 도입

  - about / spot / review 페이지 비동기 api 호출로 페이지를 이동할때마다 로딩 발생
  - 사용성을 향상시키기 위해 데이터를 캐싱하여 상태를 관리하는 react-query 도입

- 배포

  - 배포 후 외부 api 를 사용한 유투브 부분이 timeout 으로 503 에러 발생
  - heroku 특성상 외부 api 를 사용하여 데이터를 가공할 경우 백그라운드 작업이 필요하다고함(redis)
  - 관리자 페이지에 따로 검색 키워드를 통해 유투브 데이터를 업데이트 하여 DB에 반영하도록 수정

- 디자이너와 협업

  - open API 를 사용으로 특정 사진을 사용할 수 없어 디자이너와 협의해야하는 이슈 발생
  - 디자이너가 제시한 마크업 관련 피드백을 꾸준히 받음

- 추후 react-query의 useInfiniteQuery 로 무한스크롤 구현
  - api 호출시에 받아오는 데이터가 클수록 렌더링이 느려짐
  - 이를 개선하기 위해 데이터의 갯수를 제한하여 받아오는 무한 스크롤이나 페이지네이션이 필요하다고 판단

## 🔗 6️⃣ 프로젝트 미리보기
