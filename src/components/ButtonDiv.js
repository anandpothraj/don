import React  from 'react';
import { Container , Button } from 'react-bootstrap';

const ButtonDiv = ({darkMode , currentIndex , onIndexChange , lastCard}) => {

  const theme = darkMode;

  const nextCard = () => {
    onIndexChange(currentIndex+1)
  }

  const prevCard = () => {
    if(currentIndex === 0){
      onIndexChange(currentIndex);
    }
    else{
      onIndexChange(currentIndex-1);
    }
  }

  return (
    <>
        <Container>
            <div className="d-flex justify-content-between m-2">
              {
                (currentIndex === 0) ?
                  <Button variant={theme} onClick={prevCard} disabled>&lt;-- Prev</Button>
                :
                  <Button variant={theme} onClick={prevCard} >&lt;-- Prev</Button>
              }
              {
                (currentIndex === lastCard-1) ?
                  <Button variant={theme}  onClick={nextCard} disabled>next --&gt;</Button>
                :
                  <Button variant={theme}  onClick={nextCard} >next --&gt;</Button>
              }
            </div>
        </Container>
    </>
  )
}

export default ButtonDiv;