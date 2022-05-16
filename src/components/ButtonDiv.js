import React  from 'react';
import { Container , Button } from 'react-bootstrap';
import { NewsState } from '../Context';

const ButtonDiv = () => {

  const { theme, currentIndex, setCurrentIndex, lastIndex } = NewsState();

  const nextCard = () => {
    setCurrentIndex(currentIndex+1)
  }

  const prevCard = () => {
    if(currentIndex === 0){
      setCurrentIndex(currentIndex);
    }
    else{
      setCurrentIndex(currentIndex-1);
    }
  }

  return (
    <>
        <Container>
            <div className="d-flex justify-content-between m-2">
            <Button variant={theme} onClick={prevCard} disabled={currentIndex === 0} >&lt;-- Prev</Button>
            <Button variant={theme}  onClick={nextCard} disabled={currentIndex === lastIndex-1}>next --&gt;</Button>
            </div>
        </Container>
    </>
  )
}

export default ButtonDiv;