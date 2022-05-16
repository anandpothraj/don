import React, {  } from 'react';
import { Container } from 'react-bootstrap';
import { NewsState } from '../Context';

const CurrentCategories = () =>{

  const { currentCat } = NewsState();
  
    return(
      <>
      <Container className='m-auto mt-0'>
          <h5>{currentCat}</h5>
      </Container>
      </>
    )
  }


export default CurrentCategories;