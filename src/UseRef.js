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
import React, {useState, useRef} from "react"

const UseRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    
    
    console.log(countRef); //ref는 하나의 오브젝트이기 때문에, 그 안에는 {current : 0}라는 객체를 가지고 있다. 
    //즉, countRef.current 로 접근할 수 있다. 
    
    const increaseCountState = () => {
        setCount(count + 1);
    };//⑵state를 +1을 해주어 값을 변경시키고 렌더링을 한 후에야 ref가 보인다.

    const increaseCountRef = () => {
        countRef.current = countRef.current +1;
        console.log('Ref: ', countRef.current);//⑴ref는 정상적으로 +1이 되어서 변경되지만 렌더링이 되지 않기에 우리에게 보이는 숫자는 0.
    };
    /*
    ref 장점 : 엄청 자주 바뀌는 값을 넣어둘수 있다! (state에 넣어두면 일일히 렌더링 시키기때문에 성능저하!)
    */

    return(
        <div>
            <p>State : {count}</p>
            <p>Ref : {countRef.current}</p>
            <button onClick={increaseCountState}>state 올리기</button>
            <button onClick={increaseCountRef}>ref 올리기</button>
        </div>
    )
}

export default UseRef