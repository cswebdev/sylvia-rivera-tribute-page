import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HeaderStyles.css";

function Header() {
   return (
      <Container fluid>
         <Row>
            <Col md={6} sm={12}>
               <div className="header-panel">
                  <div id="header-box">
                     <div id="header-subtitle">
                        <h2>
                           <span className="sub-title-emphasis">queer </span>
                           <span className="sub-title-emphasis">activist</span>
                        </h2>
                        <h2>
                           <span className="sub-title-emphasis">icon</span>
                        </h2>
                     </div>
                  </div>
                  <div id="title">
                     <h1>sylvia rivera</h1>
                  </div>
               </div>
            </Col>
         </Row>
      </Container>
   );
}

export default Header;
