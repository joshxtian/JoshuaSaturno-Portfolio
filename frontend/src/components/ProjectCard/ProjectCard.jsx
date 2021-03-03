import React from 'react';
import './ProjectCard.css';
import {Link} from 'react-router-dom';
import {Container,Row,Col,Image,ListGroup} from 'react-bootstrap';

const ProjectCard = ({id,title,description,image,md,xl,lg,sm}) => {
    var cardImage = {
        backgroundImage: `url(${image})`,
    };
    return (
        <Col  xl={xl ? xl : 4} lg={lg ? lg : 6} md={md ? md : 6} sm={sm ? sm : 6}className="mb-5">
                <div className="project__card">
                <div className="project__card-image" style={cardImage}></div>
                <div className="project__card-body pb-2 px-3">
                    <h1 className="project__title">{title}</h1>
                    <p className="lead w- 100 project__description ">{description.length < 80 ? description : description.substring(0,80)+"..."}</p>
                    <Link to={`/projects/${id}`}>
                        <p className="project__seemore">See More</p>
                    </Link>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard
