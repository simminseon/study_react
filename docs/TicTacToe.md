# 리액트 자습서 컴포넌트화 해석

이 문서는 리액트 기초지식 + 리액트 자습서를 완료 한 이후에 볼만한 문서입니다.

## 사전학습

어느것을 먼저 해도 상관 없습니다. 이 문서에서는

1. 주요개념 빠르게 읽고 넘기기
2. 자습서 타이핑 하며 따라하기
3. 주요개념 다시 읽기

위 순서를 추천합니다.  
여유가 있다면 자습서를 다시 따라하는것도 좋습니다.

### 리액트 주요 개념

[리액트 주요개념](https://ko.reactjs.org/docs/hello-world.html) 은 리액트의 기본 문법, 개념에 대해 배우는 내용입니다.  
리액트 주요개념을 통해 리액트는 어떻게 동작하는가를 알 수 있습니다.

### 리액트 자습서

[리액트 자습서](https://ko.reactjs.org/tutorial/tutorial.html) 는 리액트를 타이핑 하며 익히는 내용 입니다.  
리액트 자습서를 통해 알고 있던 리액트 기초 지식들이 어떻게 사용되는지 알 수 있습니다.

## 개선된 틱택토

많은 내용을 변경합니다. 이 개선된 틱택토의 목적은 다음과 같습니다.  

1. 클래스 -> 함수형으로 변환
2. 단일 컴포넌트 -> 여러개의 컴포넌트로 변환
3. 상위/하위 구조를 통해 필요한 props만 전달하는 법 배우기
4. hook을 통해 컴포넌트의 상태값을 어떻게 유지하는가
5. 데이터를 추출하고 비교할때 일부러 반복문을 사용하지 않고 배열 함수를 통해 단계별로 추출하는 법

### 구조

상위 Tictactoe 컴포넌트 안에 하위 컴포넌트를 가집니다.

- SquareBoard : 게임 보드판
- Player : 다음 플레이어 표시, 승자 표시
- BoardHistory : 게임이 진행될때마다 생기는 이력을 표시

하위 컴포넌트들도 다시 하위 컴포넌트를 가질 수 있지만, 이 부분은 나중에 다루도록 하겠습니다.

```javascript
import {SquareBoard, Player, BoardHistory} from './children'

function Tictactoe() {
  <div>
    <SquareBoard />
    <Player />
    <BoardHisoty />
  </div>
}
```

### 주요 데이터

- count : 현재 게임 카운트를 나타냅니다. 0을 전달해서 초기값을 설정합니다.
- boardData : 게임판 9개를 배열로 나타낸 값입니다. 데이터에서 게임판 하나의 값은 0-미선택, 1-X, 2-O를 의미합니다.
- boardHistory : 게임판을 진행한 내역에 대해 기록을 남깁니다. 히스토리는 보드 데이터가 통째로 들어가 있으며, 게임이  진행할때마다 그 기록을 가지고 있습니다.

```javascript
  // 초기화 데이터
  const initSquareList = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const [count, setCount] = React.useState(0);
  const [boardData, setBoardData] = React.useState(initSquareList);
  const [boardHistory, setBoardHistory] = React.useState([initSquareList]);
```

### Props의 전달

데이터나 데이터를 특정하는 함수의 전달은 상위 -> 하위로 전달이 됩니다.  
상위의 데이터는 하위에서는 직접 수정할 수 없으며, 상위에서 전달된 특정 함수를 통해 데이터에 변형을 가합니다.  

아래 스크립트는 상위에서 정의된 **boardHistory**와 **setBoardHistory**를 어떻게 다룰지 선언한 **handleMoveHistory**를 **BoardHistory** 에 전달합니다.

```javascript
  const [boardHistory, setBoardHistory] = React.useState([initSquareList]);

  const handleMoveHistory = (historyIndex) => {
    const selectedHistoryData = boardHistory.find((history, index) => index === historyIndex);
    setBoardData(selectedHistoryData);
  };

  <BoardHistory boardHistory={boardHistory} onClick={handleMoveHistory} />
```

**BoardHistory**는 다음과 같이 **Props**를 받습니다.  
배열로 된 **boardHistory**를 확인하고 **map**을 이용해 이력 전체의 리스트를 만듭니다.  
이력별로 버튼 이벤트를 설정하고 버튼의 텍스트도 설정합니다.  
각 li 별로 **key**를 전달해 나중에 필요한 부분만 렌더링 할 수 있도록 합니다.

```javascript
export function BoardHistory({ boardHistory, onClick }) {
  const boardList = boardHistory.map((board, index) => {
    const handleHistory = () => {
      onClick(index);
    };
    const buttonText = index ? `back to history => ${index}` : `Go to game start`;
    return (
      <li key={index}>
        <button onClick={handleHistory}>{buttonText}</button>
      </li>
    );
  });
  return <ol>{boardList}</ol>;
}
```

### 데이터의 처리

상위에서 하위로 **Props**를 전달하는 과정에서 눈여겨 볼 부분은  
하위 컴포넌트에서는 상위에서 넘어온 데이터를 변형하지 않는다는 점 입니다.  
**map**을 써서 데이터를 가공하지만 원본 **boardHistory**는 그대로 남아 있습니다.  
**BoardHistory** 컴포넌트는 순수하게 데이터를 전달받은 데이터를 표시, 이벤트를 설정하고 본인의 업무가 끝납니다.  
**boardHistory**데이터는 변경될 수 있지만, 어떻게 변경되는지는 **BoardHistory**컴포넌트의 관심사가 아니고 데이터 변경을 직접 해서도 안됩니다.  

아래 예는 데이터를 변경하는 권한이 어디에 있는지 명확하게 나타냅니다.

```javascript

function Parent() {
  const [userList, setDataList] = React.useState();

  const handleDeleteDataList = (index) => {
    setDataList(dataList => dataList.filter((data, index) => index !== data))
  }

  return (
    <div>
      <Child userList={userList} onClick={handleSetDataList} />
    </div>
  )
};
```

```javascript
function Child({dataList, onClick}) {
  const buttonList = dataList.map((data, index) => {
    const handleClick = () => {
      onClick(index)
    }
    return (
      <li key={data.id}>
        <span>{data.name}</span>
        <button onClick={handleClick}>{'삭제'}</button>
      </li>
    )
  })
};
```

**Child**의 역할은 **Parent**에서 내려받은 **userList**를 표시하며 이름과 옆에 삭제 버튼을 표시하는 일 입니다.  
기능상으로는 **Child**쪽에서 삭제가 이뤄지기 때문에 **userList**를 직접 삭제해야될 것 같지만 그렇지 않습니다.  
데이터를 실제로 삭제하는 부분 **handleDeleteDataList**함수는 **Parent**에서 정의가 되어있고, **Child**는 해당 함수를 **onClick**으로 전달받아 **handleClick**에서 인덱스만 넣어주는 역할을 합니다.  

이런 구조에서는 **Parent**는 **Child**가 리스트와 삭제 버튼을 어떻게 표시하고 적용하는지 알지 못하고,  
**Child**는 위에서 누가 데이터를 주는지, 어떤 데이터가 넘어오는지, 실제 삭제는 어떤식으로 이뤄지는지 상관하지 않습니다.  
각자의 역할에만 충실하며 전달하기로 한 데이터를 전달하고 형식에 맞는 데이터를 받아 표시하면 그만입니다.

### 실제 데이터의 흐름

실제 데이터는 어떻게 전달되고 수정되는지 확인 해보겠습니다.  

#### 주요 3가지 데이터

```javascript
  const [count, setCount] = React.useState(0);
  const [boardData, setBoardData] = React.useState(initSquareList);
  const [boardHistory, setBoardHistory] = React.useState([initSquareList]);
```

```javascript
  const [boardData, setBoardData] = React.useState(initSquareList);

  const handleSelectedBoard = (selectedIndex) => {
    // 1
    const selectedBoardData = boardData.map((data, index) =>
      index === selectedIndex ? player : data
    );
    setBoardData(selectedBoardData);

    // 2
    setCount((count) => count + 1);

    // 3
    const selectedHistoryData = boardHistory.filter((data, index) => index <= count);
    setBoardHistory([...selectedHistoryData, selectedBoardData]);
  };

  <SquareBoard selectedBoard={boardData} onClick={handleSelectedBoard} />
```

보드 현황을 나타내는 **boardData**는 **SquareBoard**에 전달됩니다.  
**SquareBoard**는 해당 데이터를 받아 게임 진행사항을 표시하고 클릭되면 기록하는 이벤트를 수행합니다.
handleSelectedBoard는 게임 변경사항이 일어났을때 여러가지 일을 합니다.  

1. 변경사항을 **boardData**에 기록합니다.
2. 게임 카운트를 1회 증가합니다. 이 카운트는 다음 플레이어의 차례, 게임 기록등에 사용됩니다.
3. 변경된 내용을 **boardHistory**에 기록합니다. 게임이 진행될때마다 기록을 확인하고 되돌리기 위함입니다.

#### 플레이어 표시

```javascript
  const whoIsWinner = checkWinner(boardData);
  const player = (count % 2) + 1;
  const isWin = whoIsWinner > 0;

  <Player player={player} isWin={isWin} />
```

플레이어 컴포넌트는 역할이 단순합니다.  
플레이어 데이터와 승리여부를 전달받아 다음 플레이어 표시 혹은 승자를 표시합니다.

#### 게임 이력

```javascript
  const [boardHistory, setBoardHistory] = React.useState([initSquareList]);

  const handleMoveHistory = (historyIndex) => {
    // 1
    const selectedHistoryData = boardHistory.find((history, index) => index === historyIndex);
    // 2
    setBoardData(selectedHistoryData);
    // 3
    setCount(historyIndex);
  };

  <BoardHistory boardHistory={boardHistory} onClick={handleMoveHistory} />
```

보드의 이력을 나타내는 **boardHistory**는 **BoardHistory**에 전달됩니다.  
**BoardHistory**컴포넌트는 데이터를 받아 이력단위로 버튼을 표시하고, 해당 버튼을 클릭하면 이력으로 돌아가도록 합니다.  
이력은 확인만 해야되며, 이력확인 후 게임이 거기서 다시 진행되면 그때 이력을 수정합니다.

1. 버튼 클릭시 선택된 이력의 인덱스를 확인합니다.
2. 확인된 데이터를 현재 게임 데이터로 갱신합니다.
3. 카운트를 이력의 인덱스로 변경합니다.

위 과정을 거쳐 이력을 클릭하면 해당 이력으로 돌아가는 기능이 적용됩니다.

### 컴포넌트를 분할하는 이유

이정도의 간단한 프로그램을 예로 들면 항상 컴포넌트를 꼭 분할해야 되나? 라는 의문이 생깁니다.  

#### 단일 컴포넌트 구현

- 데이터의 전달이 없어 간편하게 코딩할 수 있다.
- 관심사가 엮여있어 사이드 이펙트가 크다.
- 상태관리 라이브러리의 사용이 크게 필요치 않아 단순하다.
- 어플리케이션이 대형화 될 수록 단일 컴포넌트로는 구현이 힘들다.

#### 분할 컴포넌트 구현

- 컴포넌트별로 필요 데이터, 데이터 관련 함수들을 전달해야 한다.
- 구조는 조금 복잡하지만, 관심사가 분리되어 있어 기능 구현 자체는 덜 복잡해진다.
- 관심사가 분리되어 있어 사이드 이펙트가 크지 않다.
- 어플리케이션이 커지고 복잡도가 증가할수록 컴포넌트 분할의 중요성이 증가한다.
- 컴포넌트가 분할되며 데이터의 이동이 복잡해져 상태관리 라이브러리들에 의존해야 한다(Redux. Mobx, etc)

## 정리하며

각 컴포넌트가 실제로 어떻게 동작하는지는 코드를 통해 직접 확인해야 합니다.  
이 문서에서는 각 컴포넌트별 주요 데이터와 데이터의 흐름을 살펴봤습니다.  

컴포넌트를 나누는것은 어려운 일입니다.  
너무 큰 단위로 작업하면 재사용성이나 사이드 이펙트가 너무 크고,  
너무 작은 단위로 잘게 쪼개서 작업하면 구조가 복잡해지며 불필요한 구조 비용이 발생합니다.  

큰 틀에서 컴포넌트는 관심사별로 나눠 작업해야 하며, 그 단위는 개발 환경과 경험을 통해 결정해야 합니다.  
구조가 낯설고 복잡하게 다가오겠지만, 익숙해질 수 있도록 꾸준한 개발 경험이 필요합니다.