/*
useRef는 {current:value} 처럼 생긴 ref object를 반환해 준다. 
ref obj는 컴포넌트가 계속 랜더링이 되어도 unMount가 되기 전까지 값을 유지한다. 

이 특징을 이용해 두가지 상황에서 이용이 가능한데,
1) ref는 어떠한 값을 저장하는 공간으로 쓰인다
: [state의 변화 -> 렌더링됨 -> 컴포넌트 내부변수 초기화] state는 변경되면 재 렌더링되지만
  [ref의 변화 -> 렌더링X -> 변수들의 값이 유지됨] ref는 변경되어도 렌더링이 되지 않고 변수값이 유지된다. 또한,
  [state의 변화 -> 렌더링 -> 그래도 Ref의 값은 유지됨]
  즉 불필요한 렌더링을 막을 수 있음 + 컴포넌트가 렌더링이 되어도 ref는 그대로 있음
  => 변경시 렌더링을 발생시키지 말아야 하는 값을 다룰 때 편리하다. 

2) fef를 통해 DOM요소에 접근 할 수 있다(focus() 이용), (JS의 querySelector()와 비슷하다.)
*/
import React, {useState} from "react"

const UseRef = () => {
    const [count, setCount] = useState(0);

    const increaseCountState = () => {
        setCount(count + 1);
    };

    return(
        <div>
            <p>State : {count}</p>
            <button onClick={increaseCountState}>state 올리기</button>
        </div>
    )
}

export default UseRef