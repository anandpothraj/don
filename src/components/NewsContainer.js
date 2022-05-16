import React , { useEffect } from 'react';
import { Spinner, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Categories from './Categories';
import CurrentCategories from './CurrentCategories';
import CardDiv from './CardDiv';
import ButtonDiv from './ButtonDiv';
import { NewsState } from '../Context';

const NewsContainer = () => {
  
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");
  const { articles } = NewsState();
  

  useEffect(()=>{
    if(!userInfo){
      navigate("/");
    }
  })

    return (
      <>
        <Categories/>
        <CurrentCategories/>
        {articles?
          <>
            <CardDiv/>
            <ButtonDiv/>
          </>
           :
           <>
            <Container className='d-flex justify-content-center'>
                <Spinner animation="border" className='m-auto'/>
            </Container>
          </>
        }
      </>
    )
}

export default NewsContainer;
