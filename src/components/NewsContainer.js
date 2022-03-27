import React , { useState , useEffect } from 'react';
import { Spinner, Container} from 'react-bootstrap';
import Categories from './Categories';
import CurrentCategories from './CurrentCategories';
import CardDiv from './CardDiv';
import ButtonDiv from './ButtonDiv';
import Img from '../img/defaultImg.png';

const NewsContainer = (props) => {
  
  const [currentCat, setCurrentCat ] = useState("All");
  const [currentIndex, setCurrentIndex ] = useState(0);
  const [ articles , setArticles ] = useState("");
  const lastCard = articles.length;
  const apiKey = "3b8cc2ec31ed4f4c8adb3155639eb972";
  const country = "in";

  const darkMode = props.darkMode;

  useEffect(()=> {
    setCurrentIndex(0);

    const getNews = async () => {
      if(currentCat === "All"){
        const url = `https://newsapi.org/v2/everything?q=india&apiKey=${apiKey}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
      }
      else if(currentCat === "Trending"){
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
      }else{
        let txt = currentCat;
        let newCat = txt.toLowerCase();
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${newCat}&apiKey=${apiKey}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
      }
        
    }

    getNews();


  },[currentCat])

    return (
      <>
        <Categories changeCat={currentCat => setCurrentCat(currentCat)} darkMode={darkMode} currentCat={currentCat}/>
        <CurrentCategories currentCat={currentCat}/>
        {articles?
          <>
            <CardDiv darkMode={darkMode} 
              title={articles?articles[currentIndex].title:"No Title Found"} 
              description={articles?articles[currentIndex].description:"No Description Found"} 
              img={articles?articles[currentIndex].urlToImage:Img} 
              url={articles?articles[currentIndex].url:"https://optimistic-bhabha-a72880.netlify.app/"}/>
            <ButtonDiv currentIndex={currentIndex} onIndexChange={setCurrentIndex} darkMode={darkMode} lastCard={lastCard}/>
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