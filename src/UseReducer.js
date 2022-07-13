/*
Reduer는 state를 업데이트 시켜준다. 
이때 요청을 보내는 주체를 Dispatch 라고 하며, 요청은 Action이라고 한다. 
Action을 받은 주체가 Reducer이고, 이것이 State를 업데이트 시킨다. 
reducer - state를 업데이트 하는 역할 (은행)
dispatch - state 업데이트를 위한 요구
action - 요구의 내용
*/

import { useState, useReducer } from "react";

function UseReducer() {
  //첫번째는 state, 두번째는 action(요구의 내용)을 받는다.
  const reducer = (state, action) => {
    console.log("reducer 실행");
  };

  const [number, setNumber] = useState(0);

  //useReducer는 배열을 반환해준다. (useState와 비슷)
  //useReducer가 만든 state인 money는 reducer 함수로만 수정이된다. 그리고 reducer는 useReducer의 인자가된다. reducer를 통해서 state를 수정하고 싶을 때 dispatch를 부른다.
  //dispatch를 부르면 reducer가 호출이 되는데 이때 두번째 매개변수인 action이 전달되고, state를 변경시킨다.
  const [money, dispatch] = useReducer(reducer, 0); //첫번째 매개변수는 reducer, 두번째인자는 money의 초기값

  return (
    <div>
      <h2>useReducer 은행 웰컴</h2>
      <p>잔고 {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch();
        }}
      >
        예금
      </button>
      <button>출금</button>
    </div>
  );
}

export default UseReducer;
