import React,{useEffect} from 'react';
import './Skills.css';
import {Container,Row,Col,Image,ListGroup} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import SkillCard from '../../components/SkillCard/SkillCard';
import {useSelector,useDispatch} from 'react-redux';
import { listSkills } from '../../actions/skillActions';

const Skills = () => {
    const dispatch = useDispatch();
    const skillList = useSelector(state=>state.skillList);
    const {skills} = skillList;

    useEffect(() => {
        dispatch(listSkills())
    }, [dispatch])
    return (
    <Container className="px-0 py-5 my-5">  
        
        <Row>
            <h1 className="section__title w-100 text-center display-4 mb-5">My Skills</h1>
            
                {skills.map(skill=>{
                    return <SkillCard key={skill._id} md={6} title={skill.name} image={skill.image}/>
                })}
               
            
        </Row>
    </Container>
    )
}

export default Skills
