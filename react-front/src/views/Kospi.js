import React from "react";
import {useState, useEffect} from "react";
import Plot from "react-plotly.js";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Kospi() {

  // const [상태 값 저장 변수, 상태 값 갱신 함수] = useState(상태 초기값);
  // 변수 값 바꾸려면 setState(변경할 값); 사용 => state가 변경될때마다 화면 업데이트됨
  const [data, setData] = useState([{}])

  // useEffect(함수, deps - 함수 실행 조건) : React Component가 렌더링 될때마다 특정 작업(Side effect)를 실행할 수 있도록 하는 리액트 hook.
    // side effect는 비동기처리되어야할 부분
    // useEffect 안에 데이터는 제일 처음 한번만 실행

  useEffect(() => {

      // fetch('api 주소').then(res => res.json()).then(res => { 데이터 응답 받은 후의 로직 });
      // fetch는 비동기 함수
      fetch("/stocks_kospi").then(
          res => res.json()
      ).then(
          data => {
            setData(data)
            // console.log(data.tips.day)
              // console.log(data)
          }
      )

      }, []) // deps가 빈 배열[]이면 맨 처음 렌더링될때만 실행

/*const keys = Object.values(data)
    console.log(keys)

const idx = Object.values(keys[0])
    console.log(idx)
const value = Object.values(keys[2])
    console.log(value)*/

  return (
    <>

    <div>
        {/*<Plot data={[{
            x : idx,
            y : value,
            type : 'scatter'
        }]} />*/}
    </div>
    </>
  );
}

export default Kospi;
