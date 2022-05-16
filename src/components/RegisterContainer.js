import React , { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import MainContainer from "./MainContainer";
import SelectCategories from "./SelectCategories";
import { NewsState } from '../Context';

const RegisterContainer = () => {

  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");
  const { name, setName, email, setEmail, selectedCategories,theme } = NewsState();
  
  const submitHandler = (e) => {
    e.preventDefault();
    if(name && email && selectedCategories.length > 0){
      const data = {name,email,selectedCategories};
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/news");
    }
    else{
      console.log("Please fill all details");
    };
  };

  useEffect(() => {
    if(userInfo){
      navigate("/news")
    }
  })

  return (
    <MainContainer title="GET STARTED">
      <div className="loginContainer">
        <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="mt-2"> 
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-2"> 
            <Form.Label>Select Categories</Form.Label>
            <SelectCategories/>
          </Form.Group>
          <Button variant={theme} type="submit" className="mt-2">
            Lets Begin
          </Button>
        </Form>
      </div>
    </MainContainer>
  );
}

export default RegisterContainer;