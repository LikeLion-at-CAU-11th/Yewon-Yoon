# 멋쟁이사자처럼 프론트엔드 9주차 세션
### React useState 이용해서 다양한 화면 구성하기
## 주요 개념 키워드
### 1. React 컴포넌트 분리, 디자인 패턴, 재사용성
### 2. props, 읽기전용 데이터, 부모 컴포넌트, 자식 컴포넌트
### 3. state, 리렌더링, 클래스형 컴포넌트, 함수형 컴포넌트
### 4. Lifycycle, 함수형 컴포넌트, React Hooks의 등장 배경
### 5. React Hooks, 생명주기, state 관리
### 6. useState, 클로저, 렉시컬 환경, 실행 컨텍스트, 리렌더링, 비동기
### 7. React 불변성, 원시형, 참조형, Spread Operator


## 실습
### API SPEC > Notion 및 세션 PDF 참고
### 아기사자 정보 렌더링
<li> FilterButton 클릭 시, 알맞은 API 호출해 데이터 패칭 후, JSX로 렌더링하기 </li>
<li> API SPEC 의 request type 및 response type 잘 확인하기 </li>
<li> 컴포넌트 분리 시, 재사용성 판단하기 </li>
<li> 자식 컴포넌트에서 state 변경시 부모로부터 setState를 넘겨 받기 </li>
<li> useState 선언 위치를 잘 판단하기 </li>


## 과제1. 아기사자 정보 렌더링
### 필수) Pagination 2가지 방식으로 구현하기
<li> 전체 리스트 (28개 데이터) 받아와 클라이언트단에서 슬라이싱하여, PageButton 컴포넌트 클릭 시 알맞는 데이터 렌더링 </li>
<li> 페이지별 데이터 각각 받아와, PageButton 컴포넌트 클릭 시 알맞는 데이터 렌더링 </li>
<img width="1680" alt="image" src="https://github.com/LikeLion-at-CAU-11th/FE-SESSION/assets/64634970/ab60d2cb-e5ce-4a72-9316-c195d55a8158">


### 필수) FilterButton 클릭 여부 표시
<li> Styled Component와 useState 이용하기 </li>

### 선택) SORT 버튼 클릭 시, UserCard 이름 오름차순으로 정렬

## 과제2. LionTestModal 완성
### 필수
<li> /api/liontest/question API로 질문 + 선지 불러오기 </li>
<li> 한 페이지에 문제 하나씩 보여주고 선지 선택 시 선택 여부 표시하기 (아래 캡쳐본은 선택 여부 표시되지 않은 상태입니다. 하셔야 해요 !) </li>
<li>  다음 버튼 클릭 시 답변 기록 및 다음 페이지로 이동 </li>
<li> 결과보기 버튼 클릭 시, /api/liontest/result API POST 요청 </li>
<li> 결과 화면에 "맞은 개수 / 전체 문제 수", 틀린문제, 정답 렌더링 </li> 

<img width="1680" alt="image" src="https://github.com/LikeLion-at-CAU-11th/FE-SESSION/assets/64634970/b6b4b341-773e-4b1a-ab37-63e4ef69016a">
<img width="1680" alt="image" src="https://github.com/LikeLion-at-CAU-11th/FE-SESSION/assets/64634970/fc3c67d4-5d47-4169-b33d-087a9e324f0a">
<img width="1680" alt="image" src="https://github.com/LikeLion-at-CAU-11th/FE-SESSION/assets/64634970/36f690d4-b548-43df-81af-22312c5e97ac">
<img width="1680" alt="image" src="https://github.com/LikeLion-at-CAU-11th/FE-SESSION/assets/64634970/c753fb5e-2703-4b47-a6f8-bd58df779d9d">
