# UI 공통 컴포넌트 설계


###📌 기술스택
typeScript, react, vite, MUI, zustand, react-hook-form, zod

###📌 개요
MUI 라이브러리 기반의 공통컴포넌트를 FSD(Featured Sliced Design) 아키텍처 패턴을 적용하여 개발함
프리랜서 기간에 경험했던 것을 남기기 위해 제한된 일부분만을 가져와 구현한 것으로 디테일한 UI 및 페이지 기능들이 누락되어 완성도가 떨어짐
따라서 별도의 배포과정은 생략하였고, 소스코드 위주로의 열람을 권장함

###📌 페이지
* main: 각 페이지로 이동할 수 있는 간단한 링크
* login: 로그인 페이지, 유효성 검사 폼, 실제 로그인 api 연동은 생략
* patient, enrollment: 공통 UI 라이브러리를 사용하여 UI 컴포넌트 구성
