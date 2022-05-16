import React from 'react';
import { NewsState } from '../Context';
import { Container, Card, Button } from 'react-bootstrap';
import defaultImg from '../img/defaultImg.png';
import { BsFillBookmarkStarFill } from "react-icons/bs";

const CardDiv = () => {

    const { theme , articles, currentIndex } = NewsState();
    if(articles.length > 0){
        var article = articles[currentIndex];
        var title = article.title;
        var img = article.urlToImage;
        var url = article.url;
        var description = article.description;
    }
    

    return (
        <>
        <Container>
            <div className="cardDiv m-auto">
                <Card className="card">
                    <Card.Img  className="cardImg" variant="top" src={img?img:defaultImg} />
                    <Card.Body>
                        <Card.Title className="cardTitle font-weight-bold">
                            <h6>{title?title:"No Title Found"}</h6>
                        </Card.Title>
                        <Card.Text  className="cardDesc font-weight-normal">
                            <small>{description?description:"No Description Found"}</small>
                        </Card.Text>
                        <Button variant={theme} size="sm" href={url?url:"https://optimistic-bhabha-a72880.netlify.app/"} target="_blank" title="ReadMore">Read More</Button>
                        <Button variant={theme} className="mx-2" size="sm" href={url?url:"https://optimistic-bhabha-a72880.netlify.app/"} target="_blank" title="BookMark"><BsFillBookmarkStarFill/></Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
        </>
    )
};

export default CardDiv;