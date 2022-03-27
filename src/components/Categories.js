import React  from 'react';
import { Container , Badge} from 'react-bootstrap';


const Categories = (props) => {

  const css = {
    cursor:"pointer"
  }

  const theme = props.darkMode; 

  return (
    <>
      <Container className='align-items-center outContainer mb-0'>
        <div className='wrapper justify-content-between'>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="all" onClick={()=>props.changeCat("All")} >All</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="trending" onClick={()=>props.changeCat("Trending")} >Trending</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="bussiness" onClick={()=>props.changeCat("Business")} >Bussiness</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="entertainment"  onClick={()=>props.changeCat("Entertainment")} >Entertainment</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="general"  onClick={()=>props.changeCat("General")} >General</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="health"  onClick={()=>props.changeCat("Health")} >Health</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="science"  onClick={()=>props.changeCat("Science")} >Science</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="sports"  onClick={()=>props.changeCat("Sports")} >Sports</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="technology"  onClick={()=>props.changeCat("Technology")} >Technology</Badge></h5></div>
        </div>
      </Container>
    </>
    )
  }

export default Categories;






// 3b8cc2ec31ed4f4c8adb3155639eb972


