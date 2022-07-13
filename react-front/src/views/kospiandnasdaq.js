import React from "react";
import {useState, useEffect} from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";


function KospiNasdaq() {

  const [data, setData] = useState([{}])

  useEffect(() => {
      fetch("/kospiandnasdaq").then(
          res => res.json()
      ).then(
          data => {
            setData(data)
            console.log(data)
          }
      )

      }, [])

  return (
    <>
    {/*<div>
            <input type="text" placeholder="Search..." className="search" onChange={e => setSelect(e.target.value)}/>
            <ul className="list">
                {columns.map(column =>
                    <li className="listItem" id={column} key={column} >{column}</li>)}
            </ul>
        </div>
    <form>
        <div className="container p-5">
            <input type="text" list="column" placeholder="select"/>
            <datalist id="column">
            {(typeof columns === 'undefined')? (
                <p>Loading...</p>
            ) : (columns.map(column =>
                    <option id="col" key={column} >{column}</option>)
            )}
            </datalist>
            <button type="submit">조회</button>
        </div>
    </form>
    <div>
        <JsonToTable json={data.tips} />
    </div>*/}

    </>
  );

}

export default KospiNasdaq;
