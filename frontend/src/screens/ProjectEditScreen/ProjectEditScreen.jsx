import React,{useEffect,useState}from 'react';
import {Button,Form,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { listDetailsProject, updateProject } from '../../actions/projectActions';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import axios from 'axios';
import { PROJECT_UPDATE_RESET } from '../../constants/projectConstants';



const ProjectEditScreen = ({match,history}) => {
    const dispatch = useDispatch();
    const projectId = match.params.id;
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");

    const [coverImage, setCoverImage] = useState("");
    const [images, setImages] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [multiUploading, setMultiUploading] = useState(false);

    const projectDetails = useSelector(state=>state.projectDetails);
    const {project} = projectDetails;
    
    const adminLogin = useSelector(state=>state.adminLogin);
    const {adminInfo} = adminLogin;

    const projectUpdate = useSelector(state=>state.projectUpdate);
    const {success:updateSuccess, error:errorUpdate, loading:loadingUpdate} = projectUpdate;
    
    useEffect(()=>{
        if(!adminInfo){
            history.push("/");
        }
        else{
            if(updateSuccess){
                dispatch({type:PROJECT_UPDATE_RESET});
                history.push(`/admin/projects`);
            }
            else{
                if(!project.title || project._id !== projectId){
                    dispatch(listDetailsProject(projectId));
                }
                else{
                    setTitle(project.title);
                    setUrl(project.url);
                    setCoverImage(project.coverImage);
                    setImages(project.images);
                    setDescription(project.description);
                }
                
            }
        }
    },[dispatch,projectId,project,history,loadingUpdate]);

  
    const uploadSingleFileHandler = async (e) =>{
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("coverImage",file);
        setUploading(true);
        try {
            const config = {
                headers:{
                    "Content-Type": "multipart/form-data",
                }
            }

            const {data} = await axios.post("/api/upload",formData, config);

            setCoverImage(data); 
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    }
    const updateProjectHandler = (e) =>{
        e.preventDefault();
        dispatch(updateProject({
            _id:projectId,
            title,
            url,
            description,
            coverImage,
            images,
        }));
    }
    const uploadMultipleFileHandler = async (e) =>{
        const files = e.target.files;
        const formData = new FormData();
        for(var i = 0;i< files.length;i++){
            formData.append("carouselImage",files[i]);
        }
        setMultiUploading(true);
        try {
            const config = {
                headers:{
                    "Content-Type": "multipart/form-data",
                }
            }
            const {data} = await axios.post("/api/upload/photos",formData, config);
            setImages(data); 
            
            setMultiUploading(false);
        } catch (error) {
            console.error(error);
            setMultiUploading(false);
        }
    }
    return (
        <div className="sectionlist px-xl-5 px-lg-3 px-lg-3 mb-5">
            <div className="px-0 py-5 mb-5 container">
                <Link to="/admin/projects">
                    <Button variant="dark"> <i className="fas fa-chevron-left"></i> Go Back</Button>
                </Link>
                <h1 className="my-5">Edit a project</h1>
                <Form onSubmit={updateProjectHandler}>
                    <Row>
                        <Col>
                            <Form.Group className="my-3" controlId="title">
                                <Form.Label>Project Title</Form.Label>
                                <Form.Control type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter Project Title"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="my-3" controlId="title">
                                <Form.Label>URL</Form.Label>
                                <Form.Control value={url} onChange={e=>setUrl(e.target.value)} type="text" placeholder="Enter Project Title"></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                   
                    <Form.Group className="my-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={description} onChange={e=>setDescription(e.target.value)} type="text" as="textarea" placeholder="Describe your project" row={3}></Form.Control>
                    </Form.Group>
                    <Row>
                        <Col className="">
                            <Form.Label>Cover Image</Form.Label>
                            <Form.Control type="text" value={coverImage} onChange={e=>setCoverImage(e.target.value)} placeholder="Enter Project Cover Image"></Form.Control>
                            <Form.File className="mb-3" label="Upload Cover Image" onChange={uploadSingleFileHandler}>
                            </Form.File>
                            {uploading && <Loader/>}
                            <Message  variant="danger">
                                Please Upload Images with 1860x970 Dimension!
                            </Message>
                        </Col>
                        <Col className="">
                            <Form.Label>Carousel Images</Form.Label>
                            <Form.File multiple className="mb-3" label="Upload Carousel Image" onChange={uploadMultipleFileHandler}>
                            </Form.File>
                            {uploading && <Loader/>}
                            <Message  variant="danger">
                                Please Upload Images with 1860x970 Dimension!
                            </Message>
                        </Col>
                    </Row>

                    <Button type="submit" variant="success" className="my-5" ><i className="fas fa-plus"></i> Update Project</Button>
                </Form>
               
            </div>
        </div>
    )
}

export default ProjectEditScreen
