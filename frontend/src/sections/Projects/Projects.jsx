import React,{useEffect} from 'react';
import './Projects.css';
import {Link} from 'react-router-dom';
import {Container,Row,Col,Image,ListGroup} from 'react-bootstrap';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import {listProjects} from '../../actions/projectActions';
import {useSelector,useDispatch} from 'react-redux';

const Projects = () => {
    const dispatch = useDispatch();
    const projectList = useSelector(state=>state.projectList);
    const {projects} = projectList;
    useEffect(() => {
        dispatch(listProjects())
    }, [dispatch])
    return (
        <Container className="px-0 py-5 my-5">
            

            <Row>
                <h1 className="section__title w-100 text-center display-4 mb-5">Projects</h1>
                
                {projects.map(project=>{
                    return <ProjectCard key={project._id}  id={project._id} image={project.coverImage} title={project.title} description={project.description}/>
                })}
               
               
            </Row>
        </Container>
    )
}

export default Projects
