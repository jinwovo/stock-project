import React from "react";

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
import {useState, useEffect} from "react";


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

    </>
  );
}

export default KospiNasdaq;
