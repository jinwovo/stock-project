import React from "react";
import {useState, useEffect} from "react";
// npm install react-spinners

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Plot from "react-plotly.js";

function Nasdaq() {

    // 일별(nasdaq_day), 월별(nasdaq_month) 나스닥

  const [data, setData] = useState([{}])
  const [nasdaq, setNasdaq] = useState([{}]);
  const [nasdaq_month, setNasdaq_Month] = useState([{}]);
  const [nasdaq_day, setNasdaq_Day] = useState([{}]);

  useEffect(() => {
      // setLoading(true)
      setTimeout(() => {
          // setLoading(false)
      }, 8000);
      fetch("/stocks_nasdaq").then(
          res => res.json()
      ).then(
          data => {
            setData(data)
            setNasdaq(Object.values(data.nasdaq))
            setNasdaq_Month(Object.values(Object.values(data.nasdaq_month)))
            setNasdaq_Day(Object.values(Object.values(data.nasdaq_day)))
              // console.log(data)
// console.log(Object.values(nasdaq_month[1]))
// console.log(Object.values(nasdaq_month[3]))
          }
      )

      }, [])

console.log(Object.values(nasdaq_month[3]))

    const transformData = (data) => {
        let plot_data = [];
        let x = [];
        let y = [];

        /*[data].map((each, idx) => {
            /!*x.push(Object.values(each[3]))
            y.push(Object.values(each[1]))*!/
// console.log(each)
//             console.log(Object.values(each[3]))
               /!* Object.values(each).map((item, index) => {return console.log(Object.values(item))})*!/
        })*/
        // console.log(plot_data)
        return plot_data
    }

  return (
    <>
        {/*<div>
            {loading ? <SyncLoader color="rgba(139, 143, 160, 1)" /> : null}
        </div>*/}
        {/*<div>
            <input list="name" type="text" placeholder="Search..." className="search" />
            <datalist id="name">
            {Object.values(name).map((name) => <option key={name}>{name}</option>)}
            </datalist>
        </div>*/}

        <div>
                  {/*<Plot data = {[
                      {
                            x: transformData(nasdaq_month)['x'],
                            y: transformData(nasdaq_month)['y'],
                            type : 'scatter',
                            mode : 'lines+markers',
                            marker : {color : 'red'}
                        }
                    ]}
                          layout={{title : 'Month_NASDAQ', responsive : false}}
                          />*/}
              </div>
    </>
  );
}

export default Nasdaq;
