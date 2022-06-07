import React, { useContext }  from 'react';
import { Container , Button } from 'react-bootstrap';
import FastAverageColor from 'fast-average-color';
import { Theme } from '../Context';

const ButtonDiv = ({img}) => {

  const { theme, currentIndex, setCurrentIndex, lastCard , setBgColor}= useContext(Theme);

  const fac = new FastAverageColor();

  fac.getColorAsync(`${img}`)
  .then(color => {
    console.log(color.rgb);
    setBgColor(color.rgb);
  })
  .catch(e => {
    setBgColor("rgb(84,84,84)")
  })

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