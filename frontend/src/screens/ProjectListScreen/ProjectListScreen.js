import React,{useEffect,useState} from 'react';
import './ProjectListScreen.css';
import {Button,Row,Col,ListGroup, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {listProjects,deleteProject, createProject} from '../../actions/projectActions';
import { PROJECT_CREATE_RESET } from '../../constants/projectConstants';

const ProjectListScreen = ({history}) => {
    const dispatch = useDispatch();


    const adminLogin = useSelector(state=>state.adminLogin);
    const {adminInfo} = adminLogin;

    const projectList = useSelector(state=>state.projectList);
    const {projects, loading} = projectList;

    const projectDelete = useSelector(state=>state.projectDelete);
    const {success:successDelete, error:errorDelete} = projectDelete;

    const projectCreate = useSelector(state=>state.projectCreate);
    const {success:successCreate, error:errorCreate, loading:loadingCreate, project:createdProject} = projectCreate;

    useEffect(() => {
        dispatch({type:PROJECT_CREATE_RESET});
        if(adminInfo.isAdmin){
            dispatch(listProjects())
        }
        else{
            history.push("/admin/login");
        }
        if(successCreate){
            history.push(`/admin/projects/${createdProject._id}/edit`)
        }
        
    }, [dispatch,successDelete,successCreate]);


    const deleteProjectHandler = (id) =>{
        if(window.confirm("Are you sure you want to delete this project?")){
            dispatch(deleteProject(id));
        }

    }
    const createProjectHandler = () =>{
        dispatch(createProject());
    }
    return (
        <div className="screen-long px-xl-5 px-lg-3 px-lg-3 mb-5">
            {loading ? <Loader/>:(
                <div className="px-0 py-5 mb-5 container">
                <Link to="/admin">
                    <Button variant="dark"> <i className="fas fa-chevron-left"></i> Go Back</Button>
                </Link>
                <h1 className="my-5">Projects</h1>
                
                
                <Button variant="success" className="my-5" onClick={createProjectHandler}><i className="fas fa-plus"></i> Add A Project</Button>

                <Table striped bordered hover responsive className="table-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>URL</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project=>{
                                return <tr key={project._id}>
                                    <td>{project._id}</td>
                                    <td>{project.title}</td>
                                    <td><a href={project.url}>{project.url}</a></td>
                                    <td>
                                        <Link to={`/admin/projects/${project._id}/edit`}>
                                            <Button variant="light"><i className="fas fa-edit"></i></Button>
                                        </Link>
                                        
                                        <Button variant="danger" onClick={()=>{
                                            deleteProjectHandler(project._id);
                                        }}><i className="far fa-trash-alt" ></i></Button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
            </div>
            )}
            
        </div>
    )
}

export default ProjectListScreen;
