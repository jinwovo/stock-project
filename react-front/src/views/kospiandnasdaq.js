import React , {Component} from "react";
import {useState, useEffect} from "react";
import Plot from "react-plotly.js";

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
  const [kospi_value, setKospi_Value] = useState([{}])
  const [kospi_date, setKospi_Date] = useState([{}])
  const [nasdaq_value, setNasdaq_Value] = useState([{}])
  const [nasdaq_date, setNasdaq_Date] = useState([{}])

  useEffect(() => {
      fetch("/kospiandnasdaq").then(
          res => res.json()
      ).then(
          data => {
            setData(data)
            setKospi_Date(Object.keys(data.KOSPI))
            setKospi_Value(Object.values(data.KOSPI))

            setNasdaq_Date(Object.keys(data.NASDAQ))
            setNasdaq_Value(Object.values(data.NASDAQ))
            // console.log(data)
          }
      )

      }, [])

  return (
    <>
           <div>
                  <Plot data = {[
                        {
                            x: kospi_date,
                            y: kospi_value,
                            type : 'scatter',
                            mode : 'lines+markers',
                            marker : {color : 'red'}
                        }

                    ]}
                          layout={{title : 'KOSPI'}}
                          />
              </div>
              <div>
                  <Plot data = {[
                        {
                            x: nasdaq_date,
                            y: nasdaq_value,
                            type : 'scatter',
                            mode : 'lines+markers',
                            marker : {color : 'blue'}
                        }

                    ]}
                          layout={{title : 'NASDAQ'}}
                          />
              </div>
{/* KOSPI && NASDAQ y축 범위 조절필요 */}
              <div>
                  <Plot data = {[
                      {
                            x: kospi_date,
                            y: kospi_value,
                            type : 'scatter',
                            mode : 'lines+markers',
                            marker : {color : 'red'}
                        },
                        {
                            x: nasdaq_date,
                            y: nasdaq_value,
                            type : 'scatter',
                            mode : 'lines+markers',
                            marker : {color : 'blue'}
                        }

                    ]}
                          layout={{title : 'KOSPI && NASDAQ'}}
                          />
              </div>


 {/*   <div>
            <input type="text" placeholder="Search..." className="search" onChange={e => setSelect(e.target.value)}/>
            <ul className="list">
                {columns.map(column =>
                    <li className="listItem" id={column} key={column} >{column}</li>)}
            </ul>
        </div>*/}
    {/*<form>
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
    </div>*!/}*/}

    </>
  );

}

export default KospiNasdaq;