import React , { useContext } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import defaultImg from '../img/defaultImg.png';
import { Theme } from '../Context';

const CardDiv = (props) => {

    const { theme } = useContext(Theme);
    const title = props.title;
    const img = props.img;
    const url = props.url;
    const description = props.description;

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
                        <Button variant={theme} size="sm" href={url?url:"https://optimistic-bhabha-a72880.netlify.app/"} target="_blank">Read More</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
        </>
    )
};

export default CardDiv;