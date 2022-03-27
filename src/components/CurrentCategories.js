import React, {  } from 'react';
import { Container } from 'react-bootstrap';

const CurrentCategories = (props) =>{
  
    return(
      <>
      <Container className='m-auto mt-0'>
          <h5>{props.currentCat}</h5>
      </Container>
      </>
    )
  }


export default CurrentCategories;