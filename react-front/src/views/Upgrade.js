import React from "react";

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
import githubimage from 'assets/img/githubimage.png';


function Upgrade() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card>
              <div className="header text-center">
                <h4 className="title">GITHUB</h4>
                <a href="https://github.com/jwoo99/stock-project/">
                <img src={githubimage}>
                </img>
                   </a>
                <br></br>
              </div>
              <Table responsive>
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-center">Free</th>
                    <th className="text-center">PRO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Components</td>
                    <td>16</td>
                    <td>115+</td>
                  </tr>
                  <tr>
                    <td>Plugins</td>
                    <td>4</td>
                    <td>14+</td>
                  </tr>
                  <tr>
                    <td>Example Pages</td>
                    <td>4</td>
                    <td>22+</td>
                  </tr>
                  <tr>
                    <td>Documentation</td>

                  </tr>

                  <tr className="last-row">
                    <td></td>
                    <td>
                      <Button
                        className="btn-round btn-fill disabled"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        variant="default"
                      >
                        Current Version
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="btn-round btn-fill"
                        href="http://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react/?ref=lbdrupgrade"
                        target="_blank"
                        variant="info"
                      >
                        Upgrade to PRO
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Upgrade;
