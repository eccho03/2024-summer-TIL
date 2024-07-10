# Study day 1
---
- “이것이 코딩 테스트다”  부록 A - 코딩테스트를 위한 파이썬 복습
- “이것이 코딩 테스트다” Ch2. 그리디 알고리즘 이론 공부
- “이것이 코딩 테스트다” Ch2. 그리디 알고리즘 실전 문제 1 ~ 4
- “한입 크기로 잘라 먹는 리액트” Ch5. react 실습을 위한 세팅
- “한입 크기로 잘라 먹는 리액트” Ch5. react component, jsx로 UI  표현

## 그리디 알고리즘
그리디 알고리즘은 *현재 상황에서 지금 당장 좋은 것만 고르는 방법*이다.
그리디 알고리즘의 경우 문제 출제의 폭이 매우 넓어 단순 암기로 모든 문제를 대처하기 어렵다.
이 유형은 창으리력, 문제를 풀기 위한 최소한의 아이디어를 떠올릴 수 있는 능력을 요구한다. 
어떤 문제를 만났을 때, 바로 문제 유형을 파악하기 어렵다면 그리디 알고리즘을 의심하면 된다.
1. 거스름돈 문제 : 가장 큰 화폐 단위부터 돈을 거슬러 준다.
2. 큰 수의 법칙 : 가장 큰 수를 K번 더하고 두번째로 큰 수를 한 번 더하는 연산을 반복한다.
3. 숫자 카드 게임 : 각 행마다 가장 작은 수를 찾고 그 수 중에서 가장 큰 수를 찾는다.

## React Ch 5.
$ npm create vite@latest 명령어를 사용해서 새로운 react 앱을 만듦
$ npm i (혹은 npm install)로 package에 설치되어있는 dependency를 다 설치
$ npm run dev로 브라우저 가동

- 자식 컴포넌트, 부모 컴포넌트,... 계층을 이루며, root 컴포넌트는 보통 App으로 세팅함
- jsx는 확장된 자바스크립트 문법으로, 함수가 html 태그를 return하는 것을 허용해줌 (js에는 문법적 오류로 판단함.)

* jsx 주의 사항
  1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
  2. 숫자, 문자열, 배열 값만 랜더링 된다.
  3. 모든 태그는 닫혀있어야 한다.
