import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {adminLoginReducer} from './reducers/adminReducers';
import {skillListReducer} from './reducers/skillReducers';
import {projectListReducer, projectDetailsReducer, projectDeleteReducer, projectCreateReducer,projectUpdateReducer} from './reducers/projectReducers';
import { mailDeleteReducer, mailListReducer, mailSendReducer } from './reducers/mailReducers';

const reducer = combineReducers({
    adminLogin:adminLoginReducer,
    projectList:projectListReducer,
    projectDetails:projectDetailsReducer,
    projectDelete:projectDeleteReducer,
    projectUpdate:projectUpdateReducer,
    projectCreate:projectCreateReducer,
    skillList:skillListReducer,
    mailSend:mailSendReducer,
    mailList:mailListReducer,
    mailDelete:mailDeleteReducer,
});
const adminInfoFromStorage = localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')) : null;
const initialState = {
    adminLogin: {adminInfo:adminInfoFromStorage},
};
const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;