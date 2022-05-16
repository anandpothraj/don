import React from 'react';
import { Container , Badge } from 'react-bootstrap';
import { NewsState } from '../Context';


const SelectCategories = () => {

  const css = {
    cursor:"pointer"
  }

  const { selectedCategories,setSelectedCategories,theme} = NewsState();

  const handleSubmit = (category) => {
    setSelectedCategories([...selectedCategories,category]);
  }

  return (
    <>
      <Container className='align-items-center outContainer mb-0'>
        <div className='wrapper justify-content-between'>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>handleSubmit("Trending")}>Trending</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>handleSubmit("Bussiness")} >Bussiness</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>handleSubmit("Entertainment")} >Entertainment</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>handleSubmit("General")} >General</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>handleSubmit("Health")} >Health</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>handleSubmit("Science")} >Science</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>handleSubmit("Sports")} >Sports</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>handleSubmit("Technology")} >Technology</Badge></h5></div>
        </div>
      </Container>
    </>
    )

  }

export default SelectCategories;



