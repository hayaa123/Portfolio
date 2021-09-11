/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/Screenshot_2021-09-11 215313.png";
import SalamonCokie from "assets/img/theme/salamon_cokie.png"
import BussMall from "assets/img/theme/screnshoot of buss mall .png"
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                      Technologies I am excited about{" "}
                        {/* <span>completed with examples</span> */}
                      </h1>
                      <p className="lead text-white">
                        excited in web development latest technologies and artificial intellegent and its 
                        application that make the life easier and sometime safer for us humans 
                      </p>
                      <div className="btn-wrapper">
                      
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
  <            div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>           
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={cardImg}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583, 0,50"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,2 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Travel and byond
                      </h4>
                      <p className="lead text-italic text-white">
                        website to giude the user where he can travel next by giving him top 12 destenations 
                        so he can vote or see more about each country in the site
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={SalamonCokie}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583, 0,50"
                        />
                        {/* <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,2 583,95 683,0 0,95"
                        /> */}
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Salamon cookies 
                      </h4>
                      <p className="lead text-italic text-white">
                        website to display salamon cookie store goods and have a helper 
                        function for marketing analysis 
                      </p>
                    </blockquote>
                  </Card>
                </Col>
              </Row>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={BussMall}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583, 0,50"
                        />
                        {/* <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,2 583,95 683,0 0,95"
                        /> */}
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Buss Mall 
                      </h4>
                      <p className="lead text-italic text-white">
                        website to study materails will be pushed soon to the 
                        market to do marketing analysis on it 
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                
              </Row>
            </Container>
          </section>
          
          
      
          
          
        </main>
      </>
    );
  }
}

export default Landing;
