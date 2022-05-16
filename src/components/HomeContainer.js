import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { NewsState } from '../Context';

const HomeContainer = () => {

    const navigate = useNavigate();
    const userInfo = localStorage.getItem("userInfo");

    const { theme } = NewsState();

  useEffect(() => {
    if (userInfo) {
      navigate("/news");
    }
  }, [userInfo]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to News-Space</h1>
              <p className="subtitle">Best environment to read news</p>
            </div>
            <div className="buttonContainer">
              <Link to="/register">
                <Button variant={theme} size="lg" className="landingbutton">Get Started</Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default HomeContainer;