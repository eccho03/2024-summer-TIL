# Study day 1
---
- “이것이 코딩 테스트다”  부록 A - 코딩테스트를 위한 파이썬 복습
- “이것이 코딩 테스트다” Ch3. 그리디 알고리즘 이론 공부
- “이것이 코딩 테스트다” Ch3. 그리디 알고리즘 실전 문제 1 ~ 4
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

# Study day 2
---
- "이것이 코딩 테스트다" Ch4. 구현 이론 공부
- "이것이 코딩 테스트다" Ch4. 구현 실전 문제 1~4
- "이것이 코딩 테스트다" Ch5. DFS/BFS 이론 공부
- "이것이 코딩 테스트다" Ch4. DFS/BFS 실전 문제 1~4
- “한입 크기로 잘라 먹는 리액트” Ch5. props
- “한입 크기로 잘라 먹는 리액트” Ch5. event 처리

## 구현
ex1. 특정 소수점 자리까지 출력해야 하는 문제, 문자열이 입력으로 주어졌을 때 한 문자 단위로 끊어서 파싱해야 하는 문제 등
ex2. 완전 탐색 (모든 경우의 수를 주저 없이 다 계산하는 해결 방법), 시뮬레이션 (문제에서 제시한 알고리즘을 한 단계씩 차례대로 직접 수행)

*메모리 접근*
- 리스트 크기가 1,000만 이상인 리스트는 메모리 용량 제한으로 풀 수 없음.
- 1초에 2천만 번 연산을 수행한다고 생각하면 됨 (파이썬 기준)
- PyPy는 파이썬3과 동일한 문법을 제공하며, 실행 속도가 더 빠르므로 코딩 테스트 환경이 Pypy3을 지원한다면 이를 활용하기.

