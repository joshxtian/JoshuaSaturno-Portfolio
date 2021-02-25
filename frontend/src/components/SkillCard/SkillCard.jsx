import React from 'react';
import './SkillCard.css'
import {Container,Row,Col,Image,ListGroup} from 'react-bootstrap';

const SkillCard = ({image,title,xl,lg,md,sm,xs}) => {
    return (
        <Col className="mb-5" xl={xl ? xl : 3} lg={lg ? lg : 4} md={md ? md : 6} sm={sm ? sm : 6} xs={xs ? xs : 6}>
            <div className="skill__card p-3">
                <Image className="skills__card-image mx-auto" src={image}/>
                <h1 className="skill__card-title text-center">{title}</h1>
            </div>
        </Col>
    )
}

export default SkillCard
