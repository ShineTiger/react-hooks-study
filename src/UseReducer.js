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
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>useReducer 은행 웰컴</h2>
      <p>잔고 ?원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button>예금</button>
      <button>출금</button>
    </div>
  );
}

export default UseReducer;