1. 상하좌우 : 이동 계획은 input().split()을 사용해 한 번에 입력받기
2. 시각 : 매 시각을 문자열로 바꿔 문자열에 '3'이 포함되었는지 검사 (ex. 03시 20분 35초라면 '03'+'20'+'35'라는 문자열에 3이 포함됐는지 검사함)
3. 왕실의 나이트 : column = int(ord(input_data[0] - int(ord('a')) + 1 -> ord : 특정 한 문자를 아스키 코드 값으로 변환해주는 함수
4. 게임 개발
   - 방향을 설정해 이동하는 문제 유형에서는, dx와 dy라는 리스트로 방향을 정함 (ex. dx[0], dy[0]만큼 더하기)
   - 맵을 0으로 초기화 : d = [[0] * m for _ in range(n)
   - 전체 맵 정보를 입력 받기
     for i in range(n):
         array.append(list(map(int, input().split())))
   - 코딩 테스트에서는 예외처리를 고려하지 않고 짜는 걸 목표로 함.

## DFS / BFS
*사전 지식*
- 스택 : 기본 리스트에서 append()와 pop() 메소드 사용
- 큐 : from collections import deque ; queue = deque() 사용
- 재귀 함수

*DFS*
- 인접 행렬 : 2차원 배열로 그래프 연결관계 표현
- 인접 리스트 : 리스트로 그래프 연결관계 표현 -> 파이썬에서는 단순히 2차원 리스트를 사용하여 append 해주면 된다.
  ㄴ 연결된 정보만을 저장해 메모리를 효율적으로 사용함. 정보 얻는 속도는 느림.
- 알고리즘 : 시작 노드를 스택에 삽입 후 방문 처리함. -> 최상단 노드에 방문하지 않은 인접 노드가 있으면 그 인접 노드를 스택에 넣고 방문 처리함. 없으면 최상단 노드 꺼내기

*BFS*
- 시작 노드를 큐에 삽입 후 방문 처리함. -> 큐에서 노드를 꺼내 해당 노드의 인접 노드 중 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리함.

1. 음료수 얼려 먹기 : (DFS) 특정 지점의 주변 상, 하, 좌, 우를 살펴본 뒤 주변 지점 중에서 값이 0이며 방문하지 않은 지점이 있으면 해당 지점을 방문한다. -> 방문 지점에서 다시 상, 하, 좌, 우를 살펴보며 다시 방문 진행. 
2. 미로 탈출 : (BFS 이유 : 시작 지점에서 가까운 노드부터 차례대로 그래프의 모든 노드를 탐색하기 때문에, 탈출하기 위한 최소한의 경로를 찾을 수 있다.) (1, 1) 지점에서부터 BFS를 수행하여 모든 노드의 값을 거리 정보로 넣는다.
   popleft : 제일 앞의 요소를 삭제함.
   
- props에서 부모 컴포넌트에서 자식 컴포넌트로 전달하는 것이지, 반대는 불가능함.
- 이벤트 핸들러 인자 전달 시 이름만 전달하면 됨. 함수처럼 x
- SyntheticBaseEvent (합성 이벤트 객체) : 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태

# Study day 3
---
- "이것이 코딩 테스트다" Ch6. 정렬 이론 공부
- "이것이 코딩 테스트다" Ch6. 정렬 실전 문제 1~4
- 선택 정렬 : 매번 가장 작은 것을 선택하여 앞으로 보냄
    swap : 두 변수의 위치를 변경하는 작업(arr[0], arr[1] = arr[1], arr[0])
    시간복잡도 O(n^2)로 느림
- 삽입 정렬 : 데이터를 적절한 위치에 삽입함 (데이터가 거의 정렬 돼있을 때 효율적임)
- 퀵 정렬 : 기준(pivot)을 설정하고 큰 수와 작은 수를 교환하고 리스트를 반으로 나누는 방식
    pivot 선택 : 리스트의 1번째(가장 대표적)
    시간복잡도 O(nlogn)
- 계수정렬 : 정수 형태일 때, 데이터의 크기 범위가 제한되어있을 때만 사용 가능함. -> 각 데이터가 몇 번 등장했는지 횟수 기록 후 그 횟수만큼의 인덱스를 차례로 출력해준다.
    시간복잡도 O(N + K), 공간복잡도 O(N + K) -> 데이터의 크기가 한정되어 있고, 데이터의 크기가 많이 중복되어 있을수록 유리함.
-   만약에 데이터의 특성을 파악하기 어렵다면 퀵 정렬을 이용하는 것이 유리함. (일반적인 경우 평균적으로 빠르게 동작하기 때문에)

- 파이썬의 정렬 라이브러리 : sorted() -> merge sort 기반 (O(nlogn))
    ex1) result = sorted(arr) 혹은 arr.sort()
    ex2) key 활용 (함수를 사용해 정렬의 기준을 만듦)
          def setting(data) :
            return data[1]
          result = sorted(array, key=setting)
          print(result)
- 정리) 별도 요구사항이 없을 때 : 기본 정렬 라이브러리 사용 / 데이터의 범위가 한정되어 있으며 더 빠르게 동작해야 할 때 : 계수 정렬 활용
- 유형) (1) 정렬 라이브러리로 풀 수 있는 문제 / (2) 정렬 알고리즘의 원리에 대해서 물어보는 문제 / (3) 더 빠른 정렬이 필요한 문제

1. 위에서 아래로 : 모든 수가 100,000 이하이면 어떤 정렬 알고리즘을 사용하든 관계없다.
2. 성적이 낮은 순서로 학생 출력하기 : 학생 정보를 (점수, 이름)으로 묶은 뒤에 점수를 기준으로 정렬을 수행
   arr.append((input_data[0], int(input_data[1])))
   arr.sorted(arr, key=lambda student: student[1]) -> key 인자에 함수를 넘겨주면 우선순위가 정해짐.
3. 두 배열의 원소 교체 : 매번 배열 A에서 가장 작은 원소를 골라서 배열 B에서 가장 큰 원소와 교체. 단, 전자가 후자보다 작아야 교체하기. (K번 반복)
