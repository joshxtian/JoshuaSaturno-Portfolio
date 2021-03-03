import React,{useEffect} from 'react';
import './ProjectScreen.css';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Carousel, Image,} from 'react-bootstrap';
import {listDetailsProject, listProjects} from '../../actions/projectActions';
import {useDispatch,useSelector} from 'react-redux';
import Loader from '../../components/Loader/Loader';

const ProjectScreen = ({history,match}) => {
    const dispatch = useDispatch();

    const projectDetails = useSelector(state=>state.projectDetails);
    const {loading,project} = projectDetails;
   

    useEffect(() => {
        window.scrollTo(0,0);
            dispatch(listDetailsProject(match.params.id))
    }, [dispatch])
    return (
        <div className="projectscreen px-xl-5 px-lg-3 px-lg-3 mb-5">
            <div className="px-0 py-5 mb-5 container">
                {loading ? <div className="center-Loader-long"><Loader/></div> : (
                    <>
                        <Link to="/">
                            <Button variant="dark"> <i className="fas fa-chevron-left"></i> Go Back</Button>
                        </Link>
                        <h1 className="my-5">{project.title}</h1>
                        <Carousel pause="hover" slide interval={3000}>
                            {project.images.map((image,index)=>{
                                return  <Carousel.Item key={index}>
                                <Image  src={image} fluid/>
                                <Carousel.Caption className="carousel-caption">
                                </Carousel.Caption>
                            </Carousel.Item>
                            })}
                        </Carousel>
                
                        <div className="projectscreen__body p-5">
                    
                            <h1 className="projectscreen__attribute-title my-5">Project Title: <i>{project.title}</i></h1>
                            <h1 className="projectscreen__attribute-title my-5">URL:<a className="projectscreen__attribute" href={project.url}> {project.url}</a></h1>
                            <div className="projectscreen__description">
                                <h1 className="projectscreen__attribute-title mb-2">Description</h1>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </>
                )}
               
            </div>
        </div>
    )
}

export default ProjectScreen;
