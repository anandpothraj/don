import React from 'react';
import { Container , Badge} from 'react-bootstrap';
import { NewsState } from '../Context';

const Categories = () => {

  const css = {
    cursor:"pointer"
  }

  const { changeCat, theme } = NewsState();

  const submitHandler = (category) => {
    changeCat(category);
  }

  return (
    <>
      <Container className='align-items-center outContainer mb-0'>
        <div className='wrapper justify-content-between'>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>submitHandler("all")}>My Feeds</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>submitHandler("all")}>All</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>submitHandler("trending")} >Trending</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>submitHandler("business")} >Bussiness</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>submitHandler("entertainment")} >Entertainment</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>submitHandler("general")} >General</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>submitHandler("health")} >Health</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>submitHandler("science")} >Science</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>submitHandler("sports")} >Sports</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} onClick={()=>submitHandler("technology")} >Technology</Badge></h5></div>
        </div>
      </Container>
    </>
    )
  }

export default Categories;



